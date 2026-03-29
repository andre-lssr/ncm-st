import React from 'react';
import { Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-slate-200">
      <div className="flex items-start gap-3 text-slate-500 max-w-2xl mx-auto px-4">
        <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-slate-400" />
        <p className="text-sm leading-relaxed">
          Base: <span className="font-semibold">Anexo V do RICMS/PB</span> — Atualizado em 09/07/2025. 
          Esta ferramenta é para consulta rápida e uso interno. <span className="text-slate-700 font-medium">Consulte sempre a legislação vigente e o Diário Oficial para decisões fiscais.</span>
        </p>
      </div>
    </footer>
  );
}
