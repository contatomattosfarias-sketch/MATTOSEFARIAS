import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // O Outlet é onde as páginas aparecem
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar';
import { useMobile } from '../../hooks/usemobile';

export default function Layout() {
  const isMobile = useMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar Controlada */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        isMobile={isMobile}
      />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col h-full w-full relative overflow-hidden">
        
        {/* Header Mobile (Menu Hamburguer) */}
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

        {/* Aqui é onde o Dashboard, Financeiro, etc. serão renderizados */}
        <main className="flex-1 overflow-auto p-4 md:p-8 scroll-smooth">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}