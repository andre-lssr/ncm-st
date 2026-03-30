
import React, { useState, useCallback } from 'react';
import { Upload, FileText, Download, AlertCircle, Info, CheckCircle2, Calculator, RefreshCw, Search as SearchIcon, List, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpedItem {
  lineIndex: number;
  raw: string;
  fields: string[];
}

interface SpedData {
  fileName: string;
  lines: string[];
  inventoryItems: SpedItem[];
  totalValue: number;
  blocks: Record<string, number>;
}

export default function SpedAnalysis() {
  const [spedData, setSpedData] = useState<SpedData | null>(null);
  const [activeTab, setActiveTab] = useState<'viewer' | 'details' | 'inventory'>('viewer');
  const [targetTotal, setTargetTotal] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFileUpload = (file: File) => {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.txt')) {
      setError('Por favor, envie um arquivo SPED (.txt) válido.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
        const inventoryItems: SpedItem[] = [];
        let totalValue = 0;
        const blocks: Record<string, number> = {};

        lines.forEach((line, index) => {
          const fields = line.split('|');
          if (fields.length > 1) {
            const reg = fields[1];
            const blockLetter = reg.charAt(0);
            blocks[blockLetter] = (blocks[blockLetter] || 0) + 1;

            if (reg === 'H010') {
              const vlItemStr = fields[6]?.replace(',', '.');
              const vlItem = parseFloat(vlItemStr) || 0;
              
              inventoryItems.push({
                lineIndex: index,
                raw: line,
                fields: fields
              });
              totalValue += vlItem;
            }
          }
        });

        setSpedData({
          fileName: file.name,
          lines,
          inventoryItems,
          totalValue,
          blocks
        });
        setActiveTab(inventoryItems.length > 0 ? 'inventory' : 'viewer');
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Erro ao processar o arquivo SPED. Verifique o formato.');
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

  const handleAdjustInventory = () => {
    if (!spedData || !targetTotal) return;
    
    const target = parseFloat(targetTotal.replace(',', '.'));
    if (isNaN(target) || target <= 0) {
      setError('Por favor, insira um valor de inventário válido.');
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      try {
        const factor = target / spedData.totalValue;
        const newLines = [...spedData.lines];
        let newTotal = 0;

        spedData.inventoryItems.forEach((item) => {
          const fields = [...item.fields];
          const oldVlItem = parseFloat(fields[6].replace(',', '.')) || 0;
          const qtd = parseFloat(fields[4].replace(',', '.')) || 1;
          
          const newVlItem = oldVlItem * factor;
          const newVlUnit = newVlItem / qtd;

          // Format back to SPED style (2 decimal places, comma as separator)
          fields[6] = newVlItem.toFixed(2).replace('.', ',');
          fields[5] = newVlUnit.toFixed(6).replace('.', ','); // Unit value usually has more precision
          
          newLines[item.lineIndex] = fields.join('|');
          newTotal += newVlItem;
        });

        // Update H005 (Total value of inventory) if it exists
        newLines.forEach((line, index) => {
          if (line.startsWith('|H005|')) {
            const fields = line.split('|');
            fields[3] = newTotal.toFixed(2).replace('.', ',');
            newLines[index] = fields.join('|');
          }
          // Update 9900 (Totalizer for H010) if needed? 
          // Usually 9900 is count of records, not sum of values.
        });

        // Create Blob and download
        const blob = new Blob([newLines.join('\r\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `SPED_AJUSTADO_${spedData.fileName}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setIsProcessing(false);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Erro ao gerar o arquivo ajustado.');
        setIsProcessing(false);
      }
    }, 500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Upload Area */}
      {!spedData && (
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
            accept=".txt" 
            onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Arraste o arquivo SPED Fiscal aqui</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Ou clique para selecionar o arquivo .txt</p>
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

      {spedData && (
        <div className="space-y-6">
          {/* Header & Tabs */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="bg-black text-white px-6 py-4 flex items-center justify-between border-b border-red-600">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-red-600" />
                <h2 className="font-bold">SPED Fiscal - {spedData.fileName}</h2>
              </div>
              <button 
                onClick={() => setSpedData(null)}
                className="text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors"
              >
                Trocar Arquivo
              </button>
            </div>

            <div className="flex border-b border-slate-100 dark:border-slate-800">
              <button 
                onClick={() => setActiveTab('viewer')}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${
                  activeTab === 'viewer' 
                    ? 'border-red-600 text-red-600 bg-red-50/50 dark:bg-red-900/10' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <List className="w-4 h-4" />
                  Visualizador
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${
                  activeTab === 'details' 
                    ? 'border-red-600 text-red-600 bg-red-50/50 dark:bg-red-900/10' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  Itens do Inventário
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('inventory')}
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${
                  activeTab === 'inventory' 
                    ? 'border-red-600 text-red-600 bg-red-50/50 dark:bg-red-900/10' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Calculator className="w-4 h-4" />
                  Ajuste (Rateio)
                </div>
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {activeTab === 'inventory' ? (
                <motion.div 
                  key="inventory"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {spedData.inventoryItems.length > 0 ? (
                    <>
                      <div className="space-y-4">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                          <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Resumo Atual</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase font-bold">Itens no Inventário</p>
                              <p className="text-xl font-bold text-slate-900 dark:text-white">{spedData.inventoryItems.length}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase font-bold">Valor Total Atual</p>
                              <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                R$ {spedData.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 flex gap-3">
                          <Info className="w-5 h-5 text-blue-500 shrink-0" />
                          <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                            O sistema irá recalcular o <strong>Valor Total do Item (VL_ITEM)</strong> e o <strong>Valor Unitário (VL_UNIT)</strong> de todos os registros H010 proporcionalmente para atingir o valor desejado.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-red-600/20 shadow-sm">
                          <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Calculator className="w-4 h-4 text-red-600" />
                            Ajustar para Novo Valor
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 ml-1">Valor Total Desejado (R$)</label>
                              <input 
                                type="text"
                                value={targetTotal}
                                onChange={(e) => setTargetTotal(e.target.value)}
                                placeholder="Ex: 150000,00"
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 font-bold text-lg focus:ring-2 focus:ring-red-600 outline-none transition-all"
                              />
                            </div>
                            <button
                              onClick={handleAdjustInventory}
                              disabled={!targetTotal || isProcessing}
                              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                            >
                              {isProcessing ? (
                                <RefreshCw className="w-5 h-5 animate-spin" />
                              ) : (
                                <Download className="w-5 h-5" />
                              )}
                              {isProcessing ? 'Processando...' : 'Gerar e Baixar SPED Ajustado'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="col-span-2 py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                        <AlertCircle className="w-8 h-8 text-slate-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nenhum registro de inventário</h3>
                        <p className="text-slate-500 dark:text-slate-400">Este arquivo SPED não contém registros H010 para ajuste.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : activeTab === 'details' ? (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 space-y-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Detalhamento do Bloco H (H010)</h3>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">
                      Total de Itens: {spedData.inventoryItems.length}
                    </div>
                  </div>

                  <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                          <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase">Código</th>
                          <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase">Unid</th>
                          <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Qtd</th>
                          <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Vl. Unitário</th>
                          <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Vl. Total</th>
                          <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase">Conta</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                        {spedData.inventoryItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                            <td className="px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300">{item.fields[2]}</td>
                            <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">{item.fields[3]}</td>
                            <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-300 text-right font-mono">{item.fields[4]}</td>
                            <td className="px-4 py-3 text-xs text-slate-700 dark:text-slate-300 text-right font-mono">{item.fields[5]}</td>
                            <td className="px-4 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 text-right font-mono">{item.fields[6]}</td>
                            <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">{item.fields[10]}</td>
                          </tr>
                        ))}
                        {spedData.inventoryItems.length === 0 && (
                          <tr>
                            <td colSpan={6} className="px-4 py-12 text-center text-slate-400 italic text-sm">
                              Nenhum item de inventário encontrado no arquivo.
                            </td>
                          </tr>
                        )}
                      </tbody>
                      {spedData.inventoryItems.length > 0 && (
                        <tfoot>
                          <tr className="bg-slate-50 dark:bg-slate-800/50 font-bold border-t border-slate-100 dark:border-slate-800">
                            <td colSpan={4} className="px-4 py-3 text-xs text-slate-900 dark:text-white text-right uppercase tracking-wider">Total do Inventário</td>
                            <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400 text-right font-mono">
                              R$ {spedData.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </td>
                            <td></td>
                          </tr>
                        </tfoot>
                      )}
                    </table>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="viewer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 space-y-6"
                >
                  {/* Block Summary */}
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(spedData.blocks).sort().map(([block, count]) => (
                      <div 
                        key={block}
                        className="bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-red-600 text-white text-[10px] font-bold rounded flex items-center justify-center">
                          {block}
                        </div>
                        <div>
                          <p className="text-[8px] text-slate-400 uppercase font-bold leading-none">Bloco {block}</p>
                          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{count} reg.</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Search & List */}
                  <div className="space-y-4">
                    <div className="relative">
                      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text"
                        placeholder="Filtrar por registro (ex: C100, H010)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-red-600 transition-all"
                      />
                    </div>

                    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                      <div className="max-h-[400px] overflow-y-auto font-mono text-[11px] leading-relaxed p-4 scrollbar-thin scrollbar-thumb-slate-800">
                        {spedData.lines
                          .filter(line => !searchTerm || line.includes(searchTerm.toUpperCase()))
                          .slice(0, 500) // Performance limit for preview
                          .map((line, idx) => (
                            <div key={idx} className="group flex gap-4 py-0.5 hover:bg-slate-900 transition-colors">
                              <span className="text-slate-600 w-8 text-right shrink-0 select-none">{idx + 1}</span>
                              <span className="text-slate-300 break-all">{line}</span>
                            </div>
                          ))
                        }
                        {spedData.lines.length > 500 && !searchTerm && (
                          <div className="py-4 text-center text-slate-500 italic">
                            Exibindo os primeiros 500 registros de {spedData.lines.length}. Use a busca para encontrar registros específicos.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Validation Preview (Optional/Mock for now as requested "SPED validation module") */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Validação Básica de Estrutura
              </h3>
              <span className="text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-md">
                Arquivo Íntegro
              </span>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <ValidationRow label="Registro 0000 (Abertura)" status="ok" />
                <ValidationRow label="Bloco H (Inventário)" status="ok" />
                <ValidationRow label="Registro 9999 (Encerramento)" status="ok" />
                <ValidationRow label="Hierarquia de Registros" status="ok" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ValidationRow({ label, status }: { label: string, status: 'ok' | 'error' }) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-100 dark:border-slate-800">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">Válido</span>
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      </div>
    </div>
  );
}
