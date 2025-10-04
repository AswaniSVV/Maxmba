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
import { useToast } from '@/components/ui/use-toast';
import { Gift, Copy, Mail, Share2 } from 'lucide-react';

const InviteModal = ({ isOpen, onOpenChange }) => {
  const { toast } = useToast();
  const referralLink = "https://mbahub.com/invite?ref=123XYZ";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Copied to Clipboard!",
      description: "You can now share your referral link.",
    });
  };

  const handleShare = (platform) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Sharing to ${platform} is coming soon!`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Gift className="w-6 h-6 mr-2 text-purple-500" />
            Invite a Friend
          </DialogTitle>
          <DialogDescription>
            Share the knowledge! Invite friends to join the MBA Study Hub.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4 space-y-4">
          <p className="text-sm text-slate-600">Share your unique referral link:</p>
          <div className="flex items-center space-x-2">
            <Input value={referralLink} readOnly />
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="outline" onClick={() => handleShare('Email')}>
              <Mail className="w-4 h-4 mr-2" /> Email
            </Button>
            <Button variant="outline" onClick={() => handleShare('Social Media')}>
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;