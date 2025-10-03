import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { frameworksData } from '@/lib/frameworksData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ListChecks, HelpCircle, Check, PlayCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const FrameworkViewer = ({ onProClick }) => {
  const { id } = useParams();
  const location = useLocation();
  const framework = frameworksData.find(f => f.id === parseInt(id));
  const isPracticeMode = new URLSearchParams(location.search).get('practice') === 'true';
  const { toast } = useToast();

  if (!framework) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Framework not found</h1>
        <Link to="/frameworks">
          <Button className="mt-4">Back to Frameworks</Button>
        </Link>
      </div>
    );
  }

  if (framework.isPro) {
    onProClick();
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">This is a Pro Framework</h1>
        <p className="text-slate-600 mb-4">Please upgrade to access.</p>
        <Link to="/frameworks">
          <Button className="mt-4">Back to Frameworks</Button>
        </Link>
      </div>
    );
  }

  const handlePracticeSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Submission Received! 🎉",
      description: "Great job applying the framework. We'll have AI feedback ready soon!",
    });
  };

  const Icon = framework.icon;
  const color = framework.color || 'blue';
  const gradient = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
  }[color] || 'from-gray-500 to-gray-600';


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/frameworks" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Frameworks
        </Link>
        <div className="flex items-center space-x-4 mb-4">
          <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{framework.name}</h1>
            <p className="text-lg text-purple-600 font-medium capitalize">{framework.category} Framework</p>
          </div>
        </div>
        {isPracticeMode && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg mb-6">
            <div className="flex items-center">
              <PlayCircle className="w-6 h-6 mr-3" />
              <div>
                <p className="font-bold">You are in Practice Mode</p>
                <p>Apply the framework to the scenario below.</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">Summary</h2>
          <p className="text-slate-600 leading-relaxed">{framework.content.summary}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <ListChecks className="w-6 h-6 mr-2 text-blue-500" />
            Key Components
          </h2>
          <div className="space-y-4">
            {framework.content.components.map((c, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg text-slate-700">{c.name}</h3>
                <p className="text-slate-600">{c.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2 text-green-500" />
            How to Apply
          </h2>
          <p className="text-slate-600 leading-relaxed">{framework.content.applicationGuide}</p>
        </motion.div>

        {isPracticeMode ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">Practice Scenario</h2>
            <p className="text-blue-700 leading-relaxed mb-4">{framework.content.practiceScenario}</p>
            <form onSubmit={handlePracticeSubmit}>
              <textarea
                className="w-full p-3 border border-blue-200 rounded-lg min-h-[200px] focus:ring-2 focus:ring-blue-500"
                placeholder={`Apply the ${framework.name} framework here...`}
              ></textarea>
              <Button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700">Submit Analysis</Button>
            </form>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center pt-6">
              <div className="flex justify-center items-center space-x-4">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90">
                    <Check className="w-5 h-5 mr-2" /> Mark as Mastered
                </Button>
                <Link to={`/frameworks/${id}?practice=true`}>
                    <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700">
                        <PlayCircle className="w-5 h-5 mr-2" /> Go to Practice Mode
                    </Button>
                </Link>
              </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default FrameworkViewer;