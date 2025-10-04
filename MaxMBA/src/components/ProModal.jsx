import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProModal = ({ isOpen, onOpenChange }) => {
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: 'Stripe Integration Needed',
      description: (
        <div>
          <p>To enable subscriptions, you need to set up Stripe.</p>
          <p>Please check out <a href="https://www.hostinger.com/support/hostinger-horizons-how-to-sell-subscriptions-with-stripe/" target="_blank" rel="noopener noreferrer" className="underline font-bold">this article</a> to learn how to sell subscriptions using Stripe.</p>
        </div>
      ),
    });
  };

  const proFeatures = [
    'Access to all advanced case studies',
    'Unlock premium strategic frameworks',
    'AI-powered interview feedback',
    'Personalized learning path recommendations',
    'Export your progress and reports',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader className="text-center mb-4">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold gradient-text">
              Unlock Your Full Potential
            </DialogTitle>
            <DialogDescription>
              Go Pro to access exclusive content and advanced features to accelerate your MBA journey.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 my-6">
            {proFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
          <Button onClick={handleSubscribe} className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:opacity-90">
            <Zap className="w-4 h-4 mr-2" />
            Subscribe Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;