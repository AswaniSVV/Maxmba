import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Clock, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProgressStats = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '12', label: t('progress.stats.casesCompleted'), increase: '+3 this week', icon: BookOpen, gradient: 'from-blue-500 to-blue-600' },
    { value: '8', label: t('progress.stats.frameworksMastered'), increase: '+2 this week', icon: Target, gradient: 'from-purple-500 to-purple-600' },
    { value: '47h', label: t('progress.stats.studyHours'), increase: '+12h this week', icon: Clock, gradient: 'from-green-500 to-green-600' },
    { value: '4', label: t('progress.stats.achievements'), increase: '+1 this week', icon: Award, gradient: 'from-orange-500 to-orange-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="glass-effect rounded-xl p-6 text-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text">{stat.value}</div>
            <div className="text-slate-600">{stat.label}</div>
            <div className="text-green-600 text-sm mt-1">{stat.increase}</div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProgressStats;