import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Award, Target, BookOpen, Users, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const StudyProgress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Case Study Master',
      description: 'Completed 10 case studies',
      icon: BookOpen,
      earned: true,
      date: '2024-01-15',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Framework Expert',
      description: 'Mastered 5 strategic frameworks',
      icon: Target,
      earned: true,
      date: '2024-01-10',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Interview Ace',
      description: 'Scored 90+ on 3 interview sessions',
      icon: Users,
      earned: false,
      date: null,
      color: 'green'
    },
    {
      id: 4,
      title: 'Consistent Learner',
      description: 'Studied for 7 consecutive days',
      icon: Calendar,
      earned: true,
      date: '2024-01-08',
      color: 'orange'
    },
    {
      id: 5,
      title: 'Speed Demon',
      description: 'Completed a case in under 30 minutes',
      icon: Clock,
      earned: false,
      date: null,
      color: 'red'
    },
    {
      id: 6,
      title: 'Perfect Score',
      description: 'Achieved 100% on any assessment',
      icon: Star,
      earned: false,
      date: null,
      color: 'yellow'
    }
  ];

  const weeklyData = [
    { day: 'Mon', hours: 2.5, cases: 1, frameworks: 0 },
    { day: 'Tue', hours: 3.0, cases: 2, frameworks: 1 },
    { day: 'Wed', hours: 1.5, cases: 1, frameworks: 0 },
    { day: 'Thu', hours: 4.0, cases: 2, frameworks: 2 },
    { day: 'Fri', hours: 2.0, cases: 1, frameworks: 1 },
    { day: 'Sat', hours: 3.5, cases: 3, frameworks: 1 },
    { day: 'Sun', hours: 2.5, cases: 2, frameworks: 0 },
  ];

  const skillProgress = [
    { skill: 'Strategic Thinking', current: 85, target: 90, color: 'blue' },
    { skill: 'Problem Solving', current: 78, target: 85, color: 'green' },
    { skill: 'Data Analysis', current: 72, target: 80, color: 'purple' },
    { skill: 'Communication', current: 88, target: 95, color: 'orange' },
    { skill: 'Leadership', current: 65, target: 75, color: 'red' },
    { skill: 'Financial Analysis', current: 70, target: 80, color: 'indigo' },
  ];

  const recentActivities = [
    {
      type: 'case',
      title: 'Completed "Netflix Global Expansion"',
      time: '2 hours ago',
      score: 87,
      icon: BookOpen
    },
    {
      type: 'framework',
      title: 'Mastered Porter\'s Five Forces',
      time: '1 day ago',
      score: 95,
      icon: Target
    },
    {
      type: 'interview',
      title: 'Practiced McKinsey Case Interview',
      time: '2 days ago',
      score: 82,
      icon: Users
    },
    {
      type: 'achievement',
      title: 'Earned "Framework Expert" badge',
      time: '3 days ago',
      score: null,
      icon: Award
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      yellow: 'from-yellow-500 to-yellow-600',
      indigo: 'from-indigo-500 to-indigo-600',
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  const handleExportProgress = () => {
    toast({
      title: "🚧 Progress export isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Export functionality coming soon!",
    });
  };

  const handleSetGoal = () => {
    toast({
      title: "🚧 Goal setting isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Goal management coming soon!",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center">
              <TrendingUp className="w-10 h-10 mr-3" />
              Study Progress
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Track your learning journey and celebrate your achievements in MBA preparation.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleSetGoal} variant="outline">
              Set Goals
            </Button>
            <Button onClick={handleExportProgress}>
              Export Progress
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Period Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <div className="flex space-x-2">
          {periods.map((period) => (
            <Button
              key={period.id}
              variant={selectedPeriod === period.id ? 'default' : 'outline'}
              onClick={() => setSelectedPeriod(period.id)}
              size="sm"
            >
              {period.label}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text">12</div>
          <div className="text-slate-600">Cases Completed</div>
          <div className="text-green-600 text-sm mt-1">+3 this week</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text">8</div>
          <div className="text-slate-600">Frameworks Mastered</div>
          <div className="text-green-600 text-sm mt-1">+2 this week</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text">47h</div>
          <div className="text-slate-600">Study Hours</div>
          <div className="text-green-600 text-sm mt-1">+12h this week</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold gradient-text">4</div>
          <div className="text-slate-600">Achievements</div>
          <div className="text-green-600 text-sm mt-1">+1 this week</div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Activity Chart */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Weekly Activity</h3>
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
                      <span className="text-sm text-slate-600">Study Hours:</span>
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
                    <span className="text-purple-600">{day.cases} cases</span>
                    <span className="text-green-600">{day.frameworks} frameworks</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Skill Development</h3>
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
                  <div className="text-xs text-slate-500">Target: {skill.target}%</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200' 
                        : 'bg-slate-50 border border-slate-200 opacity-60'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      achievement.earned 
                        ? `bg-gradient-to-r ${getColorClasses(achievement.color)}` 
                        : 'bg-slate-300'
                    }`}>
                      <Icon className={`w-4 h-4 ${achievement.earned ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium text-sm ${achievement.earned ? 'text-slate-800' : 'text-slate-500'}`}>
                        {achievement.title}
                      </div>
                      <div className={`text-xs ${achievement.earned ? 'text-slate-600' : 'text-slate-400'}`}>
                        {achievement.description}
                      </div>
                      {achievement.earned && achievement.date && (
                        <div className="text-xs text-yellow-600 mt-1">
                          Earned {new Date(achievement.date).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Recent Activities</h3>
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
                        <p className="text-blue-600 text-xs font-medium">Score: {activity.score}%</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudyProgress;