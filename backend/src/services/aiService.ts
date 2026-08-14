import { Career } from '../models/Schemas';

interface AssessmentAnswers {
  interests: string[];
  personality: string;
  hobbies: string[];
  strengths: string[];
  weaknesses: string[];
  academicBackground: string;
  preferredWorkStyle: string;
}

export class AIService {
  private static getGeminiKey() {
    return process.env.GEMINI_API_KEY || '';
  }

  private static getOpenAIKey() {
    return process.env.OPENAI_API_KEY || '';
  }

  /**
   * Helper to query Gemini API v1beta via fetch
   */
  private static async queryGemini(prompt: string, jsonMode: boolean = true): Promise<string> {
    const key = this.getGeminiKey();
    try {
      // Try primary gemini-1.5-flash model
      let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
      let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: jsonMode ? {
            responseMimeType: 'application/json'
          } : undefined
        })
      });

      // Fallback to gemini-2.0-flash or gemini-1.5-pro if needed
      if (!response.ok) {
        url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`;
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: jsonMode ? {
              responseMimeType: 'application/json'
            } : undefined
          })
        });
      }

      if (!response.ok) {
        throw new Error(`Gemini API returned status ${response.status}`);
      }

      const data = (await response.json()) as any;
      return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } catch (error) {
      console.error('Gemini query error, falling back:', error);
      throw error;
    }
  }

  /**
   * Helper to query OpenAI API via fetch
   */
  private static async queryOpenAI(prompt: string, jsonMode: boolean = true): Promise<string> {
    const key = this.getOpenAIKey();
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: jsonMode ? { type: 'json_object' } : undefined
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API returned status ${response.status}`);
      }

      const data = (await response.json()) as any;
      return data.choices?.[0]?.message?.content || '';
    } catch (error) {
      console.error('OpenAI query error, falling back:', error);
      throw error;
    }
  }

  /**
   * AI Assessment evaluator
   */
  static async evaluateAssessment(answers: AssessmentAnswers) {
    const apiPrompt = `
      You are a professional Career Guidance AI counselor. Analyze the following user assessment and return a structured JSON response:
      - Interests: ${answers.interests.join(', ')}
      - Personality traits: ${answers.personality}
      - Hobbies: ${answers.hobbies.join(', ')}
      - Strengths: ${answers.strengths.join(', ')}
      - Weaknesses: ${answers.weaknesses.join(', ')}
      - Academic background: ${answers.academicBackground}
      - Preferred Work Style: ${answers.preferredWorkStyle}

      Return a JSON object matching this structure EXACTLY:
      {
        "compatibilityScores": [
          { "careerTitle": "Software Engineer", "score": 85 },
          { "careerTitle": "Data Scientist", "score": 70 },
          { "careerTitle": "AI Engineer", "score": 65 },
          { "careerTitle": "Cyber Security Analyst", "score": 60 },
          { "careerTitle": "UI/UX Designer", "score": 55 },
          { "careerTitle": "Product Manager", "score": 50 },
          { "careerTitle": "Digital Marketer", "score": 40 }
        ],
        "personalityInsights": "Detailed description of their personality type and how it meshes with different professional spaces.",
        "strengthAnalysis": ["Insight 1", "Insight 2", "Insight 3"]
      }
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt);
        return JSON.parse(text);
      } catch (e) { /* fallback */ }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt);
        return JSON.parse(text);
      } catch (e) { /* fallback */ }
    }

    // Mock AI fallbacks
    let primaryMatch = 'Software Engineer';
    let secondaryMatch = 'UI/UX Designer';
    let scores = [
      { careerTitle: 'Software Engineer', score: 65 },
      { careerTitle: 'Data Scientist', score: 60 },
      { careerTitle: 'AI Engineer', score: 55 },
      { careerTitle: 'Cyber Security Analyst', score: 50 },
      { careerTitle: 'UI/UX Designer', score: 45 },
      { careerTitle: 'Product Manager', score: 40 },
      { careerTitle: 'Digital Marketer', score: 35 }
    ];

    const interestsStr = answers.interests.join(' ').toLowerCase();
    const style = answers.preferredWorkStyle.toLowerCase();
    const background = answers.academicBackground.toLowerCase();

    // Dyn scoring based on words
    if (interestsStr.includes('code') || interestsStr.includes('program') || interestsStr.includes('software') || background.includes('cs') || background.includes('computer')) {
      scores = scores.map(s => {
        if (s.careerTitle === 'Software Engineer') return { ...s, score: 92 };
        if (s.careerTitle === 'AI Engineer') return { ...s, score: 88 };
        if (s.careerTitle === 'Data Scientist') return { ...s, score: 80 };
        return s;
      });
      primaryMatch = 'Software Engineer';
      secondaryMatch = 'AI Engineer';
    } else if (interestsStr.includes('design') || interestsStr.includes('art') || interestsStr.includes('creative') || interestsStr.includes('interface')) {
      scores = scores.map(s => {
        if (s.careerTitle === 'UI/UX Designer') return { ...s, score: 94 };
        if (s.careerTitle === 'Software Engineer') return { ...s, score: 70 };
        return s;
      });
      primaryMatch = 'UI/UX Designer';
      secondaryMatch = 'Software Engineer';
    } else if (interestsStr.includes('data') || interestsStr.includes('math') || interestsStr.includes('statistics') || interestsStr.includes('analysis')) {
      scores = scores.map(s => {
        if (s.careerTitle === 'Data Scientist') return { ...s, score: 95 };
        if (s.careerTitle === 'AI Engineer') return { ...s, score: 85 };
        return s;
      });
      primaryMatch = 'Data Scientist';
      secondaryMatch = 'AI Engineer';
    } else if (interestsStr.includes('security') || interestsStr.includes('hacking') || interestsStr.includes('network')) {
      scores = scores.map(s => {
        if (s.careerTitle === 'Cyber Security Analyst') return { ...s, score: 94 };
        return s;
      });
      primaryMatch = 'Cyber Security Analyst';
      secondaryMatch = 'Software Engineer';
    } else if (interestsStr.includes('lead') || interestsStr.includes('organize') || interestsStr.includes('business') || style.includes('collaborative')) {
      scores = scores.map(s => {
        if (s.careerTitle === 'Product Manager') return { ...s, score: 90 };
        if (s.careerTitle === 'Digital Marketer') return { ...s, score: 80 };
        return s;
      });
      primaryMatch = 'Product Manager';
      secondaryMatch = 'Digital Marketer';
    }

    scores.sort((a, b) => b.score - a.score);

    const personalityInsights = `Based on your academic profile in "${answers.academicBackground}" and a work style leaning toward "${answers.preferredWorkStyle}", you demonstrate a ${answers.personality} personality model. You operate best in roles that emphasize ${answers.strengths.slice(0, 2).join(' and ')}. Your interests indicate a strong drive for problem-solving. We recommend investigating roles starting with "${primaryMatch}" or "${secondaryMatch}".`;

    return {
      compatibilityScores: scores,
      personalityInsights,
      strengthAnalysis: [
        `Highly developed capability in: ${answers.strengths.join(', ')}.`,
        `Comfortable with the ${answers.preferredWorkStyle} team format.`,
        `Able to overcome vulnerabilities in ${answers.weaknesses.join(' or ')} by adopting active task checklists.`
      ]
    };
  }

  /**
   * Compare Career Skills vs User Current Skills (Skill Gap Analyzer)
   */
  static async analyzeSkillGap(currentSkills: string[], targetCareerTitle: string) {
    const career = await Career.findOne({ title: targetCareerTitle });
    const requiredSkills = career ? career.requiredSkills : ['JavaScript', 'HTML/CSS', 'Git', 'React', 'Node.js', 'System Design'];

    const existingSkills = currentSkills.filter(s => 
      requiredSkills.some(req => req.toLowerCase() === s.toLowerCase())
    );

    const missingSkills = requiredSkills.filter(req => 
      !currentSkills.some(s => s.toLowerCase() === req.toLowerCase())
    );

    const learningPriorities = missingSkills.slice(0, 3);
    const improvementSuggestions = missingSkills.map(s => `Take a specialized certifications course or build an isolated Github project highlighting ${s} integration.`);

    if (missingSkills.length === 0) {
      improvementSuggestions.push("You possess all major required skills! Focus on advanced system architecture, portfolio branding, and practice system design mock interviews.");
    }

    return {
      targetCareerTitle,
      existingSkills,
      missingSkills,
      learningPriorities,
      improvementSuggestions
    };
  }

  /**
   * Generate Custom Learning Roadmap
   */
  static generateRoadmap(currentSkills: string[], targetCareerTitle: string) {
    // We return a structured 6-month roadmap
    // Tailored dynamically depending on target career
    const roadmap: { month: number; topic: string; milestones: string[] }[] = [];

    if (targetCareerTitle.toLowerCase().includes('data') || targetCareerTitle.toLowerCase().includes('science')) {
      roadmap.push(
        { month: 1, topic: 'Python Programming & SQL Fundamentals', milestones: ['Master basic operations, loops, functions, lists in Python', 'Practice basic querying, JOINs, aggregations in PostgreSQL'] },
        { month: 2, topic: 'Data Structures & Libraries (Pandas/NumPy)', milestones: ['Clean databases using Pandas', 'Handle multidimensional mathematical vectors in NumPy'] },
        { month: 3, topic: 'Data Visualization & Applied Statistics', milestones: ['Build charts with Seaborn and Matplotlib', 'Learn normal distributions, hypotheses tests, confidence scales'] },
        { month: 4, topic: 'Machine Learning Models (Scikit-Learn)', milestones: ['Implement Linear and Logistic Regressions', 'Assess models using accuracy, precision, F1-scores'] },
        { month: 5, topic: 'Data Mining Portfolios & Kaggle', milestones: ['Participate in 1 ML competition', 'Upload data analysis notebook to Github'] },
        { month: 6, topic: 'SQL/ML Interviews & Certifications', milestones: ['Complete Google Data Analytics Certificate', 'Practice SQL queries on LeetCode'] }
      );
    } else if (targetCareerTitle.toLowerCase().includes('design') || targetCareerTitle.toLowerCase().includes('ux') || targetCareerTitle.toLowerCase().includes('ui')) {
      roadmap.push(
        { month: 1, topic: 'UI/UX Fundamentals & Typography', milestones: ['Learn grid spacing, layouts, alignment, and color models', 'Study typography guidelines for mobile vs web viewports'] },
        { month: 2, topic: 'Figma Tooling & Component Design', milestones: ['Master Figma auto-layout, vectors, and components', 'Develop interactive animations and mock prototyping'] },
        { month: 3, topic: 'User Research & Personas', milestones: ['Formulate research questions and map user interviews', 'Create empathy maps and targeted user journey maps'] },
        { month: 4, topic: 'Wireframing & Information Architecture', milestones: ['Design paper sketches and low-fidelity structural UI', 'Organize menu navigation and app structural hierarchies'] },
        { month: 5, topic: 'Complete Design Case Studies', milestones: ['Optimize a client checkout workflow UI', 'Write design case-study detailing problems and solutions'] },
        { month: 6, topic: 'Portfolio Launch & Mock Reviews', milestones: ['Publish Behance/Dribbble layouts', 'Receive layout feedback from industry experts'] }
      );
    } else if (targetCareerTitle.toLowerCase().includes('security') || targetCareerTitle.toLowerCase().includes('cyber')) {
      roadmap.push(
        { month: 1, topic: 'Networking Basics & Linux Command Line', milestones: ['Learn OSI model layers, TCP/UDP protocols, subnet configurations', 'Navigate and administer Linux directory spaces securely'] },
        { month: 2, topic: 'Security Foundations & Auditing Tools', milestones: ['Analyze OWASP Top 10 vulnerabilities', 'Perform network vulnerability scans using Nmap/Wireshark'] },
        { month: 3, topic: 'CompTIA Security+ Prep', milestones: ['Study symmetric/asymmetric cryptology models', 'Understand common malicious trojans, viruses, and phishing threats'] },
        { month: 4, topic: 'Defensive Security & SIEM Logger Logs', milestones: ['Monitor networks using Splunk dashboards', 'Configure firewalls and access controls to block payloads'] },
        { month: 5, topic: 'Offensive Penetration Testing Labs', milestones: ['Practice ethical hacking labs on TryHackMe', 'Audit web services for SQL injection (SQLi) vulnerabilities'] },
        { month: 6, topic: 'Certification & Incident Reports', milestones: ['Obtain Security+ or eJPT certifications', 'Draft professional security remediation reports'] }
      );
    } else {
      // Default to Software Engineer / Developer roadmap
      roadmap.push(
        { month: 1, topic: 'HTML, CSS & Vanilla Javascript Basics', milestones: ['Understand flexbox, responsive styling, variables', 'Learn DOM selections, arrays, callbacks, asynchronous promises'] },
        { month: 2, topic: 'Modern Frontend (React & TypeScript)', milestones: ['Learn state hooks, effects, state props in React', 'Implement TypeScript type boundaries on props and states'] },
        { month: 3, topic: 'Backend Architectures (Node.js & Express)', milestones: ['Establish Express servers with REST guidelines', 'Configure cors, middleware, and request validations'] },
        { month: 4, topic: 'Databases & Mongoose Connections', milestones: ['Create SQL Tables or MongoDB Document Collections', 'Perform full CRUD actions safely utilizing Mongoose Schemas'] },
        { month: 5, topic: 'Git Collaborations & Full-Stack Projects', milestones: ['Organize Git branches, pull-requests, and merge updates', 'Build and deploy a full-stack SaaS platform'] },
        { month: 6, topic: 'ATS Resume Adjustments & Mock Tests', milestones: ['Calculate ATS keyword densities and clean layout rules', 'Practice basic algorithms (Arrays, Strings) on LeetCode'] }
      );
    }

    return roadmap;
  }

  /**
   * Parse Resume (Simulated or Real LLM)
   */
  static async analyzeResume(resumeText: string, targetCareer: string) {
    const apiPrompt = `
      You are an expert HR ATS analyzer. Review this parsed resume text and analyze it for a "${targetCareer}" role.
      Resume text:
      "${resumeText}"

      Return a JSON response matching this structure EXACTLY:
      {
        "atsScore": 75,
        "feedback": {
          "atsRating": "Good / Fair / Excellent",
          "keywordsFound": ["React", "CSS"],
          "keywordsMissing": ["TypeScript", "System Design"],
          "formattingIssues": ["No summary block detected"],
          "grammarIssues": [],
          "strengths": ["Clear job descriptions"]
        },
        "missingSkills": ["TypeScript", "System Design"],
        "improvements": ["Incorporate metric achievements", "Add a skill summary"]
      }
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt);
        return JSON.parse(text);
      } catch (e) { /* fallback */ }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt);
        return JSON.parse(text);
      } catch (e) { /* fallback */ }
    }

    // Mock resume analyzer (intelligent parser)
    const lowercaseText = resumeText.toLowerCase();
    const keywords = ['react', 'node', 'javascript', 'typescript', 'python', 'sql', 'docker', 'git', 'aws', 'figma', 'agile', 'scrum', 'html', 'css', 'kubernetes', 'mongodb', 'express', 'linux', 'networks', 'analytics'];
    
    const keywordsFound = keywords.filter(k => lowercaseText.includes(k)).map(k => k.toUpperCase());
    
    // Career specific required skills
    let targetSkills = ['GIT'];
    if (targetCareer.toLowerCase().includes('software')) targetSkills = ['JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NODE', 'MONGODB', 'GIT'];
    if (targetCareer.toLowerCase().includes('data')) targetSkills = ['PYTHON', 'SQL', 'ANALYTICS', 'GIT'];
    if (targetCareer.toLowerCase().includes('ai')) targetSkills = ['PYTHON', 'LLMS', 'PYTORCH', 'GIT'];
    if (targetCareer.toLowerCase().includes('security')) targetSkills = ['NETWORKS', 'LINUX', 'FIREWALLS', 'SIEM'];
    if (targetCareer.toLowerCase().includes('design')) targetSkills = ['FIGMA', 'UX', 'UI', 'HTML', 'CSS'];
    if (targetCareer.toLowerCase().includes('product')) targetSkills = ['AGILE', 'SCRUM', 'ANALYTICS', 'JIRA'];

    const keywordsMissing = targetSkills.filter(s => !keywordsFound.includes(s));
    
    // Calculate score
    const matchingCount = targetSkills.length - keywordsMissing.length;
    let atsScore = 50 + Math.floor((matchingCount / targetSkills.length) * 35);
    if (lowercaseText.includes('experience') || lowercaseText.includes('work')) atsScore += 10;
    if (atsScore > 98) atsScore = 98;

    let atsRating = 'Needs Work';
    if (atsScore >= 70) atsRating = 'Good';
    if (atsScore >= 85) atsRating = 'Excellent';

    const formattingIssues: string[] = [];
    if (!lowercaseText.includes('contact') && !lowercaseText.includes('phone') && !lowercaseText.includes('email')) {
      formattingIssues.push('Contact info (phone/email) is missing or hard to extract.');
    }
    if (!lowercaseText.includes('education') && !lowercaseText.includes('degree') && !lowercaseText.includes('university') && !lowercaseText.includes('college')) {
      formattingIssues.push('Education background not explicitly identified.');
    }

    const improvements = [
      `Add more projects highlighting your implementation of missing keywords: ${keywordsMissing.join(', ')}.`,
      'Quantify your achievements (e.g., "improved website performance by 30%" instead of "worked on website").',
      'Format resume structure with clean headings like: Experience, Education, Projects, and Skills.'
    ];

    return {
      atsScore,
      feedback: {
        atsRating,
        keywordsFound,
        keywordsMissing,
        formattingIssues: formattingIssues.length > 0 ? formattingIssues : ['No critical formatting errors found.'],
        grammarIssues: ['No critical typos detected. (Self-checks recommended)'],
        strengths: ['Great usage of active verbs.', 'Structured timeline format.']
      },
      missingSkills: keywordsMissing,
      improvements
    };
  }

  /**
   * Generate AI Resume Summary for Builder
   */
  static async generateSummary(name: string, targetCareer: string, skills: string[] = [], experienceContext?: string) {
    const prompt = `Write a high-impact, professional 2-3 sentence resume summary for ${name || 'a candidate'} applying for a "${targetCareer || 'Software Engineer'}" position.
Top Skills: ${skills.join(', ') || 'React, TypeScript, Node.js, Cloud APIs'}.
Context: ${experienceContext || 'Strong background in modern software engineering, clean code, and scalable architecture.'}
Return JSON: {"summary": "..."}`;

    if (this.getGeminiKey()) {
      try {
        const resText = await this.queryGemini(prompt);
        const parsed = JSON.parse(resText);
        if (parsed.summary) return parsed.summary;
      } catch (e) {}
    } else if (this.getOpenAIKey()) {
      try {
        const resText = await this.queryOpenAI(prompt);
        const parsed = JSON.parse(resText);
        if (parsed.summary) return parsed.summary;
      } catch (e) {}
    }

    // Intelligent fallback
    const skillsList = skills.length > 0 ? skills.slice(0, 4).join(', ') : 'modern technology stacks';
    return `Results-driven and innovative ${targetCareer || 'Software Specialist'} with hands-on expertise in ${skillsList}. Passionate about engineering high-throughput solutions, optimizing system performance, and driving impactful project deliverables in collaborative agile environments.`;
  }

  /**
   * Enhance Draft Resume Bullet Point for Builder
   */
  static async enhanceBulletPoint(originalBullet: string, targetCareer: string) {
    const prompt = `Rewrite this draft resume bullet point into a high-impact, metric-driven action bullet tailored for a "${targetCareer}" role:
Original: "${originalBullet}"
Return JSON: {"enhanced": "...", "impact": "+XX% Metric Impact"}`;

    if (this.getGeminiKey()) {
      try {
        const resText = await this.queryGemini(prompt);
        const parsed = JSON.parse(resText);
        if (parsed.enhanced) return parsed;
      } catch (e) {}
    } else if (this.getOpenAIKey()) {
      try {
        const resText = await this.queryOpenAI(prompt);
        const parsed = JSON.parse(resText);
        if (parsed.enhanced) return parsed;
      } catch (e) {}
    }

    // Intelligent fallback enhancement generator
    let enhanced = originalBullet;
    if (!originalBullet.toLowerCase().includes('reduced') && !originalBullet.toLowerCase().includes('improved')) {
      enhanced = `Engineered robust architecture for ${originalBullet.toLowerCase().replace(/^(built|worked on|developed|created|made)\s+/, '')}, improving processing efficiency by 32% and sub-second latency targets.`;
    } else {
      enhanced = `${originalBullet} resulting in a 25% increase in operational throughput.`;
    }

    return {
      enhanced,
      impact: '+25% Quantified Impact'
    };
  }

  /**
   * AI Interview Simulator Question Generator
   */
  static generateInterviewQuestions(type: 'HR' | 'Technical' | 'Behavioral', careerTitle: string) {
    if (type === 'Technical') {
      if (careerTitle.toLowerCase().includes('data')) {
        return [
          'What is the difference between supervised and unsupervised learning, and can you give an example of each?',
          'How do you handle missing or corrupted data values in a database query, and what is your preprocessing steps?',
          'Can you explain what overfitting is and how you prevent it when training a machine learning model?'
        ];
      }
      if (careerTitle.toLowerCase().includes('design')) {
        return [
          'What is the difference between UI and UX, and how do you conduct user research for a new landing page?',
          'What are the key principles of responsive web design and mobile-first layouts?',
          'How do you manage a complex design system in Figma when working across a multi-developer product team?'
        ];
      }
      return [
        'What is a Closure in JavaScript, and what are its practical use cases in React?',
        'How do you optimize a sluggish database query that performs multiple heavy JOIN operations?',
        'Explain the MVC or Clean Architecture structure, and why separating layers matters in production.'
      ];
    }

    if (type === 'Behavioral') {
      return [
        'Describe a time you faced a heavy technical challenge. How did you resolve the situation under constraint?',
        'Tell me about a project where you had a significant disagreement with a teammate or designer. How did you resolve it?',
        'Give an example of a goal you set and how you went about achieving it, highlighting any obstacles you cleared.'
      ];
    }

    // Default HR questions
    return [
      'Tell me about yourself and what drew you to apply for the position as a ' + careerTitle + '?',
      'Why do you want to work at Futuro AI, and what value can you bring to our team?',
      'Where do you see yourself in five years, and what certifications or milestones do you plan to achieve?'
    ];
  }

  /**
   * AI Interview Evaluator
   */
  static async evaluateInterviewResponse(question: string, answer: string, type: 'HR' | 'Technical' | 'Behavioral') {
    const apiPrompt = `
      You are an expert HR interviewer. Evaluate this candidate response to the question.
      Question: "${question}"
      Answer: "${answer}"
      Type: "${type}"

      Return a JSON response matching this structure EXACTLY:
      {
        "score": 8,
        "feedback": "Detailed paragraph of feedback pointing out what they answered well and what technical/behavioral concepts they missed."
      }
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt);
        return JSON.parse(text);
      } catch (e) { /* fallback */ }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt);
        return JSON.parse(text);
      } catch (e) { /* fallback */ }
    }

    // Mock evaluation
    const wordCount = answer.trim().split(/\s+/).length;
    let score = 5;
    let feedback = '';

    if (wordCount < 10) {
      score = 4;
      feedback = 'The response was too short. Try to elaborate on your past projects, mention specific technology tools, and structure your explanation using the STAR method (Situation, Task, Action, Result).';
    } else {
      score = 7;
      if (wordCount > 30) score += 1;
      
      const containsTechKeywords = ['react', 'python', 'sql', 'git', 'experience', 'worked', 'solved', 'team', 'learned'].some(w => answer.toLowerCase().includes(w));
      if (containsTechKeywords) score += 1;

      if (score > 10) score = 10;

      feedback = `Excellent structuring. You clearly stated your concepts. To score higher, make sure to quantify your direct impact (e.g. times saved, error reductions) and keep your voice clear.`;
    }

    return { score, feedback };
  }

  /**
   * AI Chatbot Responder
   */
  static async getChatResponse(chatHistory: { role: 'user' | 'assistant'; content: string }[], currentMessage: string) {
    const historyPrompt = chatHistory.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}`).join('\n');
    const apiPrompt = `
      You are Futuro AI, an intelligent, inspiring, and professional career mentor.
      Answering questions about careers, jobs, skills, certifications, resume formatting, and roadmaps.
      Provide concise, highly actionable advice with markdown highlights.

      Chat History:
      ${historyPrompt}

      User: ${currentMessage}
      Assistant:
    `;

    if (this.getGeminiKey()) {
      try {
        const response = await this.queryGemini(apiPrompt, false);
        return response;
      } catch (e) { /* fallback */ }
    } else if (this.getOpenAIKey()) {
      try {
        const response = await this.queryOpenAI(apiPrompt, false);
        return response;
      } catch (e) { /* fallback */ }
    }

    // Mock chatbot logic
    const lower = currentMessage.toLowerCase();
    
    if (lower.includes('software') || lower.includes('developer') || lower.includes('programmer')) {
      return `### How to Become a Software Engineer\n\nSoftware engineering is an excellent career choice. Here is the typical learning path:\n1. **Learn a core language**: JavaScript/TypeScript or Python.\n2. **Understand databases**: Master relational databases (SQL) and NoSQL (MongoDB).\n3. **Learn Web Frameworks**: React for Frontend, Express/Node.js for Backend.\n4. **Work on Projects**: Build 2-3 functional web sites and host them on GitHub.\n\n*Would you like to build a personalized roadmap or analyze your current skills for this role?*`;
    }
    
    if (lower.includes('data scientist') || lower.includes('data science') || lower.includes('machine learning')) {
      return `### Transitioning to Data Science\n\nData Scientists analyze complex data structures. To get started:\n- **Python & SQL**: Essential for querying data.\n- **Math & Statistics**: Deep focus on probability distributions, regression, and matrix mathematics.\n- **Data Cleaning**: Pandas, NumPy libraries are your bread and butter.\n- **Machine Learning**: Scikit-Learn, models validation.\n\n*You can take our Career Assessment in the dashboard to see if your personality traits fit this field!*`;
    }

    if (lower.includes('resume') || lower.includes('ats')) {
      return `### Resume/ATS Guidelines\n\nTo pass Application Tracking Systems (ATS):\n- **Use a simple, clean layout**: Single column layouts parse best. Avoid complex side-by-side structures.\n- **Integrate keywords**: Look at job descriptions and naturally weave required skills into your text.\n- **Quantify details**: Write sentences like: *"Maintained React app, reducing query load by 20%"* rather than *"Worked on React"*.\n\n*Upload your current resume in our **Resume Analyzer** tab to receive a comprehensive ATS evaluation!*`;
    }

    if (lower.includes('interview') || lower.includes('practice')) {
      return `### Preparing for Interviews\n\nWe offer an interactive **AI Interview Coach** tailored for HR, Technical, and Behavioral sessions. Focus on:\n- **STAR framework** (Situation, Task, Action, Result) for behavioral prompts.\n- **Data structures and system patterns** for tech coding reviews.\n- **Clear articulation and confidence metrics**.\n\n*Go to the Interview Coach dashboard to start a mock session!*`;
    }

    return `Hello! I'm **Futuro AI**, your personal career mentor. I can help you:
- Explore trending professions (e.g. Data Scientist, UI/UX Designer)
- Map out personalized training roadmaps
- Analyze skills gaps to get hired
- Grade your resume against ATS tracking algorithms
- Simulate HR and Technical interviews

*What career queries can I assist you with today?*`;
  }

  /**
   * AI Personalized News Feed Generator
   */
  static async generateCareerFeed(targetCareer: string, currentSkills: string[], experienceLevel: string) {
    const careerName = targetCareer || 'Software Engineer';
    const skillsList = currentSkills.length > 0 ? currentSkills.join(', ') : 'General Programming';
    const exp = experienceLevel || 'Entry Level';

    const apiPrompt = `
      You are an elite Tech Journalist and AI Career Advisor. Generate a personalized career news feed for a user with the following profile:
      - Target Career: ${careerName}
      - Current Skills: ${skillsList}
      - Experience Level: ${exp}

      Generate exactly 6 highly relevant, engaging, and realistic tech career news items.
      The items should be categorized into:
      - "industry_update" (macro-economic shifts, major company updates, remote work policies)
      - "hiring_trend" (demand for certain roles, salary reports, growth indicators)
      - "new_tech" (release of new frameworks, AI models, languages, libraries)
      - "layoff_opportunity" (company restructuring updates OR open hiring sprees/funding rounds)

      Return a JSON array of objects. Each object must match this TypeScript interface exactly:
      {
        "id": string (unique slug like "ai-engineer-demand-surges-2026"),
        "category": "industry_update" | "hiring_trend" | "new_tech" | "layoff_opportunity",
        "title": string (engaging, click-worthy headline),
        "summary": string (1-2 sentence description),
        "content": string (detailed description, 3-4 sentences, containing realistic stats, quotes, or details),
        "source": string (e.g. TechCrunch, VentureBeat, Wired, Futuro Market Intelligence, Bloomberg),
        "date": string (relative date like "2 hours ago", "Yesterday", "3 days ago"),
        "impactScore": number (0-100 indicating how relevant/impactful it is to the user's target career),
        "relevanceExplanation": string (1 sentence explaining why this is shown based on their target career or skills),
        "tags": string[] (2-3 relevant tech tags like ["AI", "React", "Hiring"]),
        "actionUrl": string (suggested action link matching the feature: "/roadmap" to learn/up-skill, "/resume" to optimize resume, "/interview" to practice interviewing, "/explorer" to see salaries/growth, or "/chatbot" to ask AI mentor),
        "actionText": string (e.g. "Up-skill Now", "Optimize Resume", "Start Mock Interview", "Explore Career", "Ask AI Mentor"),
      }

      Return ONLY the raw JSON array. No markdown code blocks, no trailing whitespace, no additional text.
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt);
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('Gemini career feed generation failed, using fallback', e);
      }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt);
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('OpenAI career feed generation failed, using fallback', e);
      }
    }

    // --- Personalized Fallback Generator ---
    const lowerCareer = careerName.toLowerCase();
    
    if (lowerCareer.includes('ai') || lowerCareer.includes('machine') || lowerCareer.includes('learning')) {
      return [
        {
          id: 'openai-gpt5-release',
          category: 'industry_update',
          title: 'OpenAI Launches GPT-5 with Integrated Multi-Agent Frameworks',
          summary: 'The new model features native reasoning pipelines capable of running autonomous loops for days without human intervention.',
          content: 'OpenAI has officially unveiled GPT-5, bringing breakthrough upgrades in chain-of-thought processing and multi-agent coordination. According to developers, API costs have dropped by 30% while latency is slashed. Tech firms are already restructuring teams around agentic integrations, creating a huge premium for engineers who understand model fine-tuning.',
          source: 'Wired',
          date: '2 hours ago',
          impactScore: 95,
          relevanceExplanation: `Highly impactful because your goal is to be an AI Engineer and understanding model integrations is vital.`,
          tags: ['AI', 'GPT-5', 'LLMs'],
          actionUrl: '/roadmap',
          actionText: 'Update Roadmap',
        },
        {
          id: 'ai-salaries-climb-2026',
          category: 'hiring_trend',
          title: 'AI Engineering Compensation Surges by 35% in Tech Hubs',
          summary: 'New hiring data indicates specialized AI developers are earning significantly higher starting offers than general full-stack roles.',
          content: 'A comprehensive salary report from Hired indicates that salaries for AI and Deep Learning engineers have climbed to an average of ₹18-28 LPA for mid-level professionals. The demand is heavily driven by enterprises attempting to build custom Retrieval-Augmented Generation (RAG) databases and localized agent systems.',
          source: 'Bloomberg Tech',
          date: 'Yesterday',
          impactScore: 90,
          relevanceExplanation: `Validates that your target career of AI Engineer commands the highest market valuations.`,
          tags: ['AI', 'Salaries', 'Jobs'],
          actionUrl: '/explorer',
          actionText: 'Explore Career Specs',
        },
        {
          id: 'pytorch-edge-optimization',
          category: 'new_tech',
          title: 'PyTorch 2.6 Released with Optimized Edge Inference Architecture',
          summary: 'The new release focuses on mobile and web-based execution of quantized parameters, making locally run AI much faster.',
          content: 'The PyTorch development team has launched version 2.6, introducing advanced quantization kernels designed specifically for edge runtimes. This release addresses latency gaps on local GPUs and consumer devices. Engineers can now deploy lightweight transformers directly inside client apps with negligible memory footprints.',
          source: 'Futuro Intelligence',
          date: '3 days ago',
          impactScore: 82,
          relevanceExplanation: `Excellent for expanding your deep learning skills. Check your roadmap for PyTorch milestones.`,
          tags: ['PyTorch', 'Deep Learning', 'Edge AI'],
          actionUrl: '/roadmap',
          actionText: 'View PyTorch Path',
        },
        {
          id: 'anthropic-hiring-spree',
          category: 'layoff_opportunity',
          title: 'Anthropic Closes $4.5B Funding, Announces Huge Engineering Expansion',
          summary: 'The creators of Claude are rapidly scaling their research and developer relations teams globally.',
          content: 'Anthropic has closed a massive Series F funding round led by global tech syndicates. The company plans to hire over 250 engineers and researchers in the coming quarters. They are placing a special emphasis on developers with strong Python backgrounds and knowledge of system evaluations and neural safety mechanisms.',
          source: 'VentureBeat',
          date: '4 hours ago',
          impactScore: 88,
          relevanceExplanation: `Anthropic values skills you are learning like Python and APIs. Prepare a mock interview for them.`,
          tags: ['Anthropic', 'Hiring', 'Python'],
          actionUrl: '/interview',
          actionText: 'Practice Mock Interview',
        },
        {
          id: 'huggingface-dataset-hub',
          category: 'new_tech',
          title: 'Hugging Face Launches Web-Based Dataset Auto-Cleaners',
          summary: 'New tooling simplifies the tokenization and labeling processes for custom LLM pre-training.',
          content: 'Hugging Face has introduced an open-source visual suite aimed at cleaning, filtering, and structuring raw text corpora before training. This tool replaces custom python parsing scripts and integrates seamlessly with popular tokenizers, accelerating model training preparations by up to 40%.',
          source: 'TechCrunch',
          date: '2 days ago',
          impactScore: 78,
          relevanceExplanation: `Streamlines the pre-processing phase of your machine learning pipelines.`,
          tags: ['Hugging Face', 'Data Engineering', 'ML'],
          actionUrl: '/chatbot',
          actionText: 'Ask Mentor About HuggingFace',
        },
        {
          id: 'meta-llama-agent-sdk',
          category: 'industry_update',
          title: 'Meta Open-Sources Llama 4 Agent SDK for Local Implementations',
          summary: 'Developers can now deploy multi-agent communication networks locally using lightweight weights.',
          content: 'Following up on Llama 4 releases, Meta has open-sourced an SDK allowing multiple local model nodes to communicate, distribute tasks, and resolve queries. This represents a huge shift away from expensive centralized cloud APIs toward cost-effective edge hosting systems for enterprise databases.',
          source: 'HackerNews',
          date: '5 days ago',
          impactScore: 85,
          relevanceExplanation: `Adds another critical technology to your target path as an AI Engineer.`,
          tags: ['Llama 4', 'Open Source', 'Meta'],
          actionUrl: '/roadmap',
          actionText: 'Learn AI Agent Design',
        }
      ];
    }

    if (lowerCareer.includes('data') || lowerCareer.includes('science') || lowerCareer.includes('statistic')) {
      return [
        {
          id: 'sql-db-trends-2026',
          category: 'industry_update',
          title: 'Enterprises Turn Back to Relational Databases for Core ML Warehousing',
          summary: 'A new survey shows Vector and SQL databases are merging into unified high-performance data lakes.',
          content: 'A recent survey of 500 Chief Technology Officers indicates a massive trend towards consolidating data stacks. Rather than maintaining disparate vector search engines and relational databases, enterprises are heavily adopting PostgreSQL extensions (like pgvector) to manage their datasets in one secure repository.',
          source: 'TechCrunch',
          date: 'Yesterday',
          impactScore: 92,
          relevanceExplanation: `Directly aligns with your current SQL and database management modules.`,
          tags: ['SQL', 'Databases', 'Vector Search'],
          actionUrl: '/roadmap',
          actionText: 'Improve SQL Skills',
        },
        {
          id: 'data-scientist-hiring-shift',
          category: 'hiring_trend',
          title: 'Data Science Roles Shift Focus From Research to MLOps Execution',
          summary: 'Job listings show a 60% increase in requirements for deploying models rather than just training them.',
          content: ' recruiters report that the hiring criteria for Data Scientists has shifted. Companies are prioritizing candidates who can write production-ready code and manage CI/CD pipelines for models. Knowing how to write a script in a notebook is no longer sufficient; cloud deployment skills are now mandatory.',
          source: 'Bloomberg',
          date: '2 days ago',
          impactScore: 88,
          relevanceExplanation: `Suggests prioritizing deployment tools like Docker and APIs in your current skills.`,
          tags: ['MLOps', 'Deployment', 'Careers'],
          actionUrl: '/explorer',
          actionText: 'Check Salary Scales',
        },
        {
          id: 'pandas-3-speedups',
          category: 'new_tech',
          title: 'Pandas 3.0 Released with Rust-Powered Backend Integration',
          summary: 'Dataframes can now process millions of rows up to 10 times faster utilizing the new arrow engine.',
          content: 'Pandas 3.0 has officially launched, integrating Apache Arrow and PyArrow as default backends. The change allows seamless out-of-memory operations and heavy data cleaning scripts to execute with Rust-level efficiency while preserving the standard python syntax. Memory consumption is also reduced by 50%.',
          source: 'Wired',
          date: '3 days ago',
          impactScore: 85,
          relevanceExplanation: `Updates your core data analysis library (Pandas). Highly relevant for your Python skills.`,
          tags: ['Pandas', 'Python', 'Rust'],
          actionUrl: '/roadmap',
          actionText: 'Review Month 2 roadmap',
        },
        {
          id: 'snowflake-databricks-war',
          category: 'industry_update',
          title: 'Snowflake and Databricks Announce Native Real-Time Streaming Integrations',
          summary: 'Both platforms make it trivial to feed streaming data directly into predictive ML models.',
          content: 'In a joint race, both Snowflake and Databricks have released native connectors that capture real-time application logs and feed them straight into active inference models. This eliminates traditional overnight batch-processing lags, allowing companies to calculate user recommendations in sub-seconds.',
          source: 'VentureBeat',
          date: '4 days ago',
          impactScore: 78,
          relevanceExplanation: `Exposes you to enterprise-level data lake tooling, an excellent resume talking point.`,
          tags: ['Snowflake', 'Databricks', 'Big Data'],
          actionUrl: '/resume',
          actionText: 'Optimize Resume Details',
        },
        {
          id: 'hiring-spree-fintech-data',
          category: 'layoff_opportunity',
          title: 'Fintech Consolidations Spark Hiring Surge for Risk Data Analysts',
          summary: 'Three major banking apps announce massive compliance expansions, seeking statistical modeling engineers.',
          content: 'Fintech startups are increasing their compliance and risk management budgets by 40% this year. Recruiters are actively searching for data scientists with experience in predictive modeling, fraud detection, and statistical hypothesis testing to mitigate transaction risks across digital wallets.',
          source: 'Reuters',
          date: '5 hours ago',
          impactScore: 83,
          relevanceExplanation: `Great opportunity to apply for data roles in finance. Tailor your resume now.`,
          tags: ['Fintech', 'Hiring', 'Data Analyst'],
          actionUrl: '/resume',
          actionText: 'Optimize Resume ATS',
        },
        {
          id: 'scikit-learn-interactive-viz',
          category: 'new_tech',
          title: 'Scikit-Learn Launches Web-Based Model Evaluation Dashboard',
          summary: 'A new open-source library allows developers to visualize model performance metrics instantly in a browser.',
          content: 'The Scikit-Learn group has introduced an auxiliary package that spawns local dashboards summarizing ROC curves, confusion matrices, and feature importances with zero setup. This drastically simplifies the pipeline verification phase for statistical developers, saving hours of plotting code.',
          source: 'Dev.to',
          date: 'Yesterday',
          impactScore: 80,
          relevanceExplanation: `Speeds up your machine learning modeling assignments.`,
          tags: ['Scikit-Learn', 'Machine Learning', 'Visualization'],
          actionUrl: '/chatbot',
          actionText: 'Ask About Viz Tooling',
        }
      ];
    }

    if (lowerCareer.includes('design') || lowerCareer.includes('ux') || lowerCareer.includes('ui')) {
      return [
        {
          id: 'figma-ai-design-assistant',
          category: 'new_tech',
          title: 'Figma Unveils Autopilot AI: Generating High-Fidelity UI from Prompts',
          summary: 'The tool constructs complete Auto-Layout screens, but designer curation remains essential.',
          content: 'Figma has integrated "Autopilot AI" directly into its core editor. Designers can describe a user flow in plain text, and the AI generates organized frames complete with components, variables, and auto-layout spacing. While it speeds up wireframing, product leads note that custom styling and research curation are still highly required.',
          source: 'TechCrunch',
          date: '3 hours ago',
          impactScore: 95,
          relevanceExplanation: `Directly impacts Figma workflows. Understanding AI-augmented design is a must-have skill.`,
          tags: ['Figma', 'UI Design', 'AI Tools'],
          actionUrl: '/roadmap',
          actionText: 'Figma Milestones',
        },
        {
          id: 'accessibility-laws-hiring',
          category: 'hiring_trend',
          title: 'New Accessibility Regulations Drive Hiring Spree for UX Researchers',
          summary: 'Enforcement of stricter digital accessibility policies forces companies to audit interface usability.',
          content: 'With new regulatory compliance guidelines rolling out next quarter, enterprises are scrambling to hire designers proficient in Web Content Accessibility Guidelines (WCAG). Job openings for UX Researchers and Accessibility Specialists have spiked by 50%, with remote contracts paying premium rates.',
          source: 'Wired',
          date: 'Yesterday',
          impactScore: 89,
          relevanceExplanation: `Aligns with your user research focus. Highlight WCAG knowledge on your resume.`,
          tags: ['UX Research', 'WCAG', 'Compliance'],
          actionUrl: '/resume',
          actionText: 'Check Resume keywords',
        },
        {
          id: 'figma-variables-upgrade',
          category: 'new_tech',
          title: 'Figma Variable Modes Get Dynamic Code Export Integrations',
          summary: 'Designers can now sync color and spacing variables straight into Tailwind config files.',
          content: 'Figma has rolled out a major update allowing design system variables (colors, typography, spacing tokens) to export directly into frontend frameworks like Tailwind CSS, React, and CSS variables. This narrows the handoff gap between product designers and engineering teams, saving development cycles.',
          source: 'Futuro Intelligence',
          date: '2 days ago',
          impactScore: 84,
          relevanceExplanation: `A great skill to add to your list. Understanding developer handoffs increases your marketability.`,
          tags: ['Figma', 'Design Systems', 'Tailwind'],
          actionUrl: '/roadmap',
          actionText: 'Design Systems Path',
        },
        {
          id: 'ux-case-studies-change',
          category: 'hiring_trend',
          title: 'Tech Hiring Managers Reject Generic Bootcamp Portfolios',
          summary: 'Recruiters are demanding real-world product interactions and evidence of metrics-driven UI iterations.',
          content: 'A survey of 200 tech hiring managers reveals a heavy fatigue with generic, mock case-studies. Managers are looking for real-world collaborations or portfolios that detail how a design improved specific business metrics, such as user drop-off rates, checkout speeds, or click-through rates.',
          source: 'Bloomberg',
          date: '3 days ago',
          impactScore: 91,
          relevanceExplanation: `Highlights the importance of building measurable projects. Work on custom case-studies.`,
          tags: ['Portfolio', 'UX Case Study', 'Careers'],
          actionUrl: '/explorer',
          actionText: 'Explore Designer Rates',
        },
        {
          id: 'design-agency-mergers',
          category: 'layoff_opportunity',
          title: 'Top Tier Creative Agencies Merge, Expanding Digital Product Teams',
          summary: 'Three leading agencies unify under Aura Design Group, hiring junior to mid-level designers.',
          content: 'A major consolidation in the design agency market has formed Aura Design Group, a giant creative powerhouse. The company has announced an immediate hiring push to support newly won enterprise software contracts. They are actively seeking designers who can collaborate with engineering teams.',
          source: 'VentureBeat',
          date: 'Yesterday',
          impactScore: 82,
          relevanceExplanation: `A great potential opportunity. Let's practice a design portfolio interview.`,
          tags: ['Hiring', 'Aura Design', 'Opportunities'],
          actionUrl: '/interview',
          actionText: 'Practice Design Interview',
        },
        {
          id: 'apple-vision-os-design-guide',
          category: 'industry_update',
          title: 'Apple Publishes Spatial Design Guidelines for visionOS 3',
          summary: 'Designers are introduced to spatial depth, eye-tracking triggers, and canvas configurations.',
          content: 'Apple has released an extensive documentation update outlining spatial UI standards for the visionOS ecosystem. The manual focuses on dynamic shadow rendering, hover focus animations, and canvas-less UI layouts. Designing for augmented reality interfaces is becoming a highly valued niche skill.',
          source: 'Wired',
          date: '4 days ago',
          impactScore: 75,
          relevanceExplanation: `Exposes you to cutting-edge AR/VR interface principles, excellent for long-term growth.`,
          tags: ['visionOS', 'Spatial UI', 'AR/VR'],
          actionUrl: '/chatbot',
          actionText: 'Ask AI About Spatial UI',
        }
      ];
    }

    if (lowerCareer.includes('security') || lowerCareer.includes('cyber') || lowerCareer.includes('network')) {
      return [
        {
          id: 'ransomware-incident-cloud',
          category: 'industry_update',
          title: 'Major Cloud Provider Suffers Severe Ransomware Attack',
          summary: 'The breach highlights vulnerabilities in edge API endpoints, triggering emergency patch audits.',
          content: 'A global cloud hosting service has reported a sophisticated intrusion targeting outdated container configurations. The attackers successfully encrypted several client databases before security teams isolated the endpoints. This incident has triggered widespread corporate audits of API gateways and access tokens.',
          source: 'Wired',
          date: '3 hours ago',
          impactScore: 94,
          relevanceExplanation: `Directly impacts networking and firewall operations, demonstrating the critical need for security analysts.`,
          tags: ['Cloud Security', 'Ransomware', 'API Hacking'],
          actionUrl: '/roadmap',
          actionText: 'Review Security Path',
        },
        {
          id: 'cybersecurity-skills-shortage',
          category: 'hiring_trend',
          title: 'Cybersecurity Talent Shortage Reaches Record Levels in 2026',
          summary: 'Over 600,000 security roles remain unfilled, driving up salary compensation for entry-level candidates.',
          content: 'According to a report from ISC2, the global cybersecurity workforce gap has widened. Businesses are struggling to secure qualified specialists in SecOps, network auditing, and penetration testing. To fill roles, companies are accepting candidates with certification backgrounds (Security+, CEH) and hands-on lab experience.',
          source: 'Bloomberg Tech',
          date: 'Yesterday',
          impactScore: 92,
          relevanceExplanation: `Supports your decision to target Cybersecurity Analyst, showing strong job security.`,
          tags: ['Jobs', 'Salaries', 'Certifications'],
          actionUrl: '/explorer',
          actionText: 'Compare Security Salaries',
        },
        {
          id: 'wireshark-ai-log-parser',
          category: 'new_tech',
          title: 'Wireshark Introduces Automated AI Threat Detection Assistant',
          summary: 'The tool uses ML models to highlight malicious payloads inside network packet captures.',
          content: 'Wireshark has integrated a local helper tool that parses through large PCAP logs and automatically flags suspicious TCP handshakes and unusual data exfiltrations. This helps analysts quickly isolate attacks without manually writing complex filters, boosting threat hunting speeds by 70%.',
          source: 'Futuro Intelligence',
          date: '3 days ago',
          impactScore: 85,
          relevanceExplanation: `Updates your Wireshark capabilities. Learn to integrate AI workflows into SecOps.`,
          tags: ['Wireshark', 'AI Tools', 'Networking'],
          actionUrl: '/roadmap',
          actionText: 'Learn Network Security',
        },
        {
          id: 'defense-contractor-sec-hiring',
          category: 'layoff_opportunity',
          title: 'Federal Defense Contractor Secures $3B System Modernization Deal',
          summary: 'The enterprise is hiring a large volume of junior security analysts for remote monitoring contracts.',
          content: 'Apex Systems, a major government contractor, has won a massive digital modernization bid. They are initiating a hiring wave for remote Security Operations Center (SOC) analysts. Candidates must have solid knowledge of Linux terminals, basic networking protocols, and log auditing using SIEM tools.',
          source: 'VentureBeat',
          date: 'Yesterday',
          impactScore: 88,
          relevanceExplanation: `Excellent matching opportunity. Let's practice a technical SecOps interview.`,
          tags: ['SOC Analyst', 'Hiring', 'Linux'],
          actionUrl: '/interview',
          actionText: 'Practice SOC Interview',
        },
        {
          id: 'owasp-top-10-api-release',
          category: 'new_tech',
          title: 'OWASP Releases Updated Top 10 API Security Risks Report',
          summary: 'Broken Object Level Authorization (BOLA) remains the leading vulnerability in enterprise web services.',
          content: 'The OWASP foundation has published its updated API Security guide, emphasizing risks associated with server-side request forgery (SSRF) and broken authentication structures. Security teams are encouraged to implement strict validation boundaries and access controls around all backend endpoints.',
          source: 'HackerNews',
          date: '5 days ago',
          impactScore: 82,
          relevanceExplanation: `Aligns with your web vulnerabilities study. Make sure you understand SSRF and BOLA.`,
          tags: ['OWASP', 'API Security', 'Vulnerabilities'],
          actionUrl: '/chatbot',
          actionText: 'Ask About OWASP top 10',
        },
        {
          id: 'layoffs-legacy-it-security-spurs',
          category: 'layoff_opportunity',
          title: 'Tech Layoffs in Legacy IT Infrastructure Free Up Cybersecurity Budgets',
          summary: 'Firms downsize generic administration roles, shifting capital to proactive penetration testing.',
          content: 'While legacy administration teams face downsizings due to automated cloud hosting, companies are doubling their investments in threat emulation. Proactive ethical hackers and penetration testers are seeing a surge in contract opportunities as companies attempt to audit their remote workspaces.',
          source: 'Reuters',
          date: '2 days ago',
          impactScore: 80,
          relevanceExplanation: `Points to the growth of penetration testing vs traditional system administration.`,
          tags: ['Layoffs', 'Pentesting', 'SecOps'],
          actionUrl: '/resume',
          actionText: 'Optimize Security Resume',
        }
      ];
    }

    // Default Fallback (Software Engineer / General)
    return [
      {
        id: 'react-19-production-adoption',
        category: 'new_tech',
        title: 'React 19 Achieves Wide Enterprise Adoption, Deprecating Legacy Hooks',
        summary: 'Development teams are shifting to compiler-based memoization, reducing client bundle sizes.',
        content: 'Following months of beta tests, React 19 has achieved main-branch stability across major platforms. The integration of React Compiler automatically optimizes rendering cycles, making manual hooks like useMemo and useCallback mostly redundant. Teams are actively rewriting components to leverage Server Actions.',
        source: 'TechCrunch',
        date: '3 hours ago',
        impactScore: 95,
        relevanceExplanation: `Highly relevant for your React and JavaScript skills path. Check your roadmap.`,
        tags: ['React 19', 'JavaScript', 'Frontend'],
        actionUrl: '/roadmap',
        actionText: 'Update React Skills',
      },
      {
        id: 'tech-hiring-market-recovery',
        category: 'hiring_trend',
        title: 'Mid-Market Tech Companies Re-ignite Hiring for Full-Stack Developers',
        summary: 'Hiring reports indicate a 20% increase in job postings for junior and mid-level web developers.',
        content: 'A quarterly review of active job platforms shows a distinct rise in mid-market hiring activities. Rather than bidding for highly research-oriented roles, companies are looking for full-stack developers who can build interfaces, connect databases, and manage basic CI/CD integrations on AWS or Vercel.',
        source: 'Bloomberg Tech',
        date: 'Yesterday',
        impactScore: 90,
        relevanceExplanation: `Validates your career path as a Developer, showing an improving hiring market.`,
        tags: ['Hiring', 'Full Stack', 'Jobs'],
        actionUrl: '/explorer',
        actionText: 'Check Career Trends',
      },
      {
        id: 'typescript-5-release',
        category: 'new_tech',
        title: 'TypeScript 5.8 Released with Major Type-Checking Optimizations',
        summary: 'Compilation times are reduced by 25% with new strict parameter controls.',
        content: 'Microsoft has launched TypeScript 5.8, focusing heavily on build-time speedups and stricter control checks for asynchronous function callbacks. The update ensures developers receive instantaneous feedback inside IDEs, dramatically reducing syntax slip-ups before code review commits.',
        source: 'Dev.to',
        date: '2 days ago',
        impactScore: 85,
        relevanceExplanation: `TypeScript boundaries are key to your engineering track. Optimize your skills.`,
        tags: ['TypeScript', 'JavaScript', 'IDE Tools'],
        actionUrl: '/roadmap',
        actionText: 'Learn TypeScript',
      },
      {
        id: 'stripe-engineering-expansion',
        category: 'layoff_opportunity',
        title: 'Stripe Raises Massive Series I Funding, Pledges to Double Engineering Team',
        summary: 'The payment processor is launching global remote hiring sprints for api development.',
        content: 'Stripe has completed a huge financing round to support its expanding billing infrastructures. The leadership has announced plans to double its engineering headcount, looking for developers experienced in APIs, backend security, and microservices.',
        source: 'VentureBeat',
        date: 'Yesterday',
        impactScore: 87,
        relevanceExplanation: `A major hiring window. Tailor your resume to fit Stripe's API and backend criteria.`,
        tags: ['Stripe', 'Hiring', 'APIs'],
        actionUrl: '/resume',
        actionText: 'Optimize Resume for Stripe',
      },
      {
        id: 'sqlite-server-side-adoption',
        category: 'industry_update',
        title: 'SQLite Sees Huge Surge in Production Server-Side Web Applications',
        summary: 'Frameworks like Remix and NextJS drive adoption of local embedded databases for edge nodes.',
        content: 'While Postgres has been the default choice, developers are increasingly adopting SQLite for edge deployments. Improved replication utilities (like Litestream) allow SQLite databases to sync transparently, giving edge microservices rapid read speeds with zero network overhead.',
        source: 'HackerNews',
        date: '4 days ago',
        impactScore: 78,
        relevanceExplanation: `Broadens your backend architecture database knowledge.`,
        tags: ['SQLite', 'Databases', 'Edge Compute'],
        actionUrl: '/chatbot',
        actionText: 'Ask About SQLite at Edge',
      },
      {
        id: 'github-copilot-workspace-launch',
        category: 'industry_update',
        title: 'GitHub Copilot Workspace Enters General Availability',
        summary: 'The agentic coding workspace helps developers construct feature plans directly from issues.',
        content: 'GitHub has launched Copilot Workspace to the public, introducing agentic workflows inside repository spaces. Developers can initiate tasks, plan edits across multiple files, and run tests in isolated containers. Team leads claim this tool accelerates boilerplate setups, shifting focus to high-level architecture.',
        source: 'Wired',
        date: '5 days ago',
        impactScore: 82,
        relevanceExplanation: `Highlights the importance of developer tooling. Practice interview coding style.`,
        tags: ['AI Coding', 'GitHub', 'DevOps'],
        actionUrl: '/interview',
        actionText: 'Practice Technical Coach',
      }
    ];
  }

  /**
   * AI Marksheet parser & career suggestion advisor
   */
  static async analyzeMarksheet(text: string) {
    const apiPrompt = `
      You are an expert academic advisor and career strategist. Parse the following marksheet text and extract:
      - Subject names and grades/scores.
      - Identify the strong subjects (high marks/grades, e.g., Math, physics, art, etc.) and explain what career qualities they represent.
      - Identify the weak subjects (lower marks/grades, e.g., chemistry, history, etc.) and explain what warning or challenge they present.
      - Identify general academic trends (e.g. "strong quantitative aptitude", "excellent creative output", "rising grades over semesters", "practical focus").
      - Recommend 3-4 specific careers from these fields (e.g. Software Engineer, AI Engineer, Data Scientist, UI/UX Designer, Cyber Security Analyst, Product Manager, Digital Marketer) that align with their strengths, providing a match score (0-100) and rationale.

      Parsed Marksheet Text:
      "${text}"

      Return a JSON object matching this structure EXACTLY:
      {
        "strongSubjects": [
          { "subject": "Mathematics", "grade": "A+", "score": 95, "explanation": "Demonstrates excellent logical reasoning and analytical problem solving." }
        ],
        "weakSubjects": [
          { "subject": "Chemistry", "grade": "C", "score": 60, "explanation": "Indicates challenges with complex memorization of formulas under constraint." }
        ],
        "academicTrends": [
          "Pronounced quantitative aptitude with high scoring in mathematics and physics.",
          "Strong theoretical understanding, but slightly lower grades in lab-based assessments."
        ],
        "suggestedCareers": [
          {
            "careerTitle": "AI Engineer",
            "score": 92,
            "reason": "Your top performance in mathematics and computer fundamentals matches the theoretical foundations of neural networks perfectly.",
            "matchingSkills": ["Mathematics", "Logical Reasoning", "Algorithms"]
          }
        ]
      }

      Return ONLY the raw JSON object. No markdown code blocks, no trailing whitespace, no additional text.
    `;

    if (this.getGeminiKey()) {
      try {
        const response = await this.queryGemini(apiPrompt);
        let cleanedText = response.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('Gemini marksheet analysis failed, falling back', e);
      }
    } else if (this.getOpenAIKey()) {
      try {
        const response = await this.queryOpenAI(apiPrompt);
        let cleanedText = response.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('OpenAI marksheet analysis failed, falling back', e);
      }
    }

    // --- Mock Fallback Generator ---
    const lowerText = text.toLowerCase();
    
    // Default mock lists
    let strongSubjects = [
      { subject: 'Computer Programming', grade: 'A', score: 90, explanation: 'Shows outstanding capability in understanding structural frameworks and software abstractions.' },
      { subject: 'Mathematics & Analysis', grade: 'A-', score: 88, explanation: 'Demonstrates deep quantitative analysis, statistics proficiency, and computational thinking.' }
    ];
    let weakSubjects = [
      { subject: 'Chemistry', grade: 'C+', score: 68, explanation: 'Indicates minor difficulty with heavy content memorization of chemical reactions.' }
    ];
    let academicTrends = [
      'Strong quantitative and logic-driven foundation.',
      'Slightly lower aptitude in chemistry and life sciences, favoring applied mathematics.'
    ];
    let suggestedCareers = [
      {
        careerTitle: 'Software Engineer',
        score: 95,
        reason: 'Excellent performance in Computer Programming and Mathematics makes software design and algorithmic optimization a natural fit.',
        matchingSkills: ['Algorithms', 'Logical Reasoning', 'Software Architecture']
      },
      {
        careerTitle: 'AI Engineer',
        score: 90,
        reason: 'Solid mathematical core and coding credentials provide a strong baseline for neural network deployment and LLM orchestration.',
        matchingSkills: ['Mathematics', 'Machine Learning', 'Python']
      },
      {
        careerTitle: 'Data Scientist',
        score: 85,
        reason: 'Advanced mathematical competencies support database management, data mining, and statistical regression modeling.',
        matchingSkills: ['SQL', 'Statistics', 'Analytical Modeling']
      }
    ];

    // Check keywords for custom mappings
    if (lowerText.includes('design') || lowerText.includes('art') || lowerText.includes('drawing') || lowerText.includes('creative')) {
      strongSubjects = [
        { subject: 'Graphic Art & Composition', grade: 'A+', score: 96, explanation: 'Exemplifies highly developed spatial organization, layout compositions, and color theory.' },
        { subject: 'User Experience Design', grade: 'A', score: 92, explanation: 'Demonstrates deep empathy for interactive layouts and human-computer usability patterns.' }
      ];
      weakSubjects = [
        { subject: 'Algebra & Physics', grade: 'C-', score: 58, explanation: 'Shows general disconnect from highly abstract formulaic calculations.' }
      ];
      academicTrends = [
        'Outstanding visual and creative aptitude.',
        'Clear preference for practical visual media layouts over purely mathematical formulas.'
      ];
      suggestedCareers = [
        {
          careerTitle: 'UI/UX Designer',
          score: 98,
          reason: 'Your superior scores in Graphic Art and User Experience Design align perfectly with interactive UI prototyping, wireframing, and Figma components design.',
          matchingSkills: ['Figma', 'Visual Spacing', 'User Research']
        },
        {
          careerTitle: 'Digital Marketer',
          score: 80,
          reason: 'Strong communication and composition capabilities provide a solid baseline for copywriting and email layout setups.',
          matchingSkills: ['Content Composition', 'Branding Layouts', 'A/B Testing']
        }
      ];
    } else if (lowerText.includes('security') || lowerText.includes('network') || lowerText.includes('hardware') || lowerText.includes('linux')) {
      strongSubjects = [
        { subject: 'Operating Systems & Linux', grade: 'A', score: 94, explanation: 'Exhibits complete comfort in command-line scripting, system processes, and hardware registries.' },
        { subject: 'Network Protocols & OSI', grade: 'A-', score: 89, explanation: 'Demonstrates solid understanding of TCP/UDP channels, packets routing, and client-server handshakes.' }
      ];
      weakSubjects = [
        { subject: 'Financial Accounting', grade: 'D', score: 50, explanation: 'Difficulty mapping double-entry ledgers and ledger balance sheets.' }
      ];
      academicTrends = [
        'Excellent aptitude for systems execution and security auditing.',
        'High performance in network infrastructures, with low interest in financial/administrative courses.'
      ];
      suggestedCareers = [
        {
          careerTitle: 'Cyber Security Analyst',
          score: 96,
          reason: 'Exceptional capabilities in Operating Systems and Network Protocols supply all the essential foundational knowledge required for SOC log audits and ethical hacking.',
          matchingSkills: ['Linux', 'Networking Protocols', 'Firewalls Audit']
        },
        {
          careerTitle: 'Software Engineer',
          score: 85,
          reason: 'OS and systems level experience supports low-level backend compiler development and scalable database pipelines.',
          matchingSkills: ['System Design', 'Server Architecture', 'Git Workflows']
        }
      ];
    }

    return {
      strongSubjects,
      weakSubjects,
      academicTrends,
      suggestedCareers
    };
  }

  /**
   * AI Career Simulator: Generate Daily Challenge/Event
   */
  static async generateSimulatorEvent(career: string, level: number, stats: { technical: number; leadership: number; stress: number; network: number }) {
    const apiPrompt = `
      You are the Game Master for the Career Simulator (a life-sim game).
      Generate a realistic, immersive career challenge for a player in this current state:
      - Career: ${career}
      - Level: ${level} (1-10 scale)
      - Stats: Technical: ${stats.technical}%, Leadership: ${stats.leadership}%, Stress: ${stats.stress}%, Network: ${stats.network}%

      Is this a promotion interview? (Generate an interview if level is about to change or randomly 20% of the time, flag it as isInterview: true).
      
      If generating a daily challenge (isInterview: false), return a JSON object EXACTLY like this:
      {
        "isInterview": false,
        "scenario": "A brief 1-2 sentence description of a professional challenge or workplace dilemma.",
        "choices": [
          {
            "id": "A",
            "text": "First choice description",
            "consequence": "Description of the direct outcome.",
            "statsImpact": { "technical": 10, "leadership": 0, "stress": 15, "network": 0, "xp": 20, "salary": 2000 }
          },
          {
            "id": "B",
            "text": "Second choice description",
            "consequence": "Description of the direct outcome.",
            "statsImpact": { "technical": -5, "leadership": 10, "stress": 5, "network": 10, "xp": 15, "salary": 1000 }
          },
          {
            "id": "C",
            "text": "Third choice description",
            "consequence": "Description of the direct outcome.",
            "statsImpact": { "technical": 0, "leadership": 0, "stress": -10, "network": 5, "xp": 5, "salary": 0 }
          }
        ]
      }

      If generating a promotion interview review question (isInterview: true), return a JSON object EXACTLY like this:
      {
        "isInterview": true,
        "question": "A tough technical or leadership question the player must answer to prove they are ready for level up."
      }

      Return ONLY raw JSON. Do not wrap in markdown or extra text.
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt);
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('Gemini simulator event generation failed, falling back', e);
      }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt);
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('OpenAI simulator event generation failed, falling back', e);
      }
    }

    // --- Fallback Offline Simulator Event Generator ---
    const isInterview = Math.random() < 0.25;
    if (isInterview) {
      const interviewQuestions: Record<string, string[]> = {
        'Software Engineer': [
          'How do you design a highly scalable caching layer for a database experiencing heavy read queries?',
          'What is the difference between SQL and NoSQL databases, and when would you choose one over the other?',
          'Explain what memory leaks are in Node.js, and how you would go about profiling and debug them.'
        ],
        'Doctor': [
          'A patient presents with sudden severe chest pain radiating to the left arm. What is your diagnostic flowchart?',
          'How do you handle a medical emergency where a patient is experiencing anaphylaxis but you do not have their medical history?',
          'Describe the steps you take to communicate a difficult diagnosis to a family in an empathetic yet professional manner.'
        ],
        'Entrepreneur': [
          'Your primary competitor has just raised a massive round of funding and is undercutting your prices. How do you respond?',
          'How do you determine the unit economics and Customer Acquisition Cost (CAC) vs Lifetime Value (LTV) for your SaaS startup?',
          'Your lead developers have threatened to walk out due to equity disagreements. How do you resolve the situation?'
        ],
        'Designer': [
          'How do you balance creative expression with strict brand guidelines and structural accessibility frameworks?',
          'A client insists on a UI pattern that you know is bad for usability. Walk us through how you resolve this conflict.',
          'What is your step-by-step process for conducting user testing on a new mobile checkout experience?'
        ]
      };
      const list = interviewQuestions[career] || interviewQuestions['Software Engineer'];
      const question = list[Math.floor(Math.random() * list.length)];
      return { isInterview: true, question };
    }

    // Standard Daily Challenge Fallbacks
    const softwareChallenges = [
      {
        scenario: 'A major production bug crashes the payment gateway. Customers are complaining on social media.',
        choices: [
          {
            id: 'A',
            text: 'Skip sleep and debug all night to write an emergency hotfix.',
            consequence: 'The bug is fixed before morning! Management is thrilled, but you are exhausted.',
            statsImpact: { technical: 15, leadership: 5, stress: 25, network: 0, xp: 25, salary: 500 }
          },
          {
            id: 'B',
            text: 'Coordinate a team task force to split the debug load and communicate with marketing.',
            consequence: 'The bug takes a bit longer to fix, but team collaboration is highly praised.',
            statsImpact: { technical: 5, leadership: 15, stress: 10, network: 10, xp: 20, salary: 300 }
          },
          {
            id: 'C',
            text: 'Rollback to the previous stable release version and investigate in the morning.',
            consequence: 'Immediate relief for clients, though the root cause remains unresolved.',
            statsImpact: { technical: 5, leadership: 5, stress: -10, network: 0, xp: 10, salary: 0 }
          }
        ]
      },
      {
        scenario: 'The tech lead proposes migrating the core system database to a new, unproven vector database structure.',
        choices: [
          {
            id: 'A',
            text: 'Deep dive into technical docs and build a quick prototype to test the performance.',
            consequence: 'You gain outstanding technical insight and point out major performance bottlenecks.',
            statsImpact: { technical: 20, leadership: 0, stress: 15, network: 0, xp: 20, salary: 200 }
          },
          {
            id: 'B',
            text: 'Support the idea in meeting rooms to gain favor with the tech lead.',
            consequence: 'You make a strong ally, though the team faces complex integration issues later.',
            statsImpact: { technical: -5, leadership: 5, stress: 5, network: 15, xp: 10, salary: 100 }
          },
          {
            id: 'C',
            text: 'Push back and recommend sticking to standard Postgres setups.',
            consequence: 'The project is kept simple, saving stress, though some innovation is lost.',
            statsImpact: { technical: 5, leadership: 5, stress: -5, network: -5, xp: 10, salary: 0 }
          }
        ]
      }
    ];

    const doctorChallenges = [
      {
        scenario: 'The hospital emergency room is overcrowded. A junior doctor asks for help managing a complex patient triage.',
        choices: [
          {
            id: 'A',
            text: 'Handle the most critical patient yourself, teaching the junior doctor alongside.',
            consequence: 'The patient stabilizes. The junior doctor learns a lot and respects you.',
            statsImpact: { technical: 15, leadership: 15, stress: 20, network: 5, xp: 25, salary: 400 }
          },
          {
            id: 'B',
            text: 'Order the junior doctor to follow standard protocols while you focus on research paper deadlines.',
            consequence: 'You secure academic progress, though the ER team feels a bit unsupported.',
            statsImpact: { technical: 10, leadership: -5, stress: 5, network: -5, xp: 15, salary: 200 }
          },
          {
            id: 'C',
            text: 'Call the chief administrator to request emergency reinforcements.',
            consequence: 'Overload is relieved systemically, though you bypass local team coordination.',
            statsImpact: { technical: 0, leadership: 10, stress: -10, network: 10, xp: 10, salary: 0 }
          }
        ]
      }
    ];

    const entrepreneurChallenges = [
      {
        scenario: 'Your startup is running out of runway. A venture capitalist offers funding, but demands 45% equity and control.',
        choices: [
          {
            id: 'A',
            text: 'Accept the offer immediately to secure the payroll and cash reserves.',
            consequence: 'Company survives, but you lose primary voting power and some future upside.',
            statsImpact: { technical: 0, leadership: -10, stress: 5, network: 15, xp: 15, salary: 2000 }
          },
          {
            id: 'B',
            text: 'Reject the offer, pivot your product to a paid model, and start bootstrapping.',
            consequence: 'Massive pressure to get sales, but you retain 100% of your founder equity.',
            statsImpact: { technical: 10, leadership: 20, stress: 25, network: -5, xp: 30, salary: -500 }
          },
          {
            id: 'C',
            text: 'Counter-offer for 20% equity and negotiate a smaller seed round.',
            consequence: 'Negotiations drag on, raising stress, but it leads to a balanced compromise.',
            statsImpact: { technical: 5, leadership: 10, stress: 15, network: 10, xp: 20, salary: 1000 }
          }
        ]
      }
    ];

    const designerChallenges = [
      {
        scenario: 'The client demands a complete redesign of the web app logo and color system just 3 days before launching.',
        choices: [
          {
            id: 'A',
            text: 'Work through the weekend to deliver a fresh modern branding layout.',
            consequence: 'Client is incredibly wowed and promises referral contracts, though you are burned out.',
            statsImpact: { technical: 15, leadership: 5, stress: 25, network: 10, xp: 25, salary: 600 }
          },
          {
            id: 'B',
            text: 'Present user testing metrics showing why the current design converts much better.',
            consequence: 'Client is persuaded by data and drops the request. Your professional authority rises.',
            statsImpact: { technical: 10, leadership: 15, stress: 5, network: 5, xp: 20, salary: 400 }
          },
          {
            id: 'C',
            text: 'Decline the change and launch the current layout, offering to iterate in phase 2.',
            consequence: 'Launch happens on time, keeping things calm, though the client is slightly disappointed.',
            statsImpact: { technical: 5, leadership: 10, stress: -10, network: -5, xp: 10, salary: 0 }
          }
        ]
      }
    ];

    let source = softwareChallenges;
    if (career === 'Doctor') source = doctorChallenges;
    else if (career === 'Entrepreneur') source = entrepreneurChallenges;
    else if (career === 'Designer') source = designerChallenges;

    const chosen = source[Math.floor(Math.random() * source.length)];
    return { isInterview: false, ...chosen };
  }

  /**
   * AI Career Simulator: Grade Promotion Interview Answer
   */
  static async gradeSimulatorInterview(question: string, answer: string, career: string) {
    const apiPrompt = `
      You are the Interview Panel/Promotions Board reviewing a candidate's answer to the level up milestone:
      Question: "${question}"
      Candidate Answer: "${answer}"
      Career Field: "${career}"

      Assess the quality, depth, and relevance of their answer. Grade it out of 10.
      If the score is 6 or higher, set passed: true.
      
      Return a JSON response matching this structure EXACTLY:
      {
        "passed": boolean,
        "score": number,
        "feedback": "Paragraph of coaching advice highlighting strong points and recommending areas to improve."
      }
      Do not output extra tags or text.
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt);
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('Gemini interview evaluation failed, using fallback', e);
      }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt);
        let cleanedText = text.trim();
        if (cleanedText.startsWith('```')) {
          cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/```\s*$/, '');
        }
        return JSON.parse(cleanedText);
      } catch (e) {
        console.warn('OpenAI interview evaluation failed, using fallback', e);
      }
    }

    // --- Fallback evaluator ---
    const wordCount = answer.trim().split(/\s+/).length;
    let score = 5;
    let feedback = '';

    if (wordCount < 12) {
      score = 4;
      feedback = 'The response was too short. Try to elaborate on your reasoning, mention specific technical standards, or explain how you mitigate operational risks.';
    } else {
      score = 7;
      if (wordCount > 35) score += 1;
      
      const containsKeywords = ['data', 'manage', 'solve', 'plan', 'team', 'test', 'scale', 'patient', 'customer', 'design'].some(w => answer.toLowerCase().includes(w));
      if (containsKeywords) score += 1;
      if (score > 10) score = 10;

      feedback = 'Great job. You demonstrated solid situational understanding and laid out a clear sequence of decisions. To score higher, try citing specific industry tools or engineering principles.';
    }

    return { passed: score >= 6, score, feedback };
  }

  /**
   * AI Career Simulator: Chat with AI Career Mentor
   */
  static async getSimulatorMentorAdvice(career: string, state: { title: string; level: number; stats: { technical: number; leadership: number; stress: number; network: number } }, chatHistory: { role: 'user' | 'assistant'; content: string }[], query: string) {
    const historyPrompt = chatHistory.map(h => `${h.role === 'user' ? 'Player' : 'Mentor'}: ${h.content}`).join('\n');
    const apiPrompt = `
      You are an elite AI Career Mentor for a player in a Career Simulator game.
      Player State:
      - Career: ${career}
      - Title: ${state.title}
      - Level: ${state.level}/10
      - Stats: Tech Skill: ${state.stats.technical}%, Leadership: ${state.stats.leadership}%, Stress: ${state.stats.stress}%, Network: ${state.stats.network}%

      Chat History:
      ${historyPrompt}

      User asks you: "${query}"
      
      Provide a concise, encouraging, and highly specific mentoring tip under 4 sentences. Point out a statistic they should balance or a specific skill course they should focus on. Keep it in character as their senior mentor.
    `;

    if (this.getGeminiKey()) {
      try {
        const text = await this.queryGemini(apiPrompt, false);
        return text;
      } catch (e) {
        console.warn('Gemini simulator mentor advice failed, using fallback', e);
      }
    } else if (this.getOpenAIKey()) {
      try {
        const text = await this.queryOpenAI(apiPrompt, false);
        return text;
      } catch (e) {
        console.warn('OpenAI simulator mentor advice failed, using fallback', e);
      }
    }

    // --- Fallback chatbot logic ---
    const lower = query.toLowerCase();
    if (lower.includes('stress')) {
      return `Managing stress is critical, or your character might face burnout. Try choosing choices that offer relaxation, or refuse late-night shifts to drop stress by 10-15%. Balance is key to a long career.`;
    }
    if (lower.includes('salary') || lower.includes('promotion') || lower.includes('promote')) {
      return `To earn promotions, focus on elevating your Technical and Leadership scores above 60%. When you hit 100% XP, you will trigger a review. Study hard and prepare for situational interview questions!`;
    }
    if (lower.includes('skill') || lower.includes('learn')) {
      return `As a ${state.title}, you should focus on building your core credentials. I recommend looking into advanced domain certifications or taking leadership training to boost your stats.`;
    }

    return `Keep pushing forward! Your technical skill is at ${state.stats.technical}% and leadership is at ${state.stats.leadership}%. Focus on taking balanced decisions to secure your next promotion to the next tier.`;
  }

  /**
   * AI Chat response for Futuro Copilot chatbot
   */
  static async getChatResponse(history: { role: string; content: string }[], userMessage: string, targetCareer?: string): Promise<string> {
    const key = this.getGeminiKey();
    const systemPrompt = `You are Futuro AI, an empathetic, highly intelligent AI Career Copilot and executive career strategist. 
The user is aiming for or currently building a career as: ${targetCareer || 'Technology & Innovation Professional'}.
Provide concise, highly actionable, encouraging, and tailored career guidance. Format your output using clear markdown formatting, bullet points, and actionable next steps.`;

    const formattedHistory = history.map(h => `${h.role === 'user' ? 'User' : 'Futuro AI'}: ${h.content}`).join('\n');
    const fullPrompt = `${systemPrompt}\n\nChat History:\n${formattedHistory}\n\nUser Question: ${userMessage}\n\nFuturo AI Answer:`;

    if (key) {
      try {
        const responseText = await this.queryGemini(fullPrompt, false);
        if (responseText && responseText.trim()) return responseText.trim();
      } catch (err) {
        console.warn('Gemini chat query failed, trying OpenAI or smart fallback:', err);
      }
    }

    const openAiKey = this.getOpenAIKey();
    if (openAiKey) {
      try {
        const responseText = await this.queryOpenAI(fullPrompt, false);
        if (responseText && responseText.trim()) return responseText.trim();
      } catch (err) {
        console.warn('OpenAI chat query failed:', err);
      }
    }

    // Dynamic intelligent fallback based on user's query if API keys are pending
    const lower = userMessage.toLowerCase().trim();
    if (lower === 'hi' || lower === 'hello' || lower === 'hey' || lower.startsWith('hi ') || lower.startsWith('hello ')) {
      return `Hello! 👋 I am Futuro AI, your personal Career Intelligence Copilot. How can I help optimize your career trajectory, analyze your skills, or prepare you for interviews today?`;
    }
    if (lower.includes('resume') || lower.includes('cv')) {
      return `To optimize your resume for ATS screening:\n\n1. **Quantify Achievements**: Use metrics (e.g., "Increased server speed by 40%").\n2. **Tailor Keywords**: Align your skills directly with job description requirements.\n3. **Use Clean Formatting**: You can build and export print-ready A4 ATS resumes right here in our **AI Resume Builder** tool on the \`/resume\` page!`;
    }
    if (lower.includes('interview') || lower.includes('prep')) {
      return `For technical and behavioral interview preparation:\n\n1. **STAR Method**: Structure answers as Situation, Task, Action, and Result.\n2. **Core Fundamentals**: Practice system design and data structures in our **AI Interviewer** module.\n3. **Mock Sessions**: Launch a live mock interview session on \`/interview-prep\` to receive real-time score feedback!`;
    }

    return `I evaluated your question regarding "${userMessage}":\n\n1. **Target Alignment**: Tailored for your path as ${targetCareer || 'Full Stack AI Engineer'}.\n2. **Key Skills to Focus On**: Deepen your hands-on mastery of system architecture, cloud deployment, and AI API integrations.\n3. **Recommended Action Step**: Explore customized learning roadmaps on \`/roadmap\` or generate practice projects on \`/ai-tools/project-generator\`!`;
  }
}


