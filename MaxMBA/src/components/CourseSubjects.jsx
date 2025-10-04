import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Library, TrendingUp, DollarSign, Megaphone, Settings, Users, Briefcase, Brain, Landmark, Scale, Cpu, Bot, HeartHandshake as Handshake, Ship, Target, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const subjectsData = [
  { id: 'economics-for-managers', title: 'Economics for Managers', icon: TrendingUp, color: 'blue' },
  { id: 'organizational-behavior', title: 'Organizational Behavior and Leadership', icon: Users, color: 'red' },
  { id: 'data-driven-decision-making', title: 'Data-Driven Decision Making', icon: Brain, color: 'purple' },
  { id: 'business-environment', title: 'Business Environment', icon: Landmark, color: 'green' },
  { id: 'accounting-for-managers', title: 'Accounting for Managers', icon: Scale, color: 'orange' },
  { id: 'human-resource-management', title: 'Human Resource Management', icon: UserCheck, color: 'indigo' },
  { id: 'managerial-communications', title: 'Managerial Communications', icon: Megaphone, color: 'teal' },
  { id: 'marketing-management', title: 'Marketing Management', icon: Target, color: 'pink' },
  { id: 'financial-management', title: 'Financial Management', icon: DollarSign, color: 'green' },
  { id: 'operations-management', title: 'Operations Management', icon: Settings, color: 'orange' },
  { id: 'operations-research', title: 'Operations Research', icon: Cpu, color: 'gray' },
  { id: 'international-business', title: 'International Business', icon: Ship, color: 'blue' },
  { id: 'developing-human-capital', title: 'Developing Human Capital', icon: Bot, color: 'purple' },
  { id: 'employee-and-labor-relations', title: 'IR: Employee and Labor Relations', icon: Handshake, color: 'red' },
  { id: 'performance-reward-welfare', title: 'Performance, Reward, and Welfare Management', icon: Briefcase, color: 'indigo' },
];

const CourseSubjects = () => {
  const getColorClasses = (color) => {
    const colorMap = {
      blue: { gradient: 'from-blue-500 to-blue-600', text: 'text-blue-700' },
      red: { gradient: 'from-red-500 to-red-600', text: 'text-red-700' },
      purple: { gradient: 'from-purple-500 to-purple-600', text: 'text-purple-700' },
      green: { gradient: 'from-green-500 to-green-600', text: 'text-green-700' },
      orange: { gradient: 'from-orange-500 to-orange-600', text: 'text-orange-700' },
      indigo: { gradient: 'from-indigo-500 to-indigo-600', text: 'text-indigo-700' },
      teal: { gradient: 'from-teal-500 to-teal-600', text: 'text-teal-700' },
      pink: { gradient: 'from-pink-500 to-pink-600', text: 'text-pink-700' },
      gray: { gradient: 'from-gray-500 to-gray-600', text: 'text-gray-700' },
    };
    return colorMap[color] || colorMap['blue'];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center">
          <Library className="w-10 h-10 mr-3" />
          Courseware
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Explore the fundamental building blocks of a world-class business education. Each subject offers a unique lens to understand and navigate the complexities of the modern economy.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjectsData.map((subject, index) => {
          const Icon = subject.icon;
          const colors = getColorClasses(subject.color);
          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="subject-card card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-xl font-bold ${colors.text}`}>{subject.title}</h2>
                </div>
              </div>
              
              <Link to={`/courseware/${subject.id}`} className="w-full mt-4">
                <Button className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90`}>
                  Explore Subject
                </Button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSubjects;