import React from 'react';
import { Bell, Search, Shield, Moon, Sun, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../../hooks/useDarkMode';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [notifications] = React.useState(3);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary-600" />
          <h1 className="text-lg font-semibold hidden md:block">PhishGuard AI</h1>
        </div>

        <div className="flex-1 mx-4 lg:mx-8 hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 border-transparent focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm"
              placeholder="Search threats, alerts, or URLs..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700 relative">
              <Bell className="h-5 w-5 text-slate-500 dark:text-slate-300" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-danger-600 flex items-center justify-center text-[10px] text-white font-bold">
                  {notifications}
                </span>
              )}
            </button>
          </motion.div>
          
          <motion.button
            className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-500" />
            )}
          </motion.button>
          
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900">
              <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;