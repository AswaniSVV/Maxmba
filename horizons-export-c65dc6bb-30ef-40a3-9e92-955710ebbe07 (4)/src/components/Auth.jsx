import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Loader2 } from 'lucide-react';

const Auth = ({ isOpen, onOpenChange }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const authAction = isLoginView ? signIn : signUp;
    const { error } = await authAction(email, password);
    setLoading(false);

    if (!error) {
      toast({
        title: isLoginView ? 'Login Successful' : 'Signup Successful',
        description: isLoginView ? 'Welcome back!' : 'Please check your email to verify your account.',
      });
      onOpenChange(false);
      setEmail('');
      setPassword('');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader className="text-center mb-4">
            <DialogTitle className="text-2xl font-bold gradient-text">
              {isLoginView ? 'Welcome Back!' : 'Create an Account'}
            </DialogTitle>
            <DialogDescription>
              {isLoginView ? 'Sign in to continue your MBA journey.' : 'Join to start mastering business concepts.'}
            </DialogDescription>
          </DialogHeader>
          <AnimatePresence mode="wait">
            <motion.form
              key={isLoginView ? 'login' : 'signup'}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoginView ? 'Sign In' : 'Sign Up'}
              </Button>
            </motion.form>
          </AnimatePresence>
        </div>
        <div className="bg-slate-100 px-6 py-4 text-center text-sm">
          <p>
            {isLoginView ? "Don't have an account?" : 'Already have an account?'}
            <Button
              variant="link"
              className="font-semibold text-primary"
              onClick={() => setIsLoginView(!isLoginView)}
            >
              {isLoginView ? 'Sign Up' : 'Sign In'}
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Auth;