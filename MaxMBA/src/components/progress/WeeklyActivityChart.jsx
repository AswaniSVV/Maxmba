import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const WeeklyActivityChart = () => {
  const { t } = useLanguage();

  const weeklyData = [
    { day: 'Mon', hours: 2.5, cases: 1, frameworks: 0 },
    { day: 'Tue', hours: 3.0, cases: 2, frameworks: 1 },
    { day: 'Wed', hours: 1.5, cases: 1, frameworks: 0 },
    { day: 'Thu', hours: 4.0, cases: 2, frameworks: 2 },
    { day: 'Fri', hours: 2.0, cases: 1, frameworks: 1 },
    { day: 'Sat', hours: 3.5, cases: 3, frameworks: 1 },
    { day: 'Sun', hours: 2.5, cases: 2, frameworks: 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-effect rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold text-slate-800 mb-6">{t('progress.weeklyActivity.title')}</h3>
      <div className="space-y-4">
        {weeklyData.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 text-sm font-medium text-slate-600">{day.day}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-slate-600">{t('progress.weeklyActivity.studyHours')}</span>
                <span className="font-semibold">{day.hours}h</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(day.hours / 4) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-4 text-sm">
              <span className="text-purple-600">{day.cases} {t('progress.weeklyActivity.cases')}</span>
              <span className="text-green-600">{day.frameworks} {t('progress.weeklyActivity.frameworks')}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WeeklyActivityChart;