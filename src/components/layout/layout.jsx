import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar'; // Ajuste se o seu arquivo for Sidebar.jsx (maiúsculo)
import { useMobile } from '../../hooks/usemobile';

export default function Layout() {
  const isMobile = useMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        isMobile={isMobile}
      />

      {/* CORREÇÃO AQUI: Adicionei 'md:pl-64' para empurrar o conteúdo no Desktop */}
      <div className="flex-1 flex flex-col h-full w-full relative overflow-hidden md:pl-64 transition-all duration-300">
        
        {isMobile && (
          <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between flex-shrink-0">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <span className="font-bold text-slate-800">Mattos & Farias</span>
            <div className="w-8" />
          </header>
        )}

        <main className="flex-1 overflow-auto p-4 md:p-8 scroll-smooth">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
