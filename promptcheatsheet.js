import React, { useState } from 'react';

const PromptCheatSheet = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const principles = [
    // Prompt Structuring & Formatting
    {
      id: 1,
      category: 'structure',
      title: 'Structured Formatting',
      description: "Begin prompts with '###Instruction###', followed by '###Example###' or '###Question###'",
      example: "###Instruction###\nWrite a summary\n###Example###\nSolar power..."
    },
    {
      id: 2,
      category: 'structure',
      title: 'Use Delimiters',
      description: 'Use delimiters to structure prompts effectively',
      example: "--- CONTEXT ---\n[info]\n--- TASK ---\n[request]"
    },
    {
      id: 3,
      category: 'structure',
      title: 'Direct Task Assignment',
      description: 'Use phrases like "Your task is" and "You MUST"',
      example: "Your task is to analyze data and You MUST provide insights."
    },
    {
      id: 4,
      category: 'structure',
      title: 'Precise Requirements',
      description: 'State explicit requirements for content creation',
      example: "Write 500 words with 3 sections, 2 examples each."
    },
    {
      id: 5,
      category: 'structure',
      title: 'Output Primers',
      description: 'End prompts with the start of expected response',
      example: "Explain photosynthesis. The process begins when..."
    },
    
    // Clarity & Communication
    {
      id: 6,
      category: 'clarity',
      title: 'Direct Communication',
      description: 'Avoid polite phrases like "please" or "thank you"',
      example: '"Generate a list" instead of "Please generate a list"'
    },
    {
      id: 7,
      category: 'clarity',
      title: 'Simple Explanations',
      description: 'Request explanations suitable for beginners',
      example: "Explain quantum physics like I'm 10 years old."
    },
    {
      id: 8,
      category: 'clarity',
      title: 'Natural Language Response',
      description: 'Request natural, human-like answers',
      example: "Write in a conversational tone as if explaining to a friend."
    },
    {
      id: 9,
      category: 'clarity',
      title: 'Affirmative Directives',
      description: 'Use positive language instead of negative',
      example: '"Focus on solutions" instead of "Don\'t mention problems"'
    },
    {
      id: 10,
      category: 'clarity',
      title: 'Unbiased Responses',
      description: 'Ensure answers are unbiased and stereotype-free',
      example: "Provide objective analysis of different viewpoints."
    },

    // Engagement & Interaction
    {
      id: 11,
      category: 'engagement',
      title: 'Audience Integration',
      description: 'Tailor prompts considering audience expertise level',
      example: "Explain ML for developers with 5+ years experience."
    },
    {
      id: 12,
      category: 'engagement',
      title: 'Interactive Engagement',
      description: 'Allow the model to ask clarifying questions',
      example: "Ask me specific questions if you need more details."
    },
    {
      id: 13,
      category: 'engagement',
      title: 'Leading Words',
      description: 'Guide responses with phrases like "think step by step"',
      example: "Think step by step to solve this problem."
    },
    {
      id: 14,
      category: 'engagement',
      title: 'Learning with Testing',
      description: 'Request teaching with a test at the end',
      example: "Teach me photosynthesis, then give me a quiz."
    },
    {
      id: 15,
      category: 'engagement',
      title: 'Role Assignment',
      description: 'Assign specific roles to the language model',
      example: "Act as a senior marketing consultant."
    },

    // Task Specification & Execution
    {
      id: 16,
      category: 'execution',
      title: 'Breaking Down Tasks',
      description: 'Simplify complex tasks into manageable prompts',
      example: "First outline topics, then write detailed sections."
    },
    {
      id: 17,
      category: 'execution',
      title: 'Detailed Text Requests',
      description: 'Ask for detailed essays on specific topics',
      example: "Write a comprehensive 1000-word analysis."
    },
    {
      id: 18,
      category: 'execution',
      title: 'Example-Driven Prompting',
      description: 'Use few-shot prompting with examples',
      example: "Format: Input: [text] → Output: [summary]"
    },
    {
      id: 19,
      category: 'execution',
      title: 'Chain-of-Thought with Examples',
      description: 'Combine reasoning with few-shot prompts',
      example: "Problem: 15×24. Thinking: 15×20=300, 15×4=60..."
    },
    {
      id: 20,
      category: 'execution',
      title: 'Continuation Prompts',
      description: 'Continue or finish provided text',
      example: "Continue: 'The lighthouse keeper noticed...'"
    },
    {
      id: 21,
      category: 'execution',
      title: 'Text Revision',
      description: 'Request improvements without style changes',
      example: "Improve grammar but keep the same style."
    },
    {
      id: 22,
      category: 'execution',
      title: 'Complex Coding Tasks',
      description: 'Request scripts for multi-file projects',
      example: "Create full React project with separate components."
    },

    // Motivation & Quality Control
    {
      id: 23,
      category: 'motivation',
      title: 'Incentivizing Quality',
      description: 'Suggest tips for better solutions',
      example: "I'll tip $200 for comprehensive response."
    },
    {
      id: 24,
      category: 'motivation',
      title: 'Penalty Notification',
      description: 'State penalties for specific actions',
      example: "Penalty for providing inaccurate information."
    },
    {
      id: 25,
      category: 'motivation',
      title: 'Repetition for Emphasis',
      description: 'Repeat words/phrases for emphasis',
      example: "This is CRITICAL. Deadline is CRITICAL."
    },
    {
      id: 26,
      category: 'motivation',
      title: 'Imitating Style',
      description: 'Request text similar to provided sample',
      example: "Write in same tone as this example: [sample]"
    }
  ];

  const categories = {
    all: { name: 'All Principles', color: 'bg-gray-100', count: 26 },
    structure: { name: 'Structure & Formatting', color: 'bg-blue-100', count: 5 },
    clarity: { name: 'Clarity & Communication', color: 'bg-green-100', count: 5 },
    engagement: { name: 'Engagement & Interaction', color: 'bg-purple-100', count: 5 },
    execution: { name: 'Task Execution', color: 'bg-orange-100', count: 7 },
    motivation: { name: 'Quality Control', color: 'bg-red-100', count: 4 }
  };

  const filteredPrinciples = activeTab === 'all' 
    ? principles 
    : principles.filter(p => p.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          26 Principled Prompting Instructions
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Evidence-based prompt engineering guidelines for optimal AI interaction
        </p>
        <div className="text-sm text-blue-600">
          <a href="https://arxiv.org/pdf/2312.16171" target="_blank" rel="noopener noreferrer" className="hover:underline">
            📄 Academic Paper: Principled Instructions Are All You Need for Questioning LLaMA-1/2, GPT-3.5/4
          </a>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
              activeTab === key 
                ? `${cat.color} border-gray-400 text-gray-900` 
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPrinciples.map((principle) => (
          <div key={principle.id} className="border border-gray-200 rounded-lg bg-white shadow-sm">
            {/* Card Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
                    {principle.id}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {principle.title}
                  </h3>
                </div>
                <button
                  onClick={() => toggleExpanded(principle.id)}
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  {expandedItems[principle.id] ? '−' : '+'}
                </button>
              </div>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                {principle.description}
              </p>
            </div>

            {/* Expandable Example */}
            {expandedItems[principle.id] && (
              <div className="p-4 bg-gray-50">
                <p className="text-xs font-medium text-gray-700 mb-2">EXAMPLE:</p>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <code className="text-xs text-gray-800 font-mono leading-relaxed whitespace-pre-wrap">
                    {principle.example}
                  </code>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Tips Footer */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
        <h3 className="font-bold text-gray-900 mb-3">🚀 Quick Implementation Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-blue-600">Structure:</strong> Use clear delimiters and formatting
          </div>
          <div>
            <strong className="text-green-600">Clarity:</strong> Be direct and specific
          </div>
          <div>
            <strong className="text-purple-600">Engagement:</strong> Use roles and step-by-step guidance
          </div>
          <div>
            <strong className="text-orange-600">Execution:</strong> Break complex tasks down
          </div>
          <div>
            <strong className="text-red-600">Quality:</strong> Use incentives and clear expectations
          </div>
          <div>
            <strong className="text-gray-600">Remember:</strong> Click + to see examples
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCheatSheet;