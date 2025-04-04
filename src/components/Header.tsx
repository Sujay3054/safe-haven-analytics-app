
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Shield, MapPin, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const navItems = [
    { name: 'Dashboard', icon: <BarChart3 size={20} />, path: '/dashboard' },
    { name: 'Safe Map', icon: <MapPin size={20} />, path: '/map' },
    { name: 'Contacts', icon: <Users size={20} />, path: '/contacts' },
    { name: 'Alerts', icon: <Bell size={20} />, path: '/alerts' },
  ];

  return (
    <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-suraksha-purple" />
          <span className="text-xl font-bold bg-gradient-to-r from-suraksha-purple to-suraksha-blue bg-clip-text text-transparent">
            Suraksha
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.path 
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile bottom navigation */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t flex justify-around py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center px-3 py-1",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            About
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
