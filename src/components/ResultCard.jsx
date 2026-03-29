import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import MvaTable from './MvaTable';

export default function ResultCard({ item, selections, ncmSearch, cestSearch }) {
  const isST = item.com_fidelidade !== undefined;

  // Determine which MVA to highlight
  const getActiveMva = () => {
    if (!isST) return null;
    
    const group = selections.temFidelidade ? 'com' : 'sem';
    let type = 'interno';
    
    if (selections.ufEmitente !== 'PB') {
      if (selections.aliquotaNfe === '4') type = 'inter_4';
      else if (selections.aliquotaNfe === '7') type = 'inter_7';
      else if (selections.aliquotaNfe === '12') type = 'inter_12';
    }
    
    return { group, type };
  };

  const activeMva = getActiveMva();

  // Highlighting logic
  const highlightNcm = cestSearch.length > 0 && ncmSearch.length === 0;
  const highlightCest = ncmSearch.length > 0 && cestSearch.length === 0;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-all">
      <div className={`px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center justify-between ${isST ? 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400'}`}>
        <div className="flex gap-4">
          <span className={highlightNcm ? 'bg-yellow-200 dark:bg-yellow-900/50 text-slate-900 dark:text-yellow-200 px-1 rounded' : ''}>
            NCM: {item.ncm}
          </span>
          {item.cest && (
            <span className={highlightCest ? 'bg-yellow-200 dark:bg-yellow-900/50 text-slate-900 dark:text-yellow-200 px-1 rounded' : ''}>
              CEST: {item.cest}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {isST ? (
            <>
              <CheckCircle2 className="w-3 h-3" />
              <span>Sujeito à ST</span>
            </>
          ) : (
            <>
              <XCircle className="w-3 h-3" />
              <span>Não sujeito à ST</span>
            </>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-slate-800 dark:text-slate-200 font-medium leading-tight flex-1">
            {item.descricao}
          </h3>
          <div className="text-right shrink-0">
            <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">Alíquota PB</p>
            <p className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">{item.aliquota_interna_pb}%</p>
          </div>
        </div>

        {isST && (
          <div className="space-y-4">
            <MvaTable 
              comFidelidade={item.com_fidelidade} 
              semFidelidade={item.sem_fidelidade} 
              activeMva={activeMva}
            />
            <p className="text-[10px] text-slate-400 dark:text-slate-500 italic leading-relaxed">
              * Use MVA Interno quando o fornecedor é da Paraíba. Use MVA Interestadual conforme a alíquota de origem da NF-e de entrada (4%, 7% ou 12%).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
