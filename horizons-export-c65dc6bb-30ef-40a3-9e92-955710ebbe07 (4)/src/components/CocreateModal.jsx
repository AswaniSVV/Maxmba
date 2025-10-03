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
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { MessageSquarePlus, Lightbulb, Bug, Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CocreateModal = ({ isOpen, onOpenChange }) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [feedbackType, setFeedbackType] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "You must be logged in to submit feedback.",
      });
      return;
    }
    if (!feedbackType || !message) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please select a feedback type and write a message.",
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from('feedback').insert({
      user_id: user.id,
      user_email: user.email,
      feedback_type: feedbackType,
      message: message,
    });
    setLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Could not submit your feedback. Please try again.",
      });
    } else {
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for helping us improve MBA Study Hub!",
      });
      setMessage('');
      setFeedbackType('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <MessageSquarePlus className="w-6 h-6 mr-2" />
            Cocreate & Engage
          </DialogTitle>
          <DialogDescription>
            Have an idea, a suggestion, or found a bug? Let us know!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <Label htmlFor="feedback-type">Feedback Type</Label>
            <Select onValueChange={setFeedbackType} value={feedbackType}>
              <SelectTrigger id="feedback-type">
                <SelectValue placeholder="Select a type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">
                  <div className="flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2" /> Idea / Suggestion
                  </div>
                </SelectItem>
                <SelectItem value="bug">
                  <div className="flex items-center">
                    <Bug className="w-4 h-4 mr-2" /> Bug Report
                  </div>
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us more..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Feedback
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CocreateModal;