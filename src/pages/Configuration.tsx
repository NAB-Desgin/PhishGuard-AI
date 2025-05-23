import React, { useState } from 'react';
import { Settings, Shield, Bell, Cpu, Link, Database, BrainCircuit, RefreshCw, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Configuration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [emailSensitivity, setEmailSensitivity] = useState(75);
  const [urlSensitivity, setUrlSensitivity] = useState(85);
  const [autoBlock, setAutoBlock] = useState(true);
  const [autoQuarantine, setAutoQuarantine] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [visionAI, setVisionAI] = useState(true);
  const [nlpAnalysis, setNlpAnalysis] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const responseRules = [
    { id: 1, name: 'High Confidence Phishing', action: 'Block', confidence: '90%+', description: 'Automatically block emails and URLs with high-confidence phishing indicators' },
    { id: 2, name: 'Medium Confidence Phishing', action: 'Quarantine', confidence: '60-90%', description: 'Quarantine for manual review when confidence is moderate' },
    { id: 3, name: 'Suspicious Content', action: 'Tag', confidence: '30-60%', description: 'Add warning tags but deliver with caution notices' },
    { id: 4, name: 'Executive Protection', action: 'Enhanced Scanning', confidence: 'Any', description: 'Apply stricter rules to emails targeting executive team members' },
    { id: 5, name: 'Password Reset Emails', action: 'Special Analysis', confidence: 'Any', description: 'Apply specialized scanning to emails containing password reset language' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Settings className="h-6 w-6 text-primary-600" />
          <h1 className="text-2xl font-bold">System Configuration</h1>
        </div>
        <motion.button
          className={`inline-flex items-center px-4 py-2 ${
            saveSuccess 
              ? 'bg-success-600 hover:bg-success-700' 
              : 'bg-primary-600 hover:bg-primary-700'
          } text-white font-medium rounded-lg transition-colors`}
          onClick={handleSave}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {saveSuccess ? (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Saved
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </motion.button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="flex overflow-x-auto" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                activeTab === 'general'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-1.5" />
              General
            </button>
            <button
              onClick={() => setActiveTab('detection')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                activeTab === 'detection'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              <Cpu className="h-4 w-4 inline mr-1.5" />
              Detection Settings
            </button>
            <button
              onClick={() => setActiveTab('response')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                activeTab === 'response'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              <BrainCircuit className="h-4 w-4 inline mr-1.5" />
              Response Rules
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                activeTab === 'notifications'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              <Bell className="h-4 w-4 inline mr-1.5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                activeTab === 'integrations'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              <Link className="h-4 w-4 inline mr-1.5" />
              Integrations
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-medium mb-6">General Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      <span>Email Protection</span>
                      <span className="text-primary-600 dark:text-primary-400">{emailSensitivity}%</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={emailSensitivity}
                      onChange={(e) => setEmailSensitivity(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span>Less Sensitive</span>
                      <span>More Sensitive</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      <span>URL Protection</span>
                      <span className="text-primary-600 dark:text-primary-400">{urlSensitivity}%</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={urlSensitivity}
                      onChange={(e) => setUrlSensitivity(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span>Less Sensitive</span>
                      <span>More Sensitive</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">Automatic Blocking</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Block high-confidence phishing attempts</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={autoBlock}
                        onChange={() => setAutoBlock(!autoBlock)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">Automatic Quarantine</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Quarantine medium-confidence threats</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={autoQuarantine}
                        onChange={() => setAutoQuarantine(!autoQuarantine)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">Security Notifications</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive alerts for detected threats</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'detection' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-medium mb-6">Detection Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Database className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <h3 className="font-medium">Vision AI Module</h3>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          checked={visionAI}
                          onChange={() => setVisionAI(!visionAI)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Use Vision Transformers to analyze screenshots and visual elements for phishing indicators.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Visual analysis depth:</span>
                        <span className="font-medium">High</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Logo detection:</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Layout analysis:</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <BrainCircuit className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                        <h3 className="font-medium">NLP Analysis</h3>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          checked={nlpAnalysis}
                          onChange={() => setNlpAnalysis(!nlpAnalysis)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Use large language models to analyze text content for manipulation and social engineering.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Language model:</span>
                        <span className="font-medium">GPT-4o</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Context window:</span>
                        <span className="font-medium">16K tokens</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Intent analysis:</span>
                        <span className="font-medium">Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <RefreshCw className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <h3 className="font-medium text-primary-800 dark:text-primary-300">Reinforcement Learning</h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                    Enable the system to continuously learn from new threats and user feedback to improve detection accuracy.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Learning Rate</h4>
                      <select className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm p-2">
                        <option>Aggressive</option>
                        <option selected>Balanced</option>
                        <option>Conservative</option>
                      </select>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Feedback Source</h4>
                      <select className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm p-2">
                        <option>User Feedback Only</option>
                        <option selected>User + Automated</option>
                        <option>Automated Only</option>
                      </select>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">Update Frequency</h4>
                      <select className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-sm p-2">
                        <option>Real-time</option>
                        <option selected>Daily</option>
                        <option>Weekly</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'response' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Response Rules</h2>
                <button className="px-3 py-1.5 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/40 dark:hover:bg-primary-800/60 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg flex items-center">
                  <span>Add New Rule</span>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </button>
              </div>
              
              <div className="overflow-hidden bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                  <thead className="bg-slate-50 dark:bg-slate-800">
                    <tr>
                      <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Rule Name
                      </th>
                      <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Confidence
                      </th>
                      <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-transparent divide-y divide-slate-200 dark:divide-slate-700">
                    {responseRules.map((rule) => (
                      <tr key={rule.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-4 px-4 text-sm font-medium text-slate-900 dark:text-white">
                          {rule.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            rule.action === 'Block' 
                              ? 'bg-danger-100 text-danger-800 dark:bg-danger-900/50 dark:text-danger-300'
                              : rule.action === 'Quarantine'
                              ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300'
                              : rule.action === 'Tag'
                              ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/50 dark:text-secondary-300'
                              : 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300'
                          }`}>
                            {rule.action}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-500 dark:text-slate-400">
                          {rule.confidence}
                        </td>
                        <td className="py-4 px-4 text-sm text-slate-500 dark:text-slate-400">
                          {rule.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <BrainCircuit className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                  <h3 className="font-medium text-secondary-800 dark:text-secondary-300">Multi-Agent Response System</h3>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                  Configure how multiple AI agents collaborate to determine the optimal response to detected threats.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-3">Agent Collaboration</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="collaboration" className="h-4 w-4 text-primary-600 focus:ring-primary-500" checked />
                        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Consensus-based</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="collaboration" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Hierarchical</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="collaboration" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Independent</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-3">Response Strategy</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="strategy" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Conservative (fewer false positives)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="strategy" className="h-4 w-4 text-primary-600 focus:ring-primary-500" checked />
                        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Balanced</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="strategy" className="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Aggressive (fewer false negatives)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-medium mb-6">Notification Settings</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">High Severity Alerts</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Critical and high severity threats</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">Medium Severity Alerts</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Suspicious activities and potential threats</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">Low Severity Alerts</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Informational and minor issues</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="font-medium">System Status Updates</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Service status and maintenance notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-4">Notification Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" checked className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded" />
                      <div className="flex-1">
                        <label className="font-medium text-slate-700 dark:text-slate-300">In-app notifications</label>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" checked className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded" />
                      <div className="flex-1">
                        <label className="font-medium text-slate-700 dark:text-slate-300">Email notifications</label>
                        <input type="email" placeholder="admin@company.com" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-800 shadow-sm text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded" />
                      <div className="flex-1">
                        <label className="font-medium text-slate-700 dark:text-slate-300">SMS notifications</label>
                        <input type="tel" placeholder="+1 (555) 123-4567" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-800 shadow-sm text-sm" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" checked className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded" />
                      <div className="flex-1">
                        <label className="font-medium text-slate-700 dark:text-slate-300">Slack integration</label>
                        <input type="text" placeholder="Connect Slack workspace" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 dark:bg-slate-800 shadow-sm text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'integrations' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-medium mb-6">Integrations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 shadow-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Email Services</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300">
                        Connected
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Connect to your email service to scan incoming messages.
                    </p>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">Microsoft 365</span>
                      <button className="text-xs font-medium text-primary-600 dark:text-primary-400">Configure</button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 shadow-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Browser Extensions</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                        Available
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Install browser extensions for real-time URL protection.
                    </p>
                    <div className="space-y-2">
                      <button className="w-full py-1.5 px-3 text-sm font-medium bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 dark:hover:bg-primary-800/50 text-primary-700 dark:text-primary-300 rounded-lg">
                        Chrome Extension
                      </button>
                      <button className="w-full py-1.5 px-3 text-sm font-medium bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 dark:hover:bg-primary-800/50 text-primary-700 dark:text-primary-300 rounded-lg">
                        Firefox Extension
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 shadow-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Cloud Security</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300">
                        Partial
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Integrate with cloud storage to scan for malicious files.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700">
                        <span className="text-sm">Google Drive</span>
                        <button className="text-xs font-medium text-primary-600 dark:text-primary-400">Connect</button>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700">
                        <span className="text-sm">OneDrive</span>
                        <button className="text-xs font-medium text-primary-600 dark:text-primary-400">Connect</button>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm">Dropbox</span>
                        <span className="text-xs font-medium text-success-600 dark:text-success-400">Connected</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 shadow-sm rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">API Integration</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                        Available
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Connect the PhishGuard AI API to your applications.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded-md font-mono text-xs mb-3 truncate">
                      <code>https://api.phishguard.ai/v1/scan</code>
                    </div>
                    <button className="w-full py-1.5 px-3 text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white rounded-lg">
                      Generate API Key
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Configuration;