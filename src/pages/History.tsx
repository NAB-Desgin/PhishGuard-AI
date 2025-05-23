import React, { useState } from 'react';
import { History as HistoryIcon, Search, ChevronDown, FileBadge as FileBar, Download, Filter, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HistoryItem {
  id: number;
  date: string;
  time: string;
  type: 'email' | 'url' | 'website';
  source: string;
  result: 'clean' | 'suspicious' | 'malicious';
  action: 'allowed' | 'blocked' | 'quarantined';
  confidence: number;
}

const History: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedResult, setSelectedResult] = useState<string>('all');
  const [sortBy, setSortBy] = useState<{ field: keyof HistoryItem; direction: 'asc' | 'desc' }>({ field: 'date', direction: 'desc' });
  
  const historyData: HistoryItem[] = [
    { id: 1, date: '2025-01-15', time: '09:32 AM', type: 'email', source: 'newsletter@mailchimp.com', result: 'clean', action: 'allowed', confidence: 98 },
    { id: 2, date: '2025-01-15', time: '10:45 AM', type: 'url', source: 'https://amaz0n-secure.com/login', result: 'malicious', action: 'blocked', confidence: 96 },
    { id: 3, date: '2025-01-14', time: '03:17 PM', type: 'email', source: 'support@paypa1.com', result: 'malicious', action: 'blocked', confidence: 94 },
    { id: 4, date: '2025-01-14', time: '11:05 AM', type: 'website', source: 'wellsfarg0-secure.com', result: 'malicious', action: 'blocked', confidence: 97 },
    { id: 5, date: '2025-01-13', time: '02:23 PM', type: 'url', source: 'https://docs.google.com/spreadsheets', result: 'clean', action: 'allowed', confidence: 99 },
    { id: 6, date: '2025-01-12', time: '04:51 PM', type: 'email', source: 'noreply@linkedin.com', result: 'clean', action: 'allowed', confidence: 97 },
    { id: 7, date: '2025-01-12', time: '09:14 AM', type: 'website', source: 'signin-outlook-verify.com', result: 'suspicious', action: 'quarantined', confidence: 75 },
    { id: 8, date: '2025-01-11', time: '10:32 AM', type: 'email', source: 'security@bank0famerica.com', result: 'malicious', action: 'blocked', confidence: 92 },
    { id: 9, date: '2025-01-10', time: '03:45 PM', type: 'url', source: 'https://dropbox-share.link/file', result: 'suspicious', action: 'quarantined', confidence: 68 },
    { id: 10, date: '2025-01-10', time: '11:19 AM', type: 'email', source: 'newsletter@updates.spotify.com', result: 'clean', action: 'allowed', confidence: 96 },
    { id: 11, date: '2025-01-09', time: '02:07 PM', type: 'website', source: 'verify-account-google.web.app', result: 'malicious', action: 'blocked', confidence: 91 },
    { id: 12, date: '2025-01-08', time: '10:12 AM', type: 'url', source: 'https://github.com/repository', result: 'clean', action: 'allowed', confidence: 99 },
  ];

  const handleSort = (field: keyof HistoryItem) => {
    setSortBy({
      field,
      direction: sortBy.field === field && sortBy.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const filteredData = historyData
    .filter(item => 
      (searchTerm === '' || 
        item.source.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedType === 'all' || item.type === selectedType) &&
      (selectedResult === 'all' || item.result === selectedResult)
    )
    .sort((a, b) => {
      if (sortBy.field === 'date') {
        const dateComparison = sortBy.direction === 'asc' 
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
        
        // If dates are equal, sort by time
        if (dateComparison === 0) {
          return sortBy.direction === 'asc'
            ? a.time.localeCompare(b.time)
            : b.time.localeCompare(a.time);
        }
        
        return dateComparison;
      }
      
      if (sortBy.field === 'confidence') {
        return sortBy.direction === 'asc'
          ? a.confidence - b.confidence
          : b.confidence - a.confidence;
      }
      
      // For string fields
      return sortBy.direction === 'asc'
        ? String(a[sortBy.field]).localeCompare(String(b[sortBy.field]))
        : String(b[sortBy.field]).localeCompare(String(a[sortBy.field]));
    });

  const getResultClass = (result: string) => {
    switch (result) {
      case 'clean':
        return 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300';
      case 'suspicious':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300';
      case 'malicious':
        return 'bg-danger-100 text-danger-800 dark:bg-danger-900/50 dark:text-danger-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getActionClass = (action: string) => {
    switch (action) {
      case 'allowed':
        return 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300';
      case 'quarantined':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300';
      case 'blocked':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HistoryIcon className="h-6 w-6 text-primary-600" />
          <h1 className="text-2xl font-bold">Scan History</h1>
        </div>
        <div className="flex space-x-2">
          <motion.button
            className="inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileBar className="h-4 w-4 mr-1.5 text-slate-500" />
            Export
          </motion.button>
          <motion.button
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-4 w-4 mr-1.5" />
            Download Report
          </motion.button>
        </div>
      </div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
              placeholder="Search by source..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-3">
            <div className="relative">
              <select
                className="appearance-none block w-full py-2 pl-3 pr-10 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="email">Email</option>
                <option value="url">URL</option>
                <option value="website">Website</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
            
            <div className="relative">
              <select
                className="appearance-none block w-full py-2 pl-3 pr-10 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100"
                value={selectedResult}
                onChange={(e) => setSelectedResult(e.target.value)}
              >
                <option value="all">All Results</option>
                <option value="clean">Clean</option>
                <option value="suspicious">Suspicious</option>
                <option value="malicious">Malicious</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
            
            <button className="inline-flex items-center px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium">
              <Filter className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50">
                <th 
                  className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('date')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Date/Time</span>
                    {sortBy.field === 'date' && (
                      <ArrowUpDown className="h-3 w-3" />
                    )}
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Source
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Result
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Action
                </th>
                <th 
                  className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('confidence')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Confidence</span>
                    {sortBy.field === 'confidence' && (
                      <ArrowUpDown className="h-3 w-3" />
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-transparent divide-y divide-slate-200 dark:divide-slate-700">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900 dark:text-white">
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.time}
                    </div>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className="capitalize text-sm text-slate-800 dark:text-slate-200">
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-mono text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                      {item.source}
                    </div>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getResultClass(item.result)}`}>
                      {item.result.charAt(0).toUpperCase() + item.result.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActionClass(item.action)}`}>
                      {item.action.charAt(0).toUpperCase() + item.action.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">{item.confidence}%</span>
                      <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${
                            item.confidence > 90 ? 'bg-success-500' : 
                            item.confidence > 70 ? 'bg-primary-500' : 
                            item.confidence > 50 ? 'bg-warning-500' : 'bg-danger-500'
                          }`} 
                          style={{ width: `${item.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredData.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-500 dark:text-slate-400">No matching history records found.</p>
          </div>
        )}
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredData.length} of {historyData.length} entries
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-sm">
              Previous
            </button>
            <button className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 border border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-sm">
              2
            </button>
            <button className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-sm">
              Next
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <h2 className="font-semibold text-lg mb-4">Historical Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium text-center mb-3">Scan Results Distribution</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="h-24 w-6 bg-slate-200 dark:bg-slate-600 rounded-t-lg relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-success-500 rounded-t-lg" style={{ height: '45%' }}></div>
                </div>
                <span className="text-xs mt-1">Clean</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-24 w-6 bg-slate-200 dark:bg-slate-600 rounded-t-lg relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-warning-500 rounded-t-lg" style={{ height: '20%' }}></div>
                </div>
                <span className="text-xs mt-1">Suspicious</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-24 w-6 bg-slate-200 dark:bg-slate-600 rounded-t-lg relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-danger-500 rounded-t-lg" style={{ height: '35%' }}></div>
                </div>
                <span className="text-xs mt-1">Malicious</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium text-center mb-3">Threat Types</h3>
            <div className="flex flex-col space-y-2">
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Phishing</span>
                  <span>48%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Malware</span>
                  <span>32%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Scam</span>
                  <span>20%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-warning-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium text-center mb-3">Monthly Summary</h3>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-slate-800 p-2 rounded">
                  <div className="text-xl font-bold text-primary-600 dark:text-primary-400">437</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Total Scans</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded">
                  <div className="text-xl font-bold text-danger-600 dark:text-danger-400">48</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Threats Blocked</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded">
                  <div className="text-xl font-bold text-success-600 dark:text-success-400">93%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Success Rate</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-2 rounded">
                  <div className="text-xl font-bold text-secondary-600 dark:text-secondary-400">18</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">False Positives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default History;