import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Library, TrendingUp, DollarSign, Megaphone, Settings, Users, Briefcase, ArrowRight } from 'lucide-react';

const coursewareSubjects = [
  { id: 'economics-for-managers', name: 'Economics for Managers', icon: Briefcase },
  { id: 'organizational-behavior', name: 'Organizational Behavior and Leadership', icon: Users },
  { id: 'data-driven-decision-making', name: 'Data-Driven Decision Making', icon: TrendingUp },
  { id: 'business-environment', name: 'Business Environment', icon: Library },
  { id: 'accounting-for-managers', name: 'Accounting for Managers', icon: DollarSign },
  { id: 'human-resource-management', name: 'Human Resource Management', icon: Users },
  { id: 'managerial-communications', name: 'Managerial Communications', icon: Megaphone },
  { id: 'marketing-management', name: 'Marketing Management', icon: Megaphone },
  { id: 'financial-management', name: 'Financial Management', icon: DollarSign },
  { id: 'operations-management', name: 'Operations Management', icon: Settings },
  { id: 'operations-research', name: 'Operations Research', icon: Settings },
  { id: 'international-business', name: 'International Business', icon: Briefcase },
  { id: 'developing-human-capital', name: 'Developing Human Capital', icon: Users },
  { id: 'employee-and-labor-relations', name: 'IR: Employee and Labor Relations', icon: Users },
  { id: 'performance-reward-management', name: 'Performance, Reward, and Welfare Management', icon: Users },
];

const Courseware = () => {
  return (
    <>
      <Helmet>
        <title>Courseware - MaxMBA</title>
        <meta name="description" content="Explore all MBA courseware subjects offered by MaxMBA." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center">
            <Library className="w-10 h-10 mr-3" />
            MBA Courseware
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Dive deep into the core subjects of business administration. Select a subject to begin your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursewareSubjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link to={`/courseware/${subject.id}`} className="block subject-card card-hover p-6 h-full">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Icon className="w-8 h-8 text-blue-600 mb-4" />
                      <h2 className="text-xl font-bold text-slate-800">{subject.name}</h2>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courseware;