import React from 'react';
import { History, Droplets, Trash2 } from 'lucide-react';
import { HistoryItem } from './HistoryItem';

export const HistoryList = ({ history, onClearHistory }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <History className="w-6 h-6" />
          Lịch sử
        </h3>
        {history.length > 0 && (
          <button
            onClick={onClearHistory}
            className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
            title="Xóa lịch sử"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <Droplets className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>Chưa có lịch sử uống nước</p>
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          {history.map((entry) => (
            <HistoryItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
};