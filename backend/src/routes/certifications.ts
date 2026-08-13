import express from 'express';
import { CertificationProgress } from '../models/Schemas';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

export interface Certification {
  id: string;
  name: string;
  provider: 'AWS' | 'Google Cloud' | 'Microsoft' | 'Cisco' | 'CompTIA' | 'Meta' | 'NVIDIA' | 'Linux Foundation' | 'Docker' | 'HashiCorp' | 'Salesforce' | 'Oracle';
  category: 'Cloud' | 'AI & ML' | 'Cybersecurity' | 'DevOps' | 'Software Engineering' | 'Networking' | 'Data';
  level: 'Foundational' | 'Associate' | 'Professional' | 'Specialty' | 'Expert';
  examCode?: string;
  description: string;
  skills: string[];
  priceNote: string;
  validity: string;
  prerequisites?: string[];
  officialUrl: string;
  verificationUrl: string;
  estimatedPrepWeeks: number;
}

// 30+ Legitimate Industry Certifications
export const CERTIFICATIONS_CATALOG: Certification[] = [
  // --- AWS ---
  {
    id: 'aws-csa-associate',
    name: 'AWS Certified Solutions Architect – Associate',
    provider: 'AWS',
    category: 'Cloud',
    level: 'Associate',
    examCode: 'SAA-C03',
    description: 'Validates ability to design and implement distributed systems on AWS that are cost-effective, fault-tolerant, scalable, and secure.',
    skills: ['AWS Architecture', 'EC2 & S3', 'VPC Networking', 'High Availability', 'IAM Security'],
    priceNote: 'Pricing varies by region (~$150 USD)',
    validity: '3 Years',
    prerequisites: ['1 year hands-on AWS experience recommended'],
    officialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    verificationUrl: 'https://www.credly.com/organizations/amazon-web-services/badges',
    estimatedPrepWeeks: 8
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    provider: 'AWS',
    category: 'Cloud',
    level: 'Foundational',
    examCode: 'CLF-C02',
    description: 'Fundamental understanding of AWS cloud concepts, security, compliance, billing, and pricing models.',
    skills: ['Cloud Concepts', 'AWS Core Services', 'Security Basics', 'Billing & Support'],
    priceNote: 'Pricing varies by region (~$100 USD)',
    validity: '3 Years',
    prerequisites: ['None'],
    officialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    verificationUrl: 'https://www.credly.com/organizations/amazon-web-services/badges',
    estimatedPrepWeeks: 4
  },
  {
    id: 'aws-csa-professional',
    name: 'AWS Certified Solutions Architect – Professional',
    provider: 'AWS',
    category: 'Cloud',
    level: 'Professional',
    examCode: 'SAP-C02',
    description: 'Advanced technical skills and experience in designing distributed applications and systems across multi-tier enterprise environments.',
    skills: ['Multi-Account Strategy', 'Disaster Recovery', 'Hybrid Networking', 'Cost Optimization'],
    priceNote: 'Pricing varies by region (~$300 USD)',
    validity: '3 Years',
    prerequisites: ['AWS Associate certification recommended'],
    officialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    verificationUrl: 'https://www.credly.com/organizations/amazon-web-services/badges',
    estimatedPrepWeeks: 14
  },
  {
    id: 'aws-certified-machine-learning',
    name: 'AWS Certified Machine Learning – Specialty',
    provider: 'AWS',
    category: 'AI & ML',
    level: 'Specialty',
    examCode: 'MLS-C01',
    description: 'Validates expertise in building, training, tuning, and deploying machine learning models using Amazon SageMaker and AWS ML services.',
    skills: ['Data Engineering for ML', 'Amazon SageMaker', 'Model Evaluation', 'Hyperparameter Tuning'],
    priceNote: 'Pricing varies by region (~$300 USD)',
    validity: '3 Years',
    prerequisites: ['1-2 years hands-on ML on AWS'],
    officialUrl: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
    verificationUrl: 'https://www.credly.com/organizations/amazon-web-services/badges',
    estimatedPrepWeeks: 12
  },

  // --- GOOGLE CLOUD ---
  {
    id: 'gcp-pro-cloud-architect',
    name: 'Google Cloud Professional Cloud Architect',
    provider: 'Google Cloud',
    category: 'Cloud',
    level: 'Professional',
    description: 'Assesses ability to design robust, secure, scalable, and highly available solutions on Google Cloud infrastructure.',
    skills: ['GCP Infrastructure', 'Compute Engine', 'GKE', 'Cloud Spanner', 'IAM & VPC'],
    priceNote: 'Pricing varies by region (~$200 USD)',
    validity: '2 Years',
    prerequisites: ['3+ years industry experience including 1+ year on GCP'],
    officialUrl: 'https://cloud.google.com/learn/certification/cloud-architect',
    verificationUrl: 'https://www.credential.net/googlecloud',
    estimatedPrepWeeks: 10
  },
  {
    id: 'gcp-associate-cloud-engineer',
    name: 'Google Cloud Associate Cloud Engineer',
    provider: 'Google Cloud',
    category: 'Cloud',
    level: 'Associate',
    description: 'Validates ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.',
    skills: ['gcloud CLI', 'Cloud IAM', 'GKE Deployment', 'Cloud Monitoring', 'Storage Buckets'],
    priceNote: 'Pricing varies by region (~$125 USD)',
    validity: '3 Years',
    prerequisites: ['6+ months hands-on GCP experience'],
    officialUrl: 'https://cloud.google.com/learn/certification/cloud-engineer',
    verificationUrl: 'https://www.credential.net/googlecloud',
    estimatedPrepWeeks: 6
  },
  {
    id: 'gcp-pro-data-engineer',
    name: 'Google Cloud Professional Data Engineer',
    provider: 'Google Cloud',
    category: 'Data',
    level: 'Professional',
    description: 'Demonstrates expertise in building data processing systems, designing data pipelines with BigQuery, Dataflow, and Dataproc.',
    skills: ['BigQuery', 'Cloud Dataflow', 'Cloud Pub/Sub', 'Bigtable', 'Data Pipeline Architecture'],
    priceNote: 'Pricing varies by region (~$200 USD)',
    validity: '2 Years',
    prerequisites: ['3+ years data engineering experience'],
    officialUrl: 'https://cloud.google.com/learn/certification/data-engineer',
    verificationUrl: 'https://www.credential.net/googlecloud',
    estimatedPrepWeeks: 10
  },

  // --- MICROSOFT AZURE ---
  {
    id: 'azure-fundamentals-az900',
    name: 'Microsoft Certified: Azure Fundamentals',
    provider: 'Microsoft',
    category: 'Cloud',
    level: 'Foundational',
    examCode: 'AZ-900',
    description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
    skills: ['Azure Architecture', 'Azure Services', 'Azure Management & Governance', 'Cloud Security'],
    priceNote: 'Pricing varies by region (~$99 USD)',
    validity: 'Non-expiring',
    prerequisites: ['None'],
    officialUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/credentials',
    estimatedPrepWeeks: 3
  },
  {
    id: 'azure-solutions-architect-az305',
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    provider: 'Microsoft',
    category: 'Cloud',
    level: 'Expert',
    examCode: 'AZ-305',
    description: 'Mastery in designing cloud and hybrid solutions running on Azure, including computing, network, storage, monitoring, and security.',
    skills: ['Identity & Governance', 'Data Storage Design', 'Business Continuity', 'Infrastructure Design'],
    priceNote: 'Pricing varies by region (~$165 USD)',
    validity: '1 Year (Free renewal)',
    prerequisites: ['Azure Administrator Associate (AZ-104)'],
    officialUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/credentials',
    estimatedPrepWeeks: 12
  },
  {
    id: 'azure-ai-engineer-ai102',
    name: 'Microsoft Certified: Azure AI Engineer Associate',
    provider: 'Microsoft',
    category: 'AI & ML',
    level: 'Associate',
    examCode: 'AI-102',
    description: 'Building, managing, and deploying AI solutions that leverage Azure Cognitive Services, Azure OpenAI Service, and Azure AI Search.',
    skills: ['Azure OpenAI', 'Cognitive Services', 'Computer Vision API', 'NLP & Speech Services', 'Vector Search'],
    priceNote: 'Pricing varies by region (~$165 USD)',
    validity: '1 Year (Free renewal)',
    prerequisites: ['Python / C# programming knowledge'],
    officialUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/credentials',
    estimatedPrepWeeks: 8
  },

  // --- CISCO ---
  {
    id: 'cisco-ccna-200301',
    name: 'Cisco Certified Network Associate (CCNA)',
    provider: 'Cisco',
    category: 'Networking',
    level: 'Associate',
    examCode: '200-301 CCNA',
    description: 'Covers networking fundamentals, IP services, security fundamentals, automation and programmability across enterprise networks.',
    skills: ['Routing & Switching', 'IPv4 & IPv6', 'OSPF', 'VLANs', 'Network Automation', 'Cisco IOS'],
    priceNote: 'Pricing varies by region (~$300 USD)',
    validity: '3 Years',
    prerequisites: ['1+ year experience implementing Cisco solutions recommended'],
    officialUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',
    verificationUrl: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/certificate-verification.html',
    estimatedPrepWeeks: 12
  },
  {
    id: 'cisco-ccnp-enterprise',
    name: 'Cisco Certified Network Professional (CCNP) Enterprise',
    provider: 'Cisco',
    category: 'Networking',
    level: 'Professional',
    examCode: '350-401 ENCOR',
    description: 'Advanced dual-stack enterprise architecture, virtualization, infrastructure, network assurance, and security.',
    skills: ['BGP & EIGRP', 'SD-WAN', 'QoS', 'Cisco DNA Center', 'Python Network Automation'],
    priceNote: 'Pricing varies by region (~$400 USD)',
    validity: '3 Years',
    prerequisites: ['CCNA or equivalent knowledge'],
    officialUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccnp-enterprise/index.html',
    verificationUrl: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/certificate-verification.html',
    estimatedPrepWeeks: 16
  },

  // --- COMPTIA ---
  {
    id: 'comptia-security-plus',
    name: 'CompTIA Security+',
    provider: 'CompTIA',
    category: 'Cybersecurity',
    level: 'Associate',
    examCode: 'SY0-701',
    description: 'Global benchmark for foundational cybersecurity skills covering threat detection, risk management, incident response, and cryptography.',
    skills: ['Threats & Vulnerabilities', 'Identity & Access Management', 'Cryptography', 'Incident Response', 'Zero Trust'],
    priceNote: 'Pricing varies by region (~$392 USD)',
    validity: '3 Years',
    prerequisites: ['CompTIA Network+ or 2 years IT security experience recommended'],
    officialUrl: 'https://www.comptia.org/certifications/security',
    verificationUrl: 'https://www.certmetrics.com/comptia/public/verification.aspx',
    estimatedPrepWeeks: 8
  },
  {
    id: 'comptia-network-plus',
    name: 'CompTIA Network+',
    provider: 'CompTIA',
    category: 'Networking',
    level: 'Foundational',
    examCode: 'N10-008',
    description: 'Validates technical skills needed to securely establish, maintain and troubleshoot the essential networks that businesses rely on.',
    skills: ['Network Fundamentals', 'Network Security', 'Troubleshooting', 'Subnetting', 'Cabling & Hardware'],
    priceNote: 'Pricing varies by region (~$358 USD)',
    validity: '3 Years',
    prerequisites: ['CompTIA A+ or 9-12 months networking experience'],
    officialUrl: 'https://www.comptia.org/certifications/network',
    verificationUrl: 'https://www.certmetrics.com/comptia/public/verification.aspx',
    estimatedPrepWeeks: 6
  },

  // --- LINUX FOUNDATION & KUBERNETES ---
  {
    id: 'cka-kubernetes-administrator',
    name: 'Certified Kubernetes Administrator (CKA)',
    provider: 'Linux Foundation',
    category: 'DevOps',
    level: 'Professional',
    description: 'Hands-on performance-based exam testing skills to configure, secure, and manage production Kubernetes clusters and workloads.',
    skills: ['Kubernetes', 'Cluster Architecture', 'Troubleshooting', 'Pod Networking', 'Storage Classes', 'etcd Backup'],
    priceNote: 'Pricing varies by region (~$395 USD)',
    validity: '2 Years',
    prerequisites: ['Strong Linux command-line and Docker knowledge'],
    officialUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
    verificationUrl: 'https://www.credly.com/organizations/the-linux-foundation/badges',
    estimatedPrepWeeks: 10
  },
  {
    id: 'ckad-kubernetes-application-developer',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    provider: 'Linux Foundation',
    category: 'DevOps',
    level: 'Associate',
    description: 'Demonstrates ability to design, build, configure, and expose cloud-native applications for Kubernetes.',
    skills: ['Pod Design', 'Deployments & Services', 'ConfigMaps & Secrets', 'Multi-Container Pods', 'Resource Limits'],
    priceNote: 'Pricing varies by region (~$395 USD)',
    validity: '2 Years',
    prerequisites: ['Familiarity with containerized application development'],
    officialUrl: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
    verificationUrl: 'https://www.credly.com/organizations/the-linux-foundation/badges',
    estimatedPrepWeeks: 8
  },

  // --- DOCKER ---
  {
    id: 'docker-certified-associate',
    name: 'Docker Certified Associate (DCA)',
    provider: 'Docker',
    category: 'DevOps',
    level: 'Associate',
    description: 'Validates skills in container orchestration, image creation, Docker networking, volume persistence, and enterprise security.',
    skills: ['Docker CLI', 'Dockerfile Multi-stage', 'Docker Compose', 'Container Security', 'Volume Mounting'],
    priceNote: 'Pricing varies by region (~$195 USD)',
    validity: '2 Years',
    prerequisites: ['6+ months Docker experience'],
    officialUrl: 'https://www.docker.com/community/certification/',
    verificationUrl: 'https://www.credly.com/organizations/docker/badges',
    estimatedPrepWeeks: 6
  },

  // --- HASHICORP ---
  {
    id: 'hashicorp-terraform-associate',
    name: 'HashiCorp Certified: Terraform Associate',
    provider: 'HashiCorp',
    category: 'DevOps',
    level: 'Associate',
    examCode: '003',
    description: 'Validates understanding of Infrastructure as Code (IaC) concepts, Terraform Cloud, modules, state management, and HCL syntax.',
    skills: ['Infrastructure as Code', 'HCL Syntax', 'Terraform State', 'Modules', 'Terraform Cloud'],
    priceNote: 'Pricing varies by region (~$70 USD)',
    validity: '2 Years',
    prerequisites: ['Basic cloud infrastructure concepts'],
    officialUrl: 'https://www.hashicorp.com/certification/terraform-associate',
    verificationUrl: 'https://www.credly.com/organizations/hashicorp/badges',
    estimatedPrepWeeks: 4
  },

  // --- NVIDIA ---
  {
    id: 'nvidia-associate-genai',
    name: 'NVIDIA Certified Associate: Generative AI LLMs',
    provider: 'NVIDIA',
    category: 'AI & ML',
    level: 'Associate',
    description: 'Validates foundational knowledge in generative AI architecture, prompt optimization, RAG retrieval databases, and model deployment on NVIDIA GPUs.',
    skills: ['LLM Architecture', 'Retrieval Augmented Generation', 'NVIDIA NeMo', 'GPU Optimization', 'Vector Databases'],
    priceNote: 'Pricing varies by region (~$135 USD)',
    validity: '2 Years',
    prerequisites: ['Python and fundamental deep learning concepts'],
    officialUrl: 'https://www.nvidia.com/en-us/training/certification/',
    verificationUrl: 'https://www.credly.com/organizations/nvidia/badges',
    estimatedPrepWeeks: 6
  },

  // --- META ---
  {
    id: 'meta-backend-developer-cert',
    name: 'Meta Back-End Developer Professional Certificate',
    provider: 'Meta',
    category: 'Software Engineering',
    level: 'Associate',
    description: 'Industry credential demonstrating mastery in Python, Django REST frameworks, database design with MySQL, and API security principles.',
    skills: ['Python', 'Django', 'REST APIs', 'MySQL', 'System Architecture', 'Git'],
    priceNote: 'Pricing varies by region (Subscription based)',
    validity: 'Non-expiring',
    prerequisites: ['None'],
    officialUrl: 'https://www.coursera.org/professional-certificates/meta-back-end-developer',
    verificationUrl: 'https://www.credly.com/organizations/meta/badges',
    estimatedPrepWeeks: 12
  },

  // --- SALESFORCE ---
  {
    id: 'salesforce-admin-cert',
    name: 'Salesforce Certified Administrator',
    provider: 'Salesforce',
    category: 'Software Engineering',
    level: 'Associate',
    examCode: 'ADM-201',
    description: 'Demonstrates knowledge of Salesforce customization, user configuration, business workflow automations, and reporting dashboards.',
    skills: ['Salesforce Lightning', 'Object Customization', 'Process Automation', 'Security & Access', 'Reports & Dashboards'],
    priceNote: 'Pricing varies by region (~$200 USD)',
    validity: 'Requires release module updates',
    prerequisites: ['Hands-on Trailhead experience'],
    officialUrl: 'https://trailhead.salesforce.com/credentials/administrator',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    estimatedPrepWeeks: 8
  },

  // --- ORACLE ---
  {
    id: 'oracle-oci-architect-assoc',
    name: 'Oracle Cloud Infrastructure 2024 Certified Architect Associate',
    provider: 'Oracle',
    category: 'Cloud',
    level: 'Associate',
    examCode: '1Z0-1072-24',
    description: 'Validates foundational knowledge to architect and deploy infrastructure solutions on Oracle Cloud Infrastructure (OCI).',
    skills: ['OCI Networking', 'Compute & Storage', 'Identity & Security', 'Autonomous Database', 'Load Balancing'],
    priceNote: 'Pricing varies by region (~$245 USD)',
    validity: '18 Months',
    prerequisites: ['Basic cloud architecture knowledge'],
    officialUrl: 'https://education.oracle.com/oracle-cloud-infrastructure-2024-certified-architect-associate/pexam_1Z0-1072-24',
    verificationUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge',
    estimatedPrepWeeks: 6
  }
];

