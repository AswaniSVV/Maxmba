import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, TrendingUp, Clock, Award, Brain, Lightbulb, Library, Route, Store as StoreIcon, Briefcase, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Case Studies Completed', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Frameworks Mastered', value: '8', icon: Target, color: 'text-purple-600' },
    { label: 'Interview Sessions', value: '5', icon: Users, color: 'text-green-600' },
    { label: 'Study Hours', value: '47', icon: Clock, color: 'text-orange-600' }
  ];

  const quickActions = [
    { title: 'Explore Courseware', description: 'Learn core MBA concepts', icon: Library, action: () => navigate('/courseware'), gradient: 'from-indigo-500 to-indigo-600' },
    { title: 'Practice a Case', description: 'Dive into real business scenarios', icon: Briefcase, action: () => navigate('/case-studies'), gradient: 'from-blue-500 to-blue-600' },
    { title: 'Prep for Interview', description: 'Master interview techniques', icon: Brain, action: () => navigate('/interview-prep'), gradient: 'from-purple-500 to-purple-600' },
    { title: 'Enter Sandbox', description: 'Practice with AI', icon: Bot, action: () => navigate('/sandbox'), gradient: 'from-pink-500 to-pink-600' }
  ];

  const recentActivity = [
    { type: 'case', title: 'Netflix Market Expansion', time: '2 hours ago', icon: BookOpen },
    { type: 'framework', title: 'Porter\'s Five Forces', time: '1 day ago', icon: Target },
    { type: 'interview', title: 'McKinsey Style Case', time: '2 days ago', icon: Users },
    { type: 'achievement', title: 'Strategy Expert Badge', time: '3 days ago', icon: Award }
  ];

  const handleStartPath = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Personalized learning paths are coming soon!",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">Welcome Back, Future Leader! 🚀</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Continue your MBA journey with comprehensive case studies, strategic frameworks, and interview preparation.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-3xl font-bold gradient-text">{stat.value}</span>
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div key={action.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="glass-effect rounded-xl p-6 card-hover cursor-pointer" onClick={action.action}>
                <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{action.title}</h3>
                <p className="text-slate-600 text-sm">{action.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8 glass-effect rounded-xl p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
          <Route className="w-6 h-6 mr-2 text-blue-500" />
          Your Learning Path
        </h2>
        <p className="text-slate-600 mb-4">Based on your progress, here's a suggested path to become a well-rounded expert.</p>
        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div>
            <h3 className="font-semibold text-blue-800">Next Up: Advanced Market Entry Strategies</h3>
            <p className="text-sm text-blue-700">Focus on the "BCG Matrix" framework and the "Tesla Direct-to-Consumer" case study.</p>
          </div>
          <Button onClick={handleStartPath}>Start Path</Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-effect rounded-xl p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-500" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <Icon className="w-5 h-5 text-slate-500" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{activity.title}</p>
                    <p className="text-sm text-slate-500">{activity.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-effect rounded-xl p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-500" />
            Study Tips
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Case Study Approach</h4>
              <p className="text-blue-700 text-sm">Always start with the problem statement and work backwards to identify key issues.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Framework Application</h4>
              <p className="text-purple-700 text-sm">Practice applying multiple frameworks to the same problem for deeper insights.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Interview Success</h4>
              <p className="text-green-700 text-sm">Structure your thoughts clearly and communicate your reasoning process out loud.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;