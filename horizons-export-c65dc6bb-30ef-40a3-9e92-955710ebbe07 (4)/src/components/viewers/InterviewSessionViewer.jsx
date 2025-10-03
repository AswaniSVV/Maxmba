import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { interviewSessionsData } from '@/lib/interviewSessionsData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Mic, User, BookOpen, AlertCircle, PlayCircle, Eye } from 'lucide-react';

const InterviewSessionViewer = ({ onProClick }) => {
  const { id } = useParams();
  const location = useLocation();
  const session = interviewSessionsData.find(s => s.id === parseInt(id));
  const isReviewMode = new URLSearchParams(location.search).get('review') === 'true';
  const [currentStep, setCurrentStep] = useState(0);

  if (!session) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Interview Session not found</h1>
        <Link to="/interview-prep">
          <Button className="mt-4">Back to Interview Prep</Button>
        </Link>
      </div>
    );
  }

  if (session.isPro) {
    onProClick();
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">This is a Pro Session</h1>
        <p className="text-slate-600 mb-4">Please upgrade to access.</p>
        <Link to="/interview-prep">
          <Button className="mt-4">Back to Interview Prep</Button>
        </Link>
      </div>
    );
  }

  const isCase = session.type === 'case';
  const script = isCase ? session.content.interviewerScript : session.content.questions.map(q => ({ speaker: 'Interviewer', text: q }));
  const totalSteps = script.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/interview-prep" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Interview Prep
        </Link>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{session.title}</h1>
            <p className="text-lg text-green-600 font-medium">{session.company}</p>
          </div>
        </div>
        {isReviewMode && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg mb-6">
            <div className="flex items-center">
              <Eye className="w-6 h-6 mr-3" />
              <div>
                <p className="font-bold">You are in Review Mode</p>
                <p>Check your score and feedback from the completed session.</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      
      {isReviewMode ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-effect p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">Session Review</h2>
            <div className="text-center">
                <p className="text-slate-600">Your Score</p>
                <p className="text-6xl font-bold text-green-600">{session.score}%</p>
            </div>
            <div className="bg-slate-100 p-4 rounded-md">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-blue-500" />
                    AI Feedback
                </h3>
                <p className="text-slate-700">{session.feedback}</p>
            </div>
            <Button className="w-full mt-4" onClick={() => window.location.search = ''}>
                <PlayCircle className="w-5 h-5 mr-2" /> Practice Again
            </Button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-effect p-6 rounded-lg min-h-[300px] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center mr-3">
                                <User className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="font-semibold text-slate-800">{script[currentStep].speaker}</h3>
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed">{script[currentStep].text}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500 mt-4">
                        Step {currentStep + 1} of {totalSteps}
                    </div>
                </motion.div>
                <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
                    <Button onClick={handleNext} disabled={currentStep === totalSteps - 1}>Next</Button>
                </div>
            </div>

            <div className="space-y-6">
                {isCase && session.content.exhibits && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-effect p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Exhibits
                        </h3>
                        <div className="space-y-2">
                        {session.content.exhibits.map((exhibit, index) => (
                            <Button key={index} variant="outline" className="w-full justify-start">{exhibit.title}</Button>
                        ))}
                        </div>
                    </motion.div>
                )}
                {session.completed && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Button className="w-full" onClick={() => window.location.search = 'review=true'}>
                            <Eye className="w-5 h-5 mr-2" /> View My Review
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default InterviewSessionViewer;