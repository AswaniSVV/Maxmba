import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, TrendingUp, Users, Globe, Zap, BookOpen, Play, Sparkles, GitBranch, Scale, Filter as FilterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { frameworksData as frameworks } from '@/lib/frameworksData';

const Frameworks = ({ onProClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Frameworks', count: frameworks.length },
    { id: 'strategy', label: 'Strategy', count: frameworks.filter(f => f.category === 'strategy').length },
    { id: 'analysis', label: 'Analysis', count: frameworks.filter(f => f.category === 'analysis').length },
    { id: 'operations', label: 'Operations', count: frameworks.filter(f => f.category === 'operations').length },
    { id: 'marketing', label: 'Marketing', count: frameworks.filter(f => f.category === 'marketing').length },
  ];

  const filteredFrameworks = frameworks.filter(framework => 
    selectedCategory === 'all' || framework.category === selectedCategory
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      indigo: 'from-indigo-500 to-indigo-600',
      teal: 'from-teal-500 to-teal-600',
      red: 'from-red-500 to-red-600',
      yellow: 'from-yellow-500 to-yellow-600',
      pink: 'from-pink-500 to-pink-600',
      cyan: 'from-cyan-500 to-cyan-600',
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const handleStudyFramework = (framework) => {
    if (framework.isPro) {
      onProClick();
      return;
    }
    navigate(`/frameworks/${framework.id}`);
  };

  const handlePracticeFramework = (framework) => {
    if (framework.isPro) {
      onProClick();
      return;
    }
    navigate(`/frameworks/${framework.id}?practice=true`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center">
          <Target className="w-10 h-10 mr-3" />
          Strategic Frameworks
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Master essential business frameworks used by top consulting firms and Fortune 500 companies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="text-sm"
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {filteredFrameworks.map((framework, index) => {
          const Icon = framework.icon;
          return (
            <motion.div
              key={framework.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="framework-card card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(framework.color)} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-semibold text-slate-800">{framework.name}</h3>
                      {framework.isPro && <Sparkles className="w-4 h-4 text-yellow-500" />}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(framework.difficulty)}`}>
                      {framework.difficulty}
                    </span>
                  </div>
                </div>
                {framework.mastered && (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </div>

              <p className="text-slate-600 mb-4">{framework.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 mb-2">Key Components:</h4>
                <div className="flex flex-wrap gap-1">
                  {framework.keyComponents.map((component, componentIndex) => (
                    <span
                      key={componentIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 mb-2">Applications:</h4>
                <div className="flex flex-wrap gap-1">
                  {framework.applications.map((application, appIndex) => (
                    <span
                      key={appIndex}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <span>Time to Master: {framework.timeToMaster}</span>
              </div>

              <div className="flex space-x-2">
                <Button
                  onClick={() => handleStudyFramework(framework)}
                  variant="outline"
                  className="flex-1 flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Study</span>
                </Button>
                <Button
                  onClick={() => handlePracticeFramework(framework)}
                  className={`flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r ${getColorClasses(framework.color)} hover:opacity-90`}
                >
                  <Play className="w-4 h-4" />
                  <span>Practice</span>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold text-slate-800 mb-4">📚 Recommended Learning Path</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
            <h4 className="font-semibold text-green-800">Foundation</h4>
            <p className="text-green-700 text-sm">Start with SWOT Analysis and PESTEL</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
            <h4 className="font-semibold text-yellow-800">Intermediate</h4>
            <p className="text-yellow-700 text-sm">Master Porter's Five Forces and BCG Matrix</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
            <h4 className="font-semibold text-red-800">Advanced</h4>
            <p className="text-red-700 text-sm">Apply Value Chain and McKinsey 7S</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Frameworks;