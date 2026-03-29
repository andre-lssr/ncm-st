import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ ncmSearch, setNcmSearch, cestSearch, setCestSearch, descSearch, setDescSearch }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 mb-8 space-y-4 md:space-y-0 md:flex md:gap-4 transition-colors">
      <div className="flex-1 relative">
        <label htmlFor="ncm-search" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 ml-1">
          Buscar por NCM
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
          <input
            id="ncm-search"
            type="text"
            placeholder="Ex: 2208"
            value={ncmSearch}
            onChange={(e) => setNcmSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-700 dark:text-slate-200"
          />
        </div>
      </div>

      <div className="flex-1 relative">
        <label htmlFor="cest-search" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 ml-1">
          Buscar por CEST
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
          <input
            id="cest-search"
            type="text"
            placeholder="Ex: 02.001.00"
            value={cestSearch}
            onChange={(e) => setCestSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-700 dark:text-slate-200"
          />
        </div>
      </div>

      <div className="flex-[1.5] relative">
        <label htmlFor="desc-search" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 ml-1">
          Buscar por Descrição
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
          <input
            id="desc-search"
            type="text"
            placeholder="Ex: Cerveja, Catalisador..."
            value={descSearch}
            onChange={(e) => setDescSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-700 dark:text-slate-200"
          />
        </div>
      </div>
    </div>
  );
}
