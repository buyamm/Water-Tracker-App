import React from 'react';
import { Plus } from 'lucide-react';

export const QuickAddButtons = ({ onAddWater }) => {
  const amounts = [100, 200, 300];
  const colors = ['bg-blue-400', 'bg-cyan-400', 'bg-teal-400'];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {amounts.map((amount, index) => (
        <button
          key={amount}
          onClick={() => onAddWater(amount)}
          className={`${colors[index]} hover:opacity-90 text-white font-bold py-6 px-4 rounded-2xl shadow-lg transform transition-all duration-200 active:scale-95 flex flex-col items-center justify-center`}
        >
          <Plus className="w-6 h-6 mb-1" />
          <span className="text-2xl">{amount}</span>
          <span className="text-sm opacity-90">ml</span>
        </button>
      ))}
    </div>
  );
};