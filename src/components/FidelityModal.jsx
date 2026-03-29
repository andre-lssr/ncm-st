import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, AlertTriangle, ScrollText } from 'lucide-react';

export default function FidelityModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-lg">
                    <Info className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Contrato de Fidelidade</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>
                  É um acordo formal entre o fabricante (ou importador) e o distribuidor/revendedor que estabelece uma relação contínua de fornecimento, normalmente com exclusividade ou vínculo comercial direto.
                </p>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    Na prática:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">→</span>
                      <span><strong>Com contrato:</strong> a empresa compra diretamente do fabricante ou como distribuidor autorizado. Aplica-se <strong>MVA menor</strong> no cálculo do ICMS-ST.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">→</span>
                      <span><strong>Sem contrato:</strong> compras de fornecedores diversos (sem vínculo direto). Aplica-se <strong>MVA maior</strong>.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-800 dark:text-amber-400 text-xs uppercase tracking-wider mb-1">Importante:</h4>
                    <p className="text-amber-700 dark:text-amber-500">
                      A existência do contrato deve ser comprovada documentalmente em caso de fiscalização. Na dúvida, utilize a opção <strong>"Não"</strong> (mais conservadora).
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    <ScrollText className="w-3 h-3" />
                    Base legal:
                  </h4>
                  <ul className="grid grid-cols-1 gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <li>• RICMS/PB – Anexo V (Substituição Tributária)</li>
                    <li>• Decreto nº 31.578/2010</li>
                    <li>• Portaria GSER nº 274/2017</li>
                  </ul>
                </div>
              </div>

              <button 
                onClick={onClose}
                className="w-full mt-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-600/20 active:scale-[0.98]"
              >
                Entendi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
