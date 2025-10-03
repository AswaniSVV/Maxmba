import React from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Bot, Briefcase, Brain } from 'lucide-react';

const Sandbox = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'case';

  const handlePractice = (practiceType) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Starting a ${practiceType} session.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Sandbox - MaxMBA</title>
        <meta name="description" content="Practice case studies and interviews in the MaxMBA sandbox." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-4">
            <Bot className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            AI Sandbox
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Hone your skills in a risk-free environment. Practice with our AI-powered tools to prepare for real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`glass-effect rounded-xl p-8 border-2 ${mode === 'case' ? 'border-blue-500' : 'border-transparent'}`}
          >
            <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Practice Case Study</h2>
            <p className="text-slate-600 mb-6">Tackle a business case from start to finish with AI guidance.</p>
            <Button onClick={() => handlePractice('Case Study')} size="lg" className="w-full">Start Case Practice</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className={`glass-effect rounded-xl p-8 border-2 ${mode === 'interview' ? 'border-purple-500' : 'border-transparent'}`}
          >
            <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Practice Interview</h2>
            <p className="text-slate-600 mb-6">Simulate a behavioral or case interview and get instant feedback.</p>
            <Button onClick={() => handlePractice('Interview')} size="lg" variant="secondary" className="w-full bg-purple-100 text-purple-700 hover:bg-purple-200">Start Interview Practice</Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;