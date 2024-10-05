// src/components/Layout/Layout.tsx
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row  min-h-screen">
      <Header />
      <main className="flex-grow p-4 md:p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;