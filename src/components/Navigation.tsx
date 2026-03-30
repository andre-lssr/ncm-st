
import React from 'react';
import { Search, FileCode, FileText, ExternalLink, ClipboardList } from 'lucide-react';

interface NavigationProps {
  currentView: 'search' | 'xml' | 'sped';
  onViewChange: (view: 'search' | 'xml' | 'sped') => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const pdfLink = "https://www.sefaz.pb.gov.br/legislacao/99-regulamentos/anexos-icms/1519-anexo-05-relacao-de-mercadorias-para-efeito-de-substituicao-tributaria-e-respectivas-taxas-de-valor-agregado";

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 transition-colors">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-1 sm:gap-4 h-full">
          <NavItem 
            active={currentView === 'search'} 
            onClick={() => onViewChange('search')}
            icon={<Search className="w-4 h-4" />}
            label="Consulta NCM / CEST"
          />
          <NavItem 
            active={currentView === 'xml'} 
            onClick={() => onViewChange('xml')}
            icon={<FileCode className="w-4 h-4" />}
            label="Analisar XML"
          />
          <NavItem 
            active={currentView === 'sped'} 
            onClick={() => onViewChange('sped')}
            icon={<ClipboardList className="w-4 h-4" />}
            label="SPED Fiscal"
          />
        </div>
        
        <a 
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">PDF Anexo V</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </nav>
  );
}

function NavItem({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 h-full text-xs font-bold uppercase tracking-wider transition-all relative ${
        active 
          ? 'text-red-600 dark:text-red-400' 
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
      }`}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400" />
      )}
    </button>
  );
}
