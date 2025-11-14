import React from 'react';
import { Droplets } from 'lucide-react';

export const WaterStats = ({ totalWater, goalWater }) => {
  const percentage = Math.min((totalWater / goalWater) * 100, 100);
  
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
      <div className="flex items-center justify-center mb-6">
        <Droplets className="w-16 h-16 text-blue-500" />
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-blue-600 mb-2">
          {totalWater} <span className="text-2xl">ml</span>
        </h2>
        <p className="text-gray-500 text-lg">Mục tiêu: {goalWater} ml</p>
      </div>

      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
    </div>
  );
};