import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Info, Users, Target, Rocket } from 'lucide-react';

const teamMembers = [
  { name: 'Jayaprakash Sahu', role: 'Founder & CEO', imageContent: 'Portrait of Jayaprakash Sahu' },
  { name: 'Aswani Kumar', role: 'Co-Founder & CTO', imageContent: 'Portrait of Aswani Kumar' },
  { name: 'PM Balaji', role: 'Head of Content', imageContent: 'Portrait of PM Balaji' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - MaxMBA</title>
        <meta name="description" content="Learn about MaxMBA's vision, mission, and the team behind it." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4 flex items-center justify-center">
            <Info className="w-10 h-10 mr-3" />
            About MaxMBA
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Empowering the next generation of business leaders through accessible, high-quality education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-xl p-8"
          >
            <Target className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Our Vision</h2>
            <p className="text-slate-600">Make Students Successful.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-xl p-8"
          >
            <Rocket className="w-10 h-10 text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Our Mission</h2>
            <p className="text-slate-600">Enable students to improve their learning through quality curated content, facilitate practice case studies, and interview preparation.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8 flex items-center justify-center">
            <Users className="w-8 h-8 mr-3" />
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center card-hover"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-slate-200 overflow-hidden">
                  <img alt={member.imageContent} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-purple-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;