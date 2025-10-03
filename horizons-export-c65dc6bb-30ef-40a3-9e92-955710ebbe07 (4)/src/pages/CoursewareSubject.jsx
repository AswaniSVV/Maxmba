import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Book, Presentation, HelpCircle, CheckSquare, ArrowLeft } from 'lucide-react';

const coursewareSubjects = [
  { id: 'economics-for-managers', name: 'Economics for Managers' },
  { id: 'organizational-behavior', name: 'Organizational Behavior and Leadership' },
  { id: 'data-driven-decision-making', name: 'Data-Driven Decision Making' },
  { id: 'business-environment', name: 'Business Environment' },
  { id: 'accounting-for-managers', name: 'Accounting for Managers' },
  { id: 'human-resource-management', name: 'Human Resource Management' },
  { id: 'managerial-communications', name: 'Managerial Communications' },
  { id: 'marketing-management', name: 'Marketing Management' },
  { id: 'financial-management', name: 'Financial Management' },
  { id: 'operations-management', name: 'Operations Management' },
  { id: 'operations-research', name: 'Operations Research' },
  { id: 'international-business', name: 'International Business' },
  { id: 'developing-human-capital', name: 'Developing Human Capital' },
  { id: 'employee-and-labor-relations', name: 'IR: Employee and Labor Relations' },
  { id: 'performance-reward-management', name: 'Performance, Reward, and Welfare Management' },
];

const CoursewareSubject = () => {
  const { subjectId } = useParams();
  const subject = coursewareSubjects.find(s => s.id === subjectId);

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `You clicked on ${feature} for ${subject.name}.`,
    });
  };

  if (!subject) {
    return <div className="text-center p-8">Subject not found.</div>;
  }

  const materials = [
    { name: 'Digital book', icon: Book },
    { name: 'Slides', icon: Presentation },
    { name: 'Q&As', icon: HelpCircle },
    { name: 'Assessment', icon: CheckSquare },
  ];

  return (
    <>
      <Helmet>
        <title>{subject.name} - MaxMBA</title>
        <meta name="description" content={`Learning materials for ${subject.name}.`} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/courseware" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Courseware
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">{subject.name}</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Access all learning materials for this subject.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div className="subject-card card-hover p-6 h-full text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-slate-800 mb-4">{material.name}</h2>
                  <Button onClick={() => handleFeatureClick(material.name)}>Open</Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoursewareSubject;