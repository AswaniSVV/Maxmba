import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, BarChart3, Users, Target, TrendingUp, Library, LogOut, UserCircle, Sparkles, Gift, MessageSquarePlus, Languages, ShoppingCart, ChevronDown, FileText, BrainCircuit, Mic, Info, HeartHandshake as Handshake, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { useCart } from '@/hooks/useCart';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';

const NavItem = ({ to, children }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) =>
      `flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground hover:bg-muted'
      }`
    }
  >
    {children}
  </NavLink>
);

const DropdownNavItem = ({ label, icon: Icon, children }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
        <Icon className="w-4 h-4" />
        <span>{label}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
);

const Header = ({ onAuthClick, onProClick, onCocreateClick, onInviteClick, onCartClick }) => {
  const { user, signOut } = useAuth();
  const { t, i18n } = useTranslation();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">MaxMBA</h1>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            <NavItem to="/"><BarChart3 className="w-4 h-4" /><span>Dashboard</span></NavItem>
            
            <DropdownNavItem label="Courseware" icon={Library}>
              <DropdownMenuItem onClick={() => navigate('/courseware')}>All Subjects</DropdownMenuItem>
            </DropdownNavItem>
            
            <DropdownNavItem label="Case Study" icon={FileText}>
              <DropdownMenuItem onClick={() => navigate('/case-studies')}>Case Study Practice</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onProClick()}>Case Competitions</DropdownMenuItem>
            </DropdownNavItem>

            <NavItem to="/frameworks"><Target className="w-4 h-4" /><span>Frameworks</span></NavItem>

            <DropdownNavItem label="Interview Prep" icon={Mic}>
              <DropdownMenuItem onClick={() => navigate('/interview-prep')}>All Interview Prep</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/interview-prep')}>Case Interview</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/interview-prep')}>Behavioral Interview</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/interview-prep')}>Technical Interview</DropdownMenuItem>
            </DropdownNavItem>

            <NavItem to="/progress"><TrendingUp className="w-4 h-4" /><span>Progress</span></NavItem>

            <DropdownNavItem label="About MaxMBA" icon={Info}>
              <DropdownMenuItem onClick={() => navigate('/about')}>
                <Info className="mr-2 h-4 w-4" /><span>About Us, Vision & Mission</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onCocreateClick}>
                <Handshake className="mr-2 h-4 w-4" /><span>Co-create with us</span>
              </DropdownMenuItem>
               <DropdownMenuItem onClick={() => onProClick()}>
                <MessageCircle className="mr-2 h-4 w-4" /><span>Join the community</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/contact')}>
                <Mail className="mr-2 h-4 w-4" /><span>Contact us</span>
              </DropdownMenuItem>
            </DropdownNavItem>
          </nav>

          <div className="flex items-center space-x-2">
            <Button onClick={onCartClick} variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <Button onClick={onProClick} size="sm" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:opacity-90">
              <Sparkles className="w-4 h-4 mr-2" />
              Go Pro
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <UserCircle className="h-8 w-8 text-slate-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">My Account</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onInviteClick}>
                    <Gift className="mr-2 h-4 w-4" />
                    <span>Invite a Friend</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onAuthClick}>Login / Signup</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;