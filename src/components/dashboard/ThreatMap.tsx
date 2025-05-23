import React from 'react';

const ThreatMap: React.FC = () => {
  return (
    <div className="relative h-[150px] w-full bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
      {/* Simplified world map visualization */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <path
            d="M165,50 Q400,20 600,120 T800,240 T600,360 T200,340 T50,240 T165,50"
            fill="none"
            stroke="#3b72fb"
            strokeWidth="1"
          />
          <path
            d="M400,50 Q500,150 400,250 T300,350 T200,250 T400,50"
            fill="none"
            stroke="#3b72fb"
            strokeWidth="1"
          />
        </svg>
      </div>
      
      {/* Threat indicators */}
      <div className="absolute h-3 w-3 bg-danger-500 rounded-full animate-ping" style={{ top: '30%', left: '65%' }}></div>
      <div className="absolute h-2 w-2 bg-danger-500 rounded-full" style={{ top: '30%', left: '65%' }}></div>
      
      <div className="absolute h-3 w-3 bg-danger-500 rounded-full animate-ping" style={{ top: '45%', left: '30%' }}></div>
      <div className="absolute h-2 w-2 bg-danger-500 rounded-full" style={{ top: '45%', left: '30%' }}></div>
      
      <div className="absolute h-3 w-3 bg-warning-500 rounded-full animate-ping" style={{ top: '70%', left: '45%' }}></div>
      <div className="absolute h-2 w-2 bg-warning-500 rounded-full" style={{ top: '70%', left: '45%' }}></div>
      
      <div className="absolute h-3 w-3 bg-warning-500 rounded-full animate-ping" style={{ top: '20%', left: '20%' }}></div>
      <div className="absolute h-2 w-2 bg-warning-500 rounded-full" style={{ top: '20%', left: '20%' }}></div>
      
      <div className="absolute h-3 w-3 bg-danger-500 rounded-full animate-ping" style={{ top: '50%', left: '70%' }}></div>
      <div className="absolute h-2 w-2 bg-danger-500 rounded-full" style={{ top: '50%', left: '70%' }}></div>
      
      <div className="absolute h-3 w-3 bg-danger-500 rounded-full animate-ping" style={{ top: '35%', left: '80%' }}></div>
      <div className="absolute h-2 w-2 bg-danger-500 rounded-full" style={{ top: '35%', left: '80%' }}></div>
    </div>
  );
};

export default ThreatMap;