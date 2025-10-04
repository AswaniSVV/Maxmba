import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Target } from 'lucide-react';

const About = () => {
  const team = [
    { name: 'Jayaprakash Sahu', role: 'Founder & CEO', imageAlt: 'Portrait of Jayaprakash Sahu', imageContent: 'Man smiling in a suit' },
    { name: 'Aswani Kumar', role: 'Chief Academic Officer', imageAlt: 'Portrait of Aswani Kumar', imageContent: 'Person with glasses in a library' },
    { name: 'PM Balaji', role: 'Chief Technology Officer', imageAlt: 'Portrait of PM Balaji', imageContent: 'Developer coding on a laptop' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-center text-4xl md:text-5xl font-extrabold gradient-text mb-12">About MaxMBA</h1>
      
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/50">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-blue-500" />
                Our Vision
              </h2>
              <p className="text-lg text-slate-600">
                To make every student successful by providing them with the tools and resources they need to excel.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/50">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                <Target className="w-8 h-8 mr-3 text-purple-500" />
                Our Mission
              </h2>
              <p className="text-lg text-slate-600">
                Enable students to improve their learning through quality curated content, facilitate practice case studies, and interview preparation.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center">
            <Users className="w-8 h-8 mr-3" />
            Meet the Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">The passionate minds dedicated to your success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={member.name} 
              className="card-hover text-center"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <div className="aspect-square w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img className="w-full h-full object-cover" alt={member.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
              <p className="text-slate-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;