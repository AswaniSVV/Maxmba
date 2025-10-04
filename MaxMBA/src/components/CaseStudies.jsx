import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, TrendingUp, Filter, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { caseStudiesData as caseStudies } from '@/lib/caseStudiesData';

const CaseStudies = ({ onProClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Cases', count: caseStudies.length },
    { id: 'strategy', label: 'Strategy', count: caseStudies.filter(c => c.category === 'strategy').length },
    { id: 'operations', label: 'Operations', count: caseStudies.filter(c => c.category === 'operations').length },
    { id: 'marketing', label: 'Marketing', count: caseStudies.filter(c => c.category === 'marketing').length },
    { id: 'finance', label: 'Finance', count: caseStudies.filter(c => c.category === 'finance').length },
  ];

  const filteredCases = caseStudies.filter(caseStudy => {
    const matchesCategory = selectedCategory === 'all' || caseStudy.category === selectedCategory;
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleStartCase = (caseStudy) => {
    if (caseStudy.isPro) {
      onProClick();
      return;
    }
    navigate(`/case-studies/${caseStudy.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center">
          <BookOpen className="w-10 h-10 mr-3" />
          Case Studies Library
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Master real-world business scenarios with our comprehensive collection of case studies from top companies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cases, companies, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="case-study-card card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold text-slate-800">{caseStudy.title}</h3>
                  {caseStudy.isPro && <Sparkles className="w-4 h-4 text-yellow-500" />}
                </div>
                <p className="text-purple-600 font-medium text-sm">{caseStudy.company}</p>
              </div>
              {caseStudy.completed && (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>

            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{caseStudy.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(caseStudy.difficulty)}`}>
                {caseStudy.difficulty}
              </span>
              <div className="flex items-center text-slate-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {caseStudy.duration}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {caseStudy.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {caseStudy.tags.length > 2 && (
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                  +{caseStudy.tags.length - 2}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-slate-500">
                <TrendingUp className="w-4 h-4 mr-1" />
                {caseStudy.rating}/5.0
              </div>
              <Button
                onClick={() => handleStartCase(caseStudy)}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
              >
                {caseStudy.isPro && !caseStudy.completed ? <Sparkles className="w-4 h-4 mr-2" /> : null}
                {caseStudy.completed ? 'Review' : 'Start Case'}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredCases.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600 mb-2">No cases found</h3>
          <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
        </motion.div>
      )}
    </div>
  );
};

export default CaseStudies;