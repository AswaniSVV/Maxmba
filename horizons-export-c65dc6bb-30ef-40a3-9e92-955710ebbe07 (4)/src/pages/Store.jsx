import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';
import { Store as StoreIcon } from 'lucide-react';

const Store = () => {
  return (
    <>
      <Helmet>
        <title>Store - MBA Study Hub</title>
        <meta name="description" content="Browse and purchase exclusive products from the MBA Study Hub store." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-4">
            <StoreIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">
            MBA Study Hub Store
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Exclusive guides, templates, and resources to accelerate your learning journey.
          </p>
        </motion.div>
        <ProductsList />
      </div>
    </>
  );
};

export default Store;