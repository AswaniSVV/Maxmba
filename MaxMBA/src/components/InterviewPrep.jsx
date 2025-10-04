import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Target, TrendingUp, Play, BookOpen, CheckCircle, AlertCircle, Sparkles, BrainCircuit, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { interviewSessionsData as interviewSessions } from '@/lib/interviewSessionsData';

const InterviewPrep = ({ onProClick }) => {
  const [selectedType, setSelectedType] = useState('all');
  const navigate = useNavigate();

  const interviewTypes = [
    { id: 'all', label: 'All Types', count: interviewSessions.length },
    { id: 'case', label: 'Case Interviews', count: interviewSessions.filter(s => s.type === 'case').length },
    { id: 'behavioral', label: 'Behavioral', count: interviewSessions.filter(s => s.type === 'behavioral').length },
    { id: 'technical', label: 'Technical', count: interviewSessions.filter(s => s.type === 'technical').length },
  ];

  const filteredSessions = interviewSessions.filter(session => 
    selectedType === 'all' || session.type === selectedType
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const handleStartSession = (session) => {
    if (session.isPro) {
      onProClick();
      return;
    }
    navigate(`/interview-prep/${session.id}`);
  };

  const handleReviewSession = (session) => {
    if (session.isPro) {
      onProClick();
      return;
    }
    navigate(`/interview-prep/${session.id}?review=true`);
  };

  const tips = [
    {
      category: 'Case Interviews',
      icon: BrainCircuit,
      tips: [
        'Always clarify the problem before diving into analysis',
        'Structure your approach using frameworks like MECE',
        'Think out loud and communicate your reasoning',
        'Practice mental math and quick calculations'
      ]
    },
    {
      category: 'Behavioral Interviews',
      icon: Users,
      tips: [
        'Use the STAR method (Situation, Task, Action, Result)',
        'Prepare specific examples for common questions',
        'Focus on your individual contributions',
        'Practice storytelling with clear outcomes'
      ]
    },
    {
      category: 'Technical Interviews',
      icon: Code,
      tips: [
        'Review fundamental concepts thoroughly',
        'Practice explaining complex topics simply',
        'Prepare for hands-on exercises',
        'Stay updated with industry trends'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center">
          <Users className="w-10 h-10 mr-3" />
          Interview Preparation
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Practice with realistic interview scenarios from top consulting firms and companies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold gradient-text">5</div>
          <div className="text-slate-600 text-sm">Sessions Completed</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold gradient-text">85%</div>
          <div className="text-slate-600 text-sm">Average Score</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold gradient-text">12h</div>
          <div className="text-slate-600 text-sm">Practice Time</div>
        </div>
        <div className="glass-effect rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold gradient-text">3</div>
          <div className="text-slate-600 text-sm">Skills Improved</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-xl p-6 mb-8"
      >
        <div className="flex flex-wrap gap-2">
          {interviewTypes.map((type) => (
            <Button
              key={type.id}
              variant={selectedType === type.id ? 'default' : 'outline'}
              onClick={() => setSelectedType(type.id)}
              className="text-sm"
            >
              {type.label} ({type.count})
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {filteredSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="interview-card card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-800">{session.title}</h3>
                      {session.isPro && <Sparkles className="w-4 h-4 text-yellow-500" />}
                      {session.completed && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-green-600 font-medium text-sm">{session.company}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(session.difficulty)}`}>
                    {session.difficulty}
                  </span>
                </div>

                <p className="text-slate-600 text-sm mb-4">{session.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {session.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {session.duration}
                  </div>
                  {session.completed && session.score && (
                    <div className={`font-semibold ${getScoreColor(session.score)}`}>
                      Score: {session.score}%
                    </div>
                  )}
                </div>

                {session.completed && session.feedback && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-blue-800 text-sm font-medium">Feedback:</p>
                        <p className="text-blue-700 text-sm">{session.feedback}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  {session.completed ? (
                    <Button
                      onClick={() => handleReviewSession(session)}
                      variant="outline"
                      className="flex-1 flex items-center justify-center space-x-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Review</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleStartSession(session)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    >
                      {session.isPro ? <Sparkles className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4" />}
                      <span>Start Session</span>
                    </Button>
                  )}
                  <Button
                    onClick={() => handleStartSession(session)}
                    variant="outline"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Target className="w-4 h-4" />
                    <span>Practice</span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">💡 Interview Tips</h3>
            <div className="space-y-4">
              {tips.map((tipCategory, index) => {
                const Icon = tipCategory.icon;
                return (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center"><Icon className="w-4 h-4 mr-2" />{tipCategory.category}</h4>
                  <ul className="space-y-1">
                    {tipCategory.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-slate-600 text-sm flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )})}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">📈 Progress Tracker</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Case Interview Skills</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Behavioral Questions</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Technical Knowledge</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;