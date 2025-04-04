
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-suraksha-gradient">
      <Header />
      <main className={cn("container mx-auto px-4 py-6", className)}>
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default Layout;
