import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Eye, Server, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import StatCard from '../components/dashboard/StatCard';
import ThreatMap from '../components/dashboard/ThreatMap';
import DetectionChart from '../components/dashboard/DetectionChart';
import RecentAlerts from '../components/dashboard/RecentAlerts';
import ModelPerformance from '../components/dashboard/ModelPerformance';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Security Dashboard</h1>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
            <span className="h-2 w-2 rounded-full bg-success-500 mr-1"></span>
            System Active
          </span>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <StatCard 
          title="Protected Sessions" 
          value="1,423" 
          change="+12%"
          trend="up"
          icon={<Shield className="h-8 w-8 text-primary-500" />}
          color="primary"
        />
        <StatCard 
          title="Threats Detected" 
          value="48" 
          change="+5"
          trend="up"
          icon={<AlertTriangle className="h-8 w-8 text-danger-500" />}
          color="danger"
        />
        <StatCard 
          title="Mitigated Threats" 
          value="42" 
          change="87.5%"
          trend="up"
          icon={<CheckCircle className="h-8 w-8 text-success-500" />}
          color="success"
        />
        <StatCard 
          title="Active Monitoring" 
          value="243" 
          change="+24"
          trend="up"
          icon={<Eye className="h-8 w-8 text-secondary-500" />}
          color="secondary"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Detection Activity</h2>
            <div className="flex space-x-2">
              <button className="text-xs font-medium text-slate-500 px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                Daily
              </button>
              <button className="text-xs font-medium text-primary-600 px-2 py-1 rounded bg-primary-50 dark:bg-primary-900 dark:text-primary-300">
                Weekly
              </button>
              <button className="text-xs font-medium text-slate-500 px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                Monthly
              </button>
            </div>
          </div>
          <DetectionChart />
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2 className="font-semibold text-lg mb-4">AI Model Performance</h2>
          <ModelPerformance />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Alerts</h2>
            <button className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors">
              View All
            </button>
          </div>
          <RecentAlerts />
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Global Threat Map</h2>
            <div className="h-6 w-6 rounded-full bg-danger-100 flex items-center justify-center animate-pulse-slow">
              <div className="h-3 w-3 rounded-full bg-danger-500"></div>
            </div>
          </div>
          <ThreatMap />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Top Source</div>
              <div className="font-semibold">Russia</div>
            </div>
            <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Threats</div>
              <div className="font-semibold">32</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Server className="h-5 w-5 text-primary-600" />
            <h2 className="font-semibold text-lg">System Status</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">Email Scanner</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200">
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">URL Scanner</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200">
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">Vision AI Module</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200">
                Degraded
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">Response System</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200">
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">API Services</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200">
                Operational
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <BrainCircuit className="h-5 w-5 text-secondary-600" />
            <h2 className="font-semibold text-lg">AI Learning Progress</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Phishing Email Detection</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-200">95%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Malicious URL Classification</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-200">88%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Visual Phishing Detection</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-200">79%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '79%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Response Optimization</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-200">84%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;