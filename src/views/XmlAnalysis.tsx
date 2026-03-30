
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, FileText, CheckCircle2, XCircle, AlertCircle, ChevronDown, ChevronUp, ArrowRight, Info } from 'lucide-react';
import { parseNfeXml, NfeData, NfeProduct } from '../utils/xmlParser';
import { anexoV } from '../data/anexoV';

export default function XmlAnalysis() {
  const [nfeData, setNfeData] = useState<NfeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (file: File) => {
    if (!file) return;
    if (file.type !== 'text/xml' && !file.name.endsWith('.xml')) {
      setError('Por favor, envie um arquivo XML válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const xmlString = e.target?.result as string;
        const data = parseNfeXml(xmlString);
        setNfeData(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Erro ao processar o XML. Verifique se o arquivo é uma NF-e válida.');
      }
    };
    reader.readAsText(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const findStItem = (ncm: string) => {
    if (!ncm) return null;
    const cleanNcm = ncm.replace(/\D/g, '');
    // Try exact match first, then prefix match
    return anexoV.find((item: any) => {
      const itemNcm = item.ncm.replace(/\D/g, '');
      return cleanNcm.startsWith(itemNcm) || itemNcm.startsWith(cleanNcm);
    });
  };

  const getMvaValue = (item: any, interstateRate: string, type: 'com' | 'sem') => {
    if (!item) return null;
    const mvaGroup = type === 'com' ? item.com_fidelidade : item.sem_fidelidade;
    
    if (nfeData?.issuerUf === 'PB') {
      return mvaGroup.interno;
    }
    
    const rate = interstateRate.replace(/\D/g, '');
    if (rate === '4') return mvaGroup.inter_4;
    if (rate === '7') return mvaGroup.inter_7;
    if (rate === '12') return mvaGroup.inter_12;
    
    return mvaGroup.interno; // Fallback
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Upload Area */}
      {!nfeData && (
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
            isDragging 
              ? 'border-red-600 bg-red-50 dark:bg-red-950/20' 
              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
          }`}
        >
          <input 
            type="file" 
            accept=".xml" 
            onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Arraste o XML da NF-e aqui</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Ou clique para selecionar o arquivo no seu computador</p>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 p-4 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {nfeData && (
        <div className="space-y-6">
          {/* NF-e Header Info */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="bg-black text-white px-6 py-4 flex items-center justify-between border-b border-red-600">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-red-600" />
                <h2 className="font-bold">Dados da NF-e nº {nfeData.number}</h2>
              </div>
              <button 
                onClick={() => setNfeData(null)}
                className="text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors"
              >
                Analisar outro XML
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoBlock label="Chave de Acesso" value={nfeData.key} className="lg:col-span-2" />
              <InfoBlock label="Data de Emissão" value={new Date(nfeData.emissionDate).toLocaleDateString('pt-BR')} />
              <InfoBlock label="UF Origem" value={nfeData.issuerUf} />
              <InfoBlock label="Emitente" value={nfeData.issuerName} className="lg:col-span-2" />
              <InfoBlock label="Destinatário" value={nfeData.recipientName} className="lg:col-span-2" />
            </div>
          </div>

          {/* Products List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Itens da Nota
              <span className="text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                {nfeData.products.length} itens
              </span>
            </h3>
            
            <div className="space-y-4">
              {nfeData.products.map((product, index) => {
                const stItem = findStItem(product.ncm);
                const isSt = !!stItem;
                const mvaCom = getMvaValue(stItem, nfeData.interstateRate, 'com');
                const mvaSem = getMvaValue(stItem, nfeData.interstateRate, 'sem');

                return (
                  <div 
                    key={index}
                    className={`bg-white dark:bg-slate-900 rounded-xl border transition-all overflow-hidden ${
                      isSt 
                        ? 'border-emerald-200 dark:border-emerald-900/50 shadow-sm' 
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className={`px-4 py-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest ${
                      isSt 
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' 
                        : 'bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400'
                    }`}>
                      <div className="flex gap-4">
                        <span>Item {product.itemNumber}</span>
                        <span>NCM: {product.ncm}</span>
                        {product.cest && <span>CEST XML: {product.cest}</span>}
                      </div>
                      <div className="flex items-center gap-1">
                        {isSt ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" />
                            <span>ST na Paraíba</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" />
                            <span>Não localizado no Anexo V</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-slate-900 dark:text-white font-medium leading-tight">
                            {product.description}
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            <span>CFOP: {product.cfop}</span>
                            <span>CST/CSOSN: {product.cst}</span>
                            <span>Qtd: {product.quantity}</span>
                            <span>V. Unit: R$ {product.unitValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                            <span className="font-bold text-slate-700 dark:text-slate-300">Total: R$ {product.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                          </div>
                        </div>

                        {isSt && (
                          <div className="flex flex-wrap md:flex-nowrap gap-4 items-center bg-emerald-50/50 dark:bg-emerald-950/10 p-3 rounded-lg border border-emerald-100/50 dark:border-emerald-900/20">
                            <FiscalInfo label="CEST" value={(stItem as any).cest || 'N/A'} />
                            <FiscalInfo label="MVA Com Fidelidade" value={`${mvaCom?.toFixed(2).replace('.', ',')}%`} highlight />
                            <FiscalInfo label="MVA Sem Fidelidade" value={`${mvaSem?.toFixed(2).replace('.', ',')}%`} highlight />
                            <FiscalInfo label="Alíquota PB" value={`${stItem.aliquota_interna_pb}%`} />
                          </div>
                        )}
                      </div>
                      
                      {!isSt && product.ncm && (
                        <div className="mt-3 flex items-center gap-2 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-lg border border-amber-100 dark:border-amber-900/30">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>Este NCM não foi encontrado na base do Anexo V. Verifique se o produto é tributado integralmente ou se o NCM está correto.</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoBlock({ label, value, className = "" }: { label: string, value: string, className?: string }) {
  return (
    <div className={className}>
      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-medium text-slate-700 dark:text-slate-200 break-all">{value || '---'}</p>
    </div>
  );
}

function FiscalInfo({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="text-center min-w-[80px]">
      <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter mb-0.5">{label}</p>
      <p className={`text-xs font-mono font-bold ${highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
        {value}
      </p>
    </div>
  );
}
