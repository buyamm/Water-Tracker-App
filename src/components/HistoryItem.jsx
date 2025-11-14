import React from 'react';
import { Droplets } from 'lucide-react';

export const HistoryItem = ({ entry }) => {
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4 mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <Droplets className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{entry.amount} ml</p>
          <p className="text-sm text-gray-500">{formatTime(entry.timestamp)}</p>
        </div>
      </div>
    </div>
  );
};