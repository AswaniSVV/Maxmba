import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudiesData } from '@/lib/caseStudiesData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BookOpen, HelpCircle, BarChart2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CaseStudyViewer = ({ onProClick }) => {
  const { id } = useParams();
  const caseStudy = caseStudiesData.find(cs => cs.id === parseInt(id));
  const { toast } = useToast();

  if (!caseStudy) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Case Study not found</h1>
        <Link to="/case-studies">
          <Button className="mt-4">Back to Case Studies</Button>
        </Link>
      </div>
    );
  }

  if (caseStudy.isPro) {
    onProClick();
    return (
        <div className="text-center py-20">
            <h1 className="text-2xl font-bold">This is a Pro Case Study</h1>
            <p className="text-slate-600 mb-4">Please upgrade to access.</p>
            <Link to="/case-studies">
                <Button className="mt-4">Back to Case Studies</Button>
            </Link>
        </div>
    );
  }

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Interactive charts and exhibits are coming soon.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/case-studies" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Case Studies
        </Link>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{caseStudy.title}</h1>
            <p className="text-lg text-purple-600 font-medium">{caseStudy.company}</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">Introduction</h2>
          <p className="text-slate-600 leading-relaxed">{caseStudy.content.introduction}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">Problem Statement</h2>
          <p className="text-red-700 leading-relaxed">{caseStudy.content.problemStatement}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2 text-blue-500" />
            Key Questions
          </h2>
          <ul className="space-y-4">
            {caseStudy.content.questions.map((q, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">{index + 1}</span>
                <p className="text-slate-700">{q}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
            <BarChart2 className="w-6 h-6 mr-2 text-green-500" />
            Exhibits
          </h2>
          <div className="space-y-4">
            {caseStudy.content.exhibits.map((exhibit, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-md border flex items-center justify-between">
                <p className="font-medium text-slate-700">{exhibit.title}</p>
                <Button variant="outline" size="sm" onClick={handleFeatureClick}>View {exhibit.type}</Button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center pt-6">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90">Mark as Complete</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyViewer;