import React from 'react';

interface TerminalBoxProps {
  children: React.ReactNode;
  title?: string;
}

const TerminalBox: React.FC<TerminalBoxProps> = ({ children, title = 'phishguard@terminal:~$' }) => {
  return (
    <div className="bg-gray-950 text-green-400 font-mono rounded-md shadow-lg overflow-hidden border border-gray-800">
      <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-gray-800">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-sm">{title}</div>
      </div>
      <div className="p-4 overflow-auto max-h-[70vh]">
        {children}
      </div>
    </div>
  );
};

export default TerminalBox;