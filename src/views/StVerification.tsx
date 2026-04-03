
import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, XCircle, AlertCircle, Download, Search, RefreshCw, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { anexoV } from '../data/anexoV';

interface VerificationResult {
  ncm: string;
  isSt: boolean;
  details?: any;
  originalLine: string;
}

export default function StVerification() {
  const [results, setResults] = useState<VerificationResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    setIsProcessing(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const lines = content.split(/\r?\n/).filter(line => line.trim().length > 0);
      
      const verificationResults = lines.map(line => {
        // Extract NCM from line (assuming it's the first 8 digits or separated by space/tab)
        const ncmMatch = line.match(/\d{8}/);
        const ncm = ncmMatch ? ncmMatch[0] : line.trim().replace(/\D/g, '').substring(0, 8);
        
        if (ncm.length < 4) {
          return { ncm: line.trim(), isSt: false, originalLine: line };
        }

        // Search in anexoV
        const stInfo = anexoV.find(item => {
          const cleanNcm = item.ncm.replace(/\D/g, '');
          return ncm.startsWith(cleanNcm) || cleanNcm.startsWith(ncm);
        });

        return {
          ncm,
          isSt: !!stInfo,
          details: stInfo,
          originalLine: line
        };
      });

      setResults(verificationResults);
      setIsProcessing(false);
    };

    reader.readAsText(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'text/plain') {
      processFile(file);
    }
  };

  const handleDownload = () => {
    const header = "NCM;Status;Descricao;CEST;MVA\n";
    const content = results.map(r => {
      const status = r.isSt ? "SUJEITO A ST" : "NAO SUJEITO";
      const desc = r.details?.descricao?.replace(/;/g, ',') || "";
      const cest = r.details?.cest || "";
      const mva = r.details?.mva_7_12 || "";
      return `${r.ncm};${status};${desc};${cest};${mva}`;
    }).join("\n");

    const blob = new Blob([header + content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "verificacao_st_pb.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredResults = results.filter(r => 
    r.ncm.includes(searchTerm) || 
    r.originalLine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.details?.descricao?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const stCount = results.filter(r => r.isSt).length;
  const nonStCount = results.length - stCount;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20">
            <Layers className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Verificação ST por Lote</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Submeta uma lista de NCMs para conferência automática no Anexo V/PB</p>
          </div>
        </div>

        {results.length > 0 && (
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setResults([])}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-200 transition-all"
            >
              Limpar
            </button>
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
            >
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>
        )}
      </div>

      {results.length === 0 ? (
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`relative border-2 border-dashed rounded-2xl p-16 text-center transition-all ${
            isDragging 
              ? 'border-red-600 bg-red-50 dark:bg-red-950/20' 
              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
          }`}
        >
          <input 
            type="file" 
            accept=".txt" 
            ref={fileInputRef}
            onChange={(e) => e.target.files && processFile(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-6">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto">
              {isProcessing ? (
                <RefreshCw className="w-10 h-10 text-red-600 dark:text-red-400 animate-spin" />
              ) : (
                <Upload className="w-10 h-10 text-red-600 dark:text-red-400" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isProcessing ? 'Processando lista...' : 'Arraste seu arquivo .txt aqui'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
                O arquivo deve conter um NCM por linha. O sistema irá verificar cada código contra a base do Anexo V da Paraíba.
              </p>
            </div>
            {!isProcessing && (
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-red-700 transition-all">
                Selecionar Arquivo
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Processado</p>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{results.length} NCMs</h4>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 shadow-sm">
              <p className="text-xs font-bold text-emerald-600 uppercase mb-1">Sujeitos à ST</p>
              <h4 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{stCount}</h4>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <p className="text-xs font-bold text-slate-500 uppercase mb-1">Não Sujeitos</p>
              <h4 className="text-2xl font-bold text-slate-600 dark:text-slate-400">{nonStCount}</h4>
            </div>
          </div>

          {/* Results List */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-red-600" />
                Resultados da Verificação
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Filtrar resultados..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2 text-xs outline-none focus:ring-2 focus:ring-red-600 transition-all w-64"
                />
              </div>
            </div>
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">NCM</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Status ST</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Descrição / Detalhes</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">MVA (7/12%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {filteredResults.map((result, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm font-bold text-slate-900 dark:text-white">
                        {result.ncm}
                      </td>
                      <td className="px-6 py-4">
                        {result.isSt ? (
                          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Sujeito
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase">
                            <XCircle className="w-3.5 h-3.5" />
                            Não Sujeito
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {result.isSt ? (
                          <div>
                            <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-1">{result.details.descricao}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">CEST: {result.details.cest}</p>
                          </div>
                        ) : (
                          <p className="text-xs text-slate-400 italic">Nenhum registro correspondente no Anexo V</p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {result.isSt ? (
                          <span className="text-xs font-bold text-slate-900 dark:text-white">{result.details.mva_7_12}%</span>
                        ) : (
                          <span className="text-slate-300">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