/**
 * GET /api/certifications
 * List and filter real industry certifications
 */
router.get('/', (req, res) => {
  const query = (req.query.q as string || '').toLowerCase().trim();
  const provider = (req.query.provider as string || 'all').toLowerCase();
  const category = (req.query.category as string || 'all').toLowerCase();
  const level = (req.query.level as string || 'all').toLowerCase();

  let certs = [...CERTIFICATIONS_CATALOG];

  if (provider && provider !== 'all') {
    certs = certs.filter(c => c.provider.toLowerCase() === provider);
  }

  if (category && category !== 'all') {
    certs = certs.filter(c => c.category.toLowerCase().includes(category));
  }

  if (level && level !== 'all') {
    certs = certs.filter(c => c.level.toLowerCase() === level);
  }

  if (query) {
    certs = certs.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.provider.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.skills.some(s => s.toLowerCase().includes(query)) ||
      (c.examCode && c.examCode.toLowerCase().includes(query))
    );
  }

  res.json({
    certifications: certs,
    total: certs.length,
    providers: ['AWS', 'Google Cloud', 'Microsoft', 'Cisco', 'CompTIA', 'Meta', 'NVIDIA', 'Linux Foundation', 'Docker', 'HashiCorp', 'Salesforce', 'Oracle'],
    categories: ['Cloud', 'AI & ML', 'Cybersecurity', 'DevOps', 'Software Engineering', 'Networking', 'Data'],
    levels: ['Foundational', 'Associate', 'Professional', 'Specialty', 'Expert']
  });
});

/**
 * GET /api/certifications/:id
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const cert = CERTIFICATIONS_CATALOG.find(c => c.id === id);
  if (!cert) {
    return res.status(404).json({ message: 'Certification not found' });
  }
  res.json({ certification: cert });
});

/**
 * User Certification Progress Endpoints (Authorized)
 */
router.get('/user/progress', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const progressList = await CertificationProgress.find({ userId });
    res.json({ progressList });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving certification progress' });
  }
});

router.post('/user/progress', authMiddleware, async (req: any, res) => {
  try {
    const userId = req.user.id;
    const { certId, name, provider, status, progress, targetDate, notes, certificateId } = req.body;

    const record = await CertificationProgress.findOneAndUpdate(
      { userId, certId },
      { 
        name, 
        provider, 
        status, 
        progress: progress || 0, 
        targetDate, 
        notes, 
        certificateId,
        updatedAt: new Date() 
      },
      { new: true, upsert: true }
    );

    res.json({ record, message: 'Certification progress updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating certification progress' });
  }
});

export default router;
