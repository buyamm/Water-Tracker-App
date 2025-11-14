import React, { useState, useEffect } from 'react';
import { Droplets, History, RefreshCw } from 'lucide-react';
import { StorageService } from './services/StorageService';
import { HapticsService } from './services/HapticsService';
import { WaterStats } from './components/WaterStats';
import { QuickAddButtons } from './components/QuickAddButtons';
import { HistoryList } from './components/HistoryList';
import './App.css';

function App() {
  const [totalWater, setTotalWater] = useState(0);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('main');
  const [loading, setLoading] = useState(true);
  const goalWater = 2000;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await StorageService.resetIfNewDay();
    const total = await StorageService.getDailyTotal();
    const hist = await StorageService.getHistory();
    setTotalWater(total);
    setHistory(hist);
    setLoading(false);
  };

  const handleAddWater = async (amount) => {
    await HapticsService.vibrate();
    
    const newTotal = totalWater + amount;
    setTotalWater(newTotal);
    
    await StorageService.setDailyTotal(newTotal);
    await StorageService.addHistoryEntry(amount);
    
    const updatedHistory = await StorageService.getHistory();
    setHistory(updatedHistory);

    if (newTotal >= goalWater) {
      await HapticsService.vibrateSuccess();
    }
  };

  const handleClearHistory = async () => {
    if (window.confirm('Bạn có chắc muốn xóa toàn bộ lịch sử?')) {
      await StorageService.clearHistory();
      await StorageService.setDailyTotal(0);
      setHistory([]);
      setTotalWater(0);
      await HapticsService.vibrate();
    }
  };

  const handleRefresh = async () => {
    await HapticsService.vibrate();
    loadData();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 flex items-center justify-center">
        <div className="text-white text-xl">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md shadow-lg sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Droplets className="w-7 h-7" />
              Water Tracker
            </h1>
            <button
              onClick={handleRefresh}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              title="Làm mới"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {activeTab === 'main' ? (
          <>
            <WaterStats totalWater={totalWater} goalWater={goalWater} />
            <QuickAddButtons onAddWater={handleAddWater} />
          </>
        ) : (
          <HistoryList history={history} onClearHistory={handleClearHistory} />
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-2 py-2">
            <button
              onClick={() => setActiveTab('main')}
              className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all ${
                activeTab === 'main'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Droplets className="w-6 h-6 mb-1" />
              <span className="text-sm font-medium">Trang chủ</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all ${
                activeTab === 'history'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <History className="w-6 h-6 mb-1" />
              <span className="text-sm font-medium">Lịch sử</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;