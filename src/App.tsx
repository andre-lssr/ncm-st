import React, { useState, useMemo } from 'react';
import { anexoV } from './data/anexoV';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';
import { FileSearch, AlertCircle, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [ncmSearch, setNcmSearch] = useState('');
  const [descSearch, setDescSearch] = useState('');
  
  // Calculator selections
  const [ufEmitente, setUfEmitente] = useState('PB');
  const [aliquotaNfe, setAliquotaNfe] = useState('12');
  const [temFidelidade, setTemFidelidade] = useState(false);

  const filteredResults = useMemo(() => {
    if (!ncmSearch && !descSearch) return [];

    return anexoV.filter((item) => {
      const matchNcm = ncmSearch ? item.ncm.replace(/\D/g, '').startsWith(ncmSearch.replace(/\D/g, '')) : true;
      const matchDesc = descSearch ? item.descricao.toLowerCase().includes(descSearch.toLowerCase()) : true;
      return matchNcm && matchDesc;
    });
  }, [ncmSearch, descSearch]);

  const hasSearch = ncmSearch.length > 0 || descSearch.length > 0;

  const selections = { ufEmitente, aliquotaNfe, temFidelidade };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Header */}
      <header className="bg-emerald-700 text-white py-10 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <FileSearch className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Consulta NCM / ST Paraíba</h1>
          </div>
          <p className="text-emerald-100 max-w-2xl text-lg">
            Consulte a incidência de Substituição Tributária e identifique a MVA correta conforme o Anexo V do RICMS/PB.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 -mt-8 pb-12">
        <div className="space-y-6">
          <SearchBar 
            ncmSearch={ncmSearch} 
            setNcmSearch={setNcmSearch} 
            descSearch={descSearch} 
            setDescSearch={setDescSearch} 
          />

          {/* Calculator Selectors */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <Calculator className="w-3 h-3" />
                UF do Emitente
              </label>
              <div className="flex gap-2">
                {['PB', 'Outra'].map((uf) => (
                  <button
                    key={uf}
                    onClick={() => setUfEmitente(uf)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-all ${ufEmitente === uf ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50'}`}
                  >
                    {uf === 'PB' ? 'Paraíba (PB)' : 'Outra UF'}
                  </button>
                ))}
              </div>
            </div>

            <div className={`space-y-2 transition-opacity ${ufEmitente === 'PB' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Alíquota Origem (NF-e)
              </label>
              <div className="flex gap-2">
                {['4', '7', '12'].map((aliq) => (
                  <button
                    key={aliq}
                    onClick={() => setAliquotaNfe(aliq)}
                    className={`flex-1 py-2 px-2 rounded-lg text-sm font-medium border transition-all ${aliquotaNfe === aliq ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50'}`}
                  >
                    {aliq}%
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Contrato de Fidelidade?
              </label>
              <div className="flex gap-2">
                {[true, false].map((val) => (
                  <button
                    key={val.toString()}
                    onClick={() => setTemFidelidade(val)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-all ${temFidelidade === val ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-200 hover:bg-emerald-50'}`}
                  >
                    {val ? 'Sim' : 'Não'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {!hasSearch ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <FileSearch className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-slate-400">Digite um NCM ou descrição para começar</h2>
                <p className="text-slate-400 text-sm mt-1">A busca é realizada em tempo real sobre a base de dados do Anexo V.</p>
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
                      <ResultCard item={item} selections={selections} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-amber-50 border border-amber-200 p-8 rounded-2xl text-center"
              >
                <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-amber-800 mb-2">NCM não encontrado no Anexo V</h2>
                <p className="text-amber-700">
                  O produto consultado pode não estar sujeito à Substituição Tributária (ST) no Estado da Paraíba ou o NCM informado está incorreto.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <button 
                    onClick={() => { setNcmSearch(''); setDescSearch(''); }}
                    className="text-amber-800 font-semibold hover:underline text-sm"
                  >
                    Limpar busca
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
