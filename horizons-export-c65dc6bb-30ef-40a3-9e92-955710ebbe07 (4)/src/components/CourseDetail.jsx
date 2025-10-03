import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subjectsData } from '@/components/CourseSubjects';
import { Book, Presentation, MessageSquare, CheckSquare, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const CourseDetail = () => {
  const { subjectId } = useParams();
  const subject = subjectsData.find(s => s.id === subjectId);
  const [activeTab, setActiveTab] = useState('book');
  const { toast } = useToast();

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Subject not found</h1>
        <Link to="/courseware">
          <Button className="mt-4">Back to Courseware</Button>
        </Link>
      </div>
    );
  }

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "PDF/Flipbook embedding is coming soon.",
    });
  };

  const tabs = [
    { id: 'book', label: 'Digital Book', icon: Book },
    { id: 'slides', label: 'Slides', icon: Presentation },
    { id: 'qna', label: 'Q&As', icon: MessageSquare },
    { id: 'assessment', label: 'Assessment', icon: CheckSquare },
  ];

  const renderContent = () => {
    const contentText = `This is the placeholder for the ${tabs.find(t=>t.id === activeTab).label} content. Real content with PDF/Flipbook embedding will be implemented here.`;
    return (
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-white rounded-lg shadow-inner min-h-[300px] flex flex-col items-center justify-center text-center border"
      >
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          {React.createElement(tabs.find(t=>t.id === activeTab).icon, { className: "w-8 h-8 text-slate-500" })}
        </div>
        <p className="text-slate-600 max-w-md">{contentText}</p>
        <Button onClick={handleFeatureClick} className="mt-6">Request PDF Embedding</Button>
      </motion.div>
    );
  };
  
  const Icon = subject.icon;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/courseware" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Courseware
        </Link>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800">{subject.title}</h1>
        </div>
      </motion.div>

      <div className="flex space-x-1 p-1 bg-slate-100 rounded-lg mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? 'bg-white text-slate-800 shadow' : 'text-slate-600 hover:bg-slate-200'
            } flex-1 flex items-center justify-center p-3 rounded-md text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
          >
            {React.createElement(tab.icon, { className: "w-4 h-4 mr-2"})}
            {tab.label}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default CourseDetail;