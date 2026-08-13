'use client';

import React, { useState } from 'react';
import { AppShell } from '../../components/shell/AppShell';
import { useAuth } from '../../context/AuthContext';
import {
  Layers,
  Sparkles,
  Search,
  ArrowRight,
  GraduationCap,
  Briefcase,
  BookOpen,
  X,
  PlusCircle,
  ExternalLink,
  Target,
  Plus,
  Code
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

interface GraphNode {
  id: string;
  name: string;
  category: 'Skill' | 'Tech' | 'Role' | 'Project' | 'Course';
  level: string;
  x: number;
  y: number;
  connections: string[];
  demand?: string;
  description: string;
}

export default function CareerGraphPage() {
  const { user, addSkill } = useAuth();

  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Skill form
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');

  const handleAddSkillSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName.trim()) return;
    await addSkill({ name: skillName.trim(), level: skillLevel });
    setSkillName('');
    setShowAddModal(false);
  };

  // Generate dynamic nodes from user profile
  const userDetailed = user?.skillsWithLevel || [];
  const userSimple = user?.currentSkills || [];

  const dynamicSkillNodes: GraphNode[] = [];

  if (userDetailed.length > 0) {
    userDetailed.forEach((s, idx) => {
      dynamicSkillNodes.push({
        id: `user-skill-${idx}`,
        name: s.name,
        category: 'Skill',
        level: `${s.level}`,
        x: 15 + (idx % 4) * 22,
        y: 25 + Math.floor(idx / 4) * 25,
        connections: ['user-role-1'],
        demand: 'User Skill',
        description: `Verified skill in your portfolio with proficiency level: ${s.level}.`
      });
    });
  } else if (userSimple.length > 0) {
    userSimple.forEach((s, idx) => {
      dynamicSkillNodes.push({
        id: `user-skill-${idx}`,
        name: s,
        category: 'Skill',
        level: 'Tracked',
        x: 15 + (idx % 4) * 22,
        y: 25 + Math.floor(idx / 4) * 25,
        connections: ['user-role-1'],
        demand: 'Active Skill',
        description: `Tracked skill in your profile.`
      });
    });
  } else {
    // Default starting nodes if no skills added yet
    dynamicSkillNodes.push(
      {
        id: 'start-1',
        name: 'Python',
        category: 'Skill',
        level: 'Intermediate',
        x: 20,
        y: 30,
        connections: ['user-role-1'],
        demand: 'High Demand',
        description: 'Foundational programming language for AI, data, and web backend.'
      },
      {
        id: 'start-2',
        name: 'JavaScript / React',
        category: 'Skill',
        level: 'Intermediate',
        x: 45,
        y: 25,
        connections: ['user-role-1'],
        demand: 'High Demand',
        description: 'Core web frontend development framework.'
      }
    );
  }

  // Related Career & Course Nodes
  const roleNode: GraphNode = {
    id: 'user-role-1',
    name: user?.targetCareer || 'Career Possibility',
    category: 'Role',
    level: 'Top Match',
    x: 60,
    y: 40,
    connections: dynamicSkillNodes.map(n => n.id),
    demand: '+45% Hiring Spike',
    description: 'Dynamic career destination matching your skills and interest profile.'
  };

  const projectNode: GraphNode = {
    id: 'user-proj-1',
    name: 'Full Stack AI Portfolio App',
    category: 'Project',
    level: 'Recommended',
    x: 82,
    y: 30,
    connections: ['user-role-1'],
    demand: 'High Portfolio Impact',
    description: 'Hands-on project showcasing your verified skills.'
  };

  const allNodes: GraphNode[] = [...dynamicSkillNodes, roleNode, projectNode];

  const filteredNodes = allNodes.filter(
    (n) => filterCategory === 'all' || n.category.toLowerCase() === filterCategory.toLowerCase()
  );

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 select-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Badge variant="violet" size="sm" icon={<Layers className="w-3.5 h-3.5 text-indigo-600" />}>
                Dynamic User Skill Graph
              </Badge>
              <Badge variant="emerald" size="sm">
                {dynamicSkillNodes.length} Active Skills
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-outfit mt-1">
              Skill & Career Network Graph
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Visualize relationships between your actual Skills, Technologies, Recommended Projects, and Career Targets.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowAddModal(true)}
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Add Skill to Graph
            </Button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 bg-white p-2 rounded-2xl border border-slate-200 text-xs overflow-x-auto">
          {['all', 'skill', 'tech', 'role', 'project'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold capitalize transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Network Graph Canvas Box */}
        <Card variant="elevated" className="relative h-[480px] bg-[#F8FAFC] border-slate-200 p-6 overflow-hidden rounded-3xl">
          {/* Canvas Grid Background */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {dynamicSkillNodes.map((n, i) => (
              <line
                key={i}
                x1={`${n.x}%`}
                y1={`${n.y}%`}
                x2={`${roleNode.x}%`}
                y2={`${roleNode.y}%`}
                stroke="#635BFF"
                strokeWidth="2"
                strokeDasharray="4"
              />
            ))}
            <line x1={`${roleNode.x}%`} y1={`${roleNode.y}%`} x2={`${projectNode.x}%`} y2={`${projectNode.y}%`} stroke="#10B981" strokeWidth="2.5" />
          </svg>

          {/* Render Graph Nodes */}
          {filteredNodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer text-xs w-48 shadow-2xs ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                    : 'bg-white border-slate-300 hover:border-indigo-400 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Badge
                    variant={
                      node.category === 'Role'
                        ? 'violet'
                        : node.category === 'Skill'
                        ? 'emerald'
                        : 'cyan'
                    }
                    size="sm"
                  >
                    {node.category}
                  </Badge>
                  {node.demand && <span className="text-[9px] font-bold text-slate-500">{node.demand}</span>}
                </div>

                <h4 className="font-bold text-slate-900 truncate font-outfit">{node.name}</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">{node.level}</p>
              </div>
            );
          })}
        </Card>

        {/* Node Intelligence Drawer Modal */}
        {selectedNode && (
          <Card variant="elevated" className="p-6 space-y-4 bg-white border-slate-200 shadow-md rounded-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center space-x-2">
                <Badge variant="violet" size="sm">{selectedNode.category} Node</Badge>
                <h3 className="text-lg font-bold text-slate-900 font-outfit">{selectedNode.name}</h3>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{selectedNode.description}</p>

            <div className="pt-2 flex justify-end gap-2">
              <Button variant="secondary" size="sm" onClick={() => setSelectedNode(null)}>
                Close
              </Button>
            </div>
          </Card>
        )}

        {/* ADD SKILL MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-lg font-bold text-slate-900 font-outfit">Add Skill to Dynamic Graph</h3>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddSkillSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Skill Name</label>
                  <input
                    type="text"
                    required
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="e.g. Python, Machine Learning, SQL, Figma"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Proficiency Level</label>
                  <select
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value as any)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <Button type="button" variant="secondary" size="sm" onClick={() => setShowAddModal(false)}>Cancel</Button>
                  <Button type="submit" variant="primary" size="sm">+ Add & Update Graph</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
