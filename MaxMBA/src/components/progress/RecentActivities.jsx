import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const RecentActivities = () => {
  const { t } = useLanguage();

  const recentActivities = [
    { type: 'case', title: 'Completed "Netflix Global Expansion"', time: '2 hours ago', score: 87, icon: BookOpen },
    { type: 'framework', title: 'Mastered Porter\'s Five Forces', time: '1 day ago', score: 95, icon: Target },
    { type: 'interview', title: 'Practiced McKinsey Case Interview', time: '2 days ago', score: 82, icon: Users },
    { type: 'achievement', title: 'Earned "Framework Expert" badge', time: '3 days ago', score: null, icon: Award }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-effect rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('progress.recentActivities.title')}</h3>
      <div className="space-y-3">
        {recentActivities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Icon className="w-5 h-5 text-slate-500 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-slate-800 text-sm">{activity.title}</p>
                <p className="text-slate-500 text-xs">{activity.time}</p>
                {activity.score && (
                  <p className="text-blue-600 text-xs font-medium">{t('progress.recentActivities.score')} {activity.score}%</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
</motion.div>
  );
};

export default RecentActivities;