import React, { useState, useMemo, useEffect } from 'react';
import { anexoV } from './data/anexoV';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';
import FidelityModal from './components/FidelityModal';
import Navigation from './components/Navigation';
import XmlAnalysis from './views/XmlAnalysis';
import SpedAnalysis from './views/SpedAnalysis';
import ZipAnalysis from './views/ZipAnalysis';
import StVerification from './views/StVerification';
import { FileSearch, AlertCircle, Calculator, Sun, Moon, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [view, setView] = useState<'search' | 'xml' | 'sped' | 'zip' | 'st-batch'>('search');
  const [ncmSearch, setNcmSearch] = useState('');
  const [cestSearch, setCestSearch] = useState('');
  const [descSearch, setDescSearch] = useState('');
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') || 'dark';
      }
    } catch (e) {
      console.warn('LocalStorage not available for theme:', e);
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Calculator selections
  const [ufEmitente, setUfEmitente] = useState('PB');
  const [aliquotaNfe, setAliquotaNfe] = useState('12');
  const [temFidelidade, setTemFidelidade] = useState(false);
  const [showFidelityInfo, setShowFidelityInfo] = useState(false);

  const filteredResults = useMemo(() => {
    if (!ncmSearch && !descSearch && !cestSearch) return [];

    return anexoV.filter((item: any) => {
      const cleanSearch = ncmSearch.replace(/\D/g, '');
      const cleanItem = item.ncm.replace(/\D/g, '');
      const matchNcm = ncmSearch ? (cleanItem.startsWith(cleanSearch) || cleanSearch.startsWith(cleanItem)) : true;
      
      const cleanCestSearch = cestSearch.replace(/\D/g, '');
      const cleanCestItem = (item.cest || '').replace(/\D/g, '');
      const matchCest = cestSearch ? (cleanCestItem.startsWith(cleanCestSearch) || cleanCestSearch.startsWith(cleanCestItem)) : true;
      
      const matchDesc = descSearch ? item.descricao.toLowerCase().includes(descSearch.toLowerCase()) : true;
      return matchNcm && matchCest && matchDesc;
    });
  }, [ncmSearch, descSearch, cestSearch]);

  const hasSearch = ncmSearch.length > 0 || descSearch.length > 0 || cestSearch.length > 0;

  const selections = { ufEmitente, aliquotaNfe, temFidelidade };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 shadow-sm relative transition-colors border-b-2 border-red-600">
        <div className="max-w-5xl mx-auto relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-1.5 rounded-lg">
              <FileSearch className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Consulta NCM / ST Paraíba</h1>
              <p className="text-slate-400 text-[10px] hidden sm:block uppercase tracking-wider font-medium">
                Anexo V RICMS/PB • Substituição Tributária
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full">
              <span className="text-[10px] font-black text-red-600 tracking-tighter uppercase italic">Nego</span>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title="Alternar tema"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <Navigation currentView={view} onViewChange={setView} />

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 mt-8 pb-12">
        {view === 'xml' ? (
          <XmlAnalysis />
        ) : view === 'sped' ? (
          <SpedAnalysis />
        ) : view === 'zip' ? (
          <ZipAnalysis />
        ) : view === 'st-batch' ? (
          <StVerification />
        ) : (
          <div className="space-y-6">
            <SearchBar 
              ncmSearch={ncmSearch} 
              setNcmSearch={setNcmSearch} 
              cestSearch={cestSearch}
              setCestSearch={setCestSearch}
              descSearch={descSearch} 
              setDescSearch={setDescSearch} 
            />

            {/* Calculator Selectors */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 transition-colors">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <Calculator className="w-3 h-3" />
                  UF do Emitente
                </label>
                <div className="flex gap-2">
                  {['PB', 'Outra'].map((uf) => (
                    <button
                      key={uf}
                      onClick={() => setUfEmitente(uf)}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-all ${ufEmitente === uf ? 'bg-red-600 border-red-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-950/30'}`}
                    >
                      {uf === 'PB' ? 'Paraíba (PB)' : 'Outra UF'}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`space-y-2 transition-opacity ${ufEmitente === 'PB' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Alíquota Origem (NF-e)
                </label>
                <div className="flex gap-2">
                  {['4', '7', '12'].map((aliq) => (
                    <button
                      key={aliq}
                      onClick={() => setAliquotaNfe(aliq)}
                      className={`flex-1 py-2 px-2 rounded-lg text-sm font-medium border transition-all ${aliquotaNfe === aliq ? 'bg-red-600 border-red-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-950/30'}`}
                    >
                      {aliq}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Contrato de Fidelidade?
                  </label>
                  <button 
                    onClick={() => setShowFidelityInfo(true)}
                    className="flex items-center gap-1 text-[10px] font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors bg-red-50 dark:bg-red-950/30 px-2 py-0.5 rounded-full border border-red-100 dark:border-red-900/50"
                  >
                    <HelpCircle className="w-3 h-3" />
                    O que é isso?
                  </button>
                </div>
                <div className="flex gap-2">
                  {[true, false].map((val) => (
                    <button
                      key={val.toString()}
                      onClick={() => setTemFidelidade(val)}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-all ${temFidelidade === val ? 'bg-red-600 border-red-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-950/30'}`}
                    >
                      {val ? 'Sim' : 'Não'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {!hasSearch ? (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 transition-colors">
                  <FileSearch className="w-16 h-16 text-slate-200 dark:text-slate-800 mx-auto mb-4" />
                  <h2 className="text-xl font-medium text-slate-400 dark:text-slate-500">Digite um NCM, CEST ou descrição para começar</h2>
                  <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">A busca é realizada em tempo real sobre a base de dados do Anexo V.</p>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredResults.map((item, index) => (
                      <motion.div
                        key={`${item.ncm}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, delay: Math.min(index * 0.05, 0.5) }}
                      >
                        <ResultCard 
                          item={item} 
                          selections={selections} 
                          ncmSearch={ncmSearch}
                          cestSearch={cestSearch}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-8 rounded-2xl text-center"
                >
                  <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-2">NCM/CEST não encontrado no Anexo V</h2>
                  <p className="text-amber-700 dark:text-amber-500">
                    O produto consultado pode não estar sujeito à Substituição Tributária (ST) no Estado da Paraíba ou o código informado está incorreto.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <button 
                      onClick={() => { setNcmSearch(''); setDescSearch(''); setCestSearch(''); }}
                      className="text-amber-800 dark:text-amber-400 font-semibold hover:underline text-sm"
                    >
                      Limpar busca
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
      
      <FidelityModal 
        isOpen={showFidelityInfo} 
        onClose={() => setShowFidelityInfo(false)} 
      />
    </div>
  );
}
