import React from 'react';

export default function MvaTable({ comFidelidade, semFidelidade, activeMva }) {
  const renderValue = (val) => (val !== null ? `${val.toFixed(2).replace('.', ',')}%` : 'N/A');

  const isHighlighted = (group, type) => {
    return activeMva && activeMva.group === group && activeMva.type === type;
  };

  const Row = ({ label, type }) => (
    <tr>
      <td className="py-2 px-3 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-100 dark:border-slate-800">{label}</td>
      <td className={`py-2 px-3 text-center border-b border-slate-100 dark:border-slate-800 transition-colors ${isHighlighted('com', type) ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
        {renderValue(comFidelidade[type])}
      </td>
      <td className={`py-2 px-3 text-center border-b border-slate-100 dark:border-slate-800 transition-colors ${isHighlighted('sem', type) ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
        {renderValue(semFidelidade[type])}
      </td>
    </tr>
  );

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 transition-colors">
      <table className="w-full text-sm text-left border-collapse bg-white dark:bg-slate-900">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <th className="py-3 px-3 border-b border-slate-200 dark:border-slate-700">Operação</th>
            <th className="py-3 px-3 text-center border-b border-slate-200 dark:border-slate-700">Com Fidelidade</th>
            <th className="py-3 px-3 text-center border-b border-slate-200 dark:border-slate-700">Sem Fidelidade</th>
          </tr>
        </thead>
        <tbody>
          <Row label="Interna" type="interno" />
          <Row label="Interest. 4%" type="inter_4" />
          <Row label="Interest. 7%" type="inter_7" />
          <Row label="Interest. 12%" type="inter_12" />
        </tbody>
      </table>
    </div>
  );
}
