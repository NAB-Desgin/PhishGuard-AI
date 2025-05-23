import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'from-primary-50 to-white dark:from-primary-900/40 dark:to-slate-800';
      case 'secondary':
        return 'from-secondary-50 to-white dark:from-secondary-900/40 dark:to-slate-800';
      case 'success':
        return 'from-success-50 to-white dark:from-success-900/40 dark:to-slate-800';
      case 'danger':
        return 'from-danger-50 to-white dark:from-danger-900/40 dark:to-slate-800';
      case 'warning':
        return 'from-warning-50 to-white dark:from-warning-900/40 dark:to-slate-800';
      default:
        return 'from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-800';
    }
  };

  const getTrendClasses = () => {
    switch (trend) {
      case 'up':
        return 'text-success-600 dark:text-success-400';
      case 'down':
        return 'text-danger-600 dark:text-danger-400';
      default:
        return 'text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <motion.div 
      className={`bg-gradient-to-br ${getColorClasses()} rounded-xl p-4 shadow-sm backdrop-blur-xs`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-700/80 shadow-sm">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <span className={`text-sm font-medium ${getTrendClasses()}`}>
          {change} {trend === 'up' ? '↑' : trend === 'down' ? '↓' : ''}
        </span>
      </div>
    </motion.div>
  );
};

export default StatCard;