import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import CourseSubjects from '@/components/CourseSubjects';
import CaseStudies from '@/components/CaseStudies';
import Frameworks from '@/components/Frameworks';
import InterviewPrep from '@/components/InterviewPrep';
import StudyProgress from '@/components/StudyProgress';
import Store from '@/pages/Store';
import ProductDetailPage from '@/pages/ProductDetailPage';
import SuccessPage from '@/pages/SuccessPage';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import Auth from '@/components/Auth';
import ProModal from '@/components/ProModal';
import CocreateModal from '@/components/CocreateModal';
import InviteModal from '@/components/InviteModal';
import ShoppingCart from '@/components/ShoppingCart';
import CourseDetail from '@/components/CourseDetail';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CaseStudyViewer from '@/components/viewers/CaseStudyViewer';
import FrameworkViewer from '@/components/viewers/FrameworkViewer';
import InterviewSessionViewer from '@/components/viewers/InterviewSessionViewer';

function App() {
  const location = useLocation();
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isCocreateModalOpen, setIsCocreateModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (!user) return;

    const logActivity = async () => {
      const activityData = {
        section_visited: location.pathname,
        user_id: user.id,
      };

      const { error } = await supabase
        .from('user_activity_log')
        .insert([activityData]);

      if (error) {
        console.error('Error logging user activity:', error.message);
      }
    };

    logActivity();
  }, [location.pathname, user]);

  return (
    <>
      <Helmet>
        <title>MaxMBA - Your Ultimate MBA Study Hub</title>
        <meta name="description" content="Comprehensive MBA study platform with case studies, business frameworks, and interview preparation materials for aspiring business leaders." />
        <meta property="og:title" content="MaxMBA - Your Ultimate MBA Study Hub" />
        <meta property="og:description" content="Comprehensive MBA study platform with case studies, business frameworks, and interview preparation materials for aspiring business leaders." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header 
          onAuthClick={() => setIsAuthModalOpen(true)}
          onProClick={() => setIsProModalOpen(true)}
          onCocreateClick={() => setIsCocreateModalOpen(true)}
          onInviteClick={() => setIsInviteModalOpen(true)}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courseware" element={<CourseSubjects />} />
                <Route path="/courseware/:subjectId" element={<CourseDetail />} />
                <Route path="/case-studies" element={<CaseStudies onProClick={() => setIsProModalOpen(true)} />} />
                <Route path="/case-studies/:id" element={<CaseStudyViewer onProClick={() => setIsProModalOpen(true)} />} />
                <Route path="/frameworks" element={<Frameworks onProClick={() => setIsProModalOpen(true)} />} />
                <Route path="/frameworks/:id" element={<FrameworkViewer onProClick={() => setIsProModalOpen(true)} />} />
                <Route path="/interview-prep" element={<InterviewPrep onProClick={() => setIsProModalOpen(true)} />} />
                <Route path="/interview-prep/:id" element={<InterviewSessionViewer onProClick={() => setIsProModalOpen(true)} />} />
                <Route path="/progress" element={<StudyProgress />} />
                <Route path="/store" element={<Store />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Auth isOpen={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
        <ProModal isOpen={isProModalOpen} onOpenChange={setIsProModalOpen} />
        <CocreateModal isOpen={isCocreateModalOpen} onOpenChange={setIsCocreateModalOpen} />
        <InviteModal isOpen={isInviteModalOpen} onOpenChange={setIsInviteModalOpen} />
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Toaster />
      </div>
    </>
  );
}

export default App;