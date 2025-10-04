import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const SkillDevelopment = () => {
  const { t } = useLanguage();

  const skillProgress = [
    { skill: 'Strategic Thinking', current: 85, target: 90, color: 'blue' },
    { skill: 'Problem Solving', current: 78, target: 85, color: 'green' },
    { skill: 'Data Analysis', current: 72, target: 80, color: 'purple' },
    { skill: 'Communication', current: 88, target: 95, color: 'orange' },
    { skill: 'Leadership', current: 65, target: 75, color: 'red' },
    { skill: 'Financial Analysis', current: 70, target: 80, color: 'indigo' },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600',
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-effect rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold text-slate-800 mb-6">{t('progress.skillDev.title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillProgress.map((skill, index) => (
          <motion.div
            key={skill.skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="p-4 bg-white/50 rounded-lg border border-white/20"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-slate-800">{skill.skill}</span>
              <span className="text-sm text-slate-600">{skill.current}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
              <div
                className={`bg-gradient-to-r ${getColorClasses(skill.color)} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${skill.current}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500">{t('progress.skillDev.target')} {skill.target}%</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillDevelopment;