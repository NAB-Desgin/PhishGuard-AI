import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Mail, 
  Link2, 
  Bell, 
  Settings, 
  History, 
  ChevronLeft, 
  ChevronRight,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/email-scanner', icon: <Mail size={20} />, label: 'Email Scanner' },
    { path: '/url-scanner', icon: <Link2 size={20} />, label: 'URL Scanner' },
    { path: '/alerts', icon: <Bell size={20} />, label: 'Alerts' },
    { path: '/configuration', icon: <Settings size={20} />, label: 'Configuration' },
    { path: '/history', icon: <History size={20} />, label: 'History' },
    { path: '/help', icon: <HelpCircle size={20} />, label: 'Help' },
  ];

  return (
    <motion.aside
      className={`bg-primary-900 text-white ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col`}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center p-4 h-14">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <ShieldAlert className="h-6 w-6 text-primary-300" />
            <span className="font-bold text-lg">PhishGuard AI</span>
          </div>
        )}
        {collapsed && <ShieldAlert className="h-6 w-6 text-primary-300 mx-auto" />}
      </div>
      
      <div className="flex-1 py-4">
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center py-2 px-4 rounded-lg mx-2
                    ${location.pathname === item.path 
                      ? 'bg-primary-800 text-white' 
                      : 'text-primary-200 hover:bg-primary-800 hover:text-white'}
                    transition-colors duration-200
                  `}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="p-4">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-2 px-4 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors duration-200"
        >
          {collapsed ? <ChevronRight size={20} /> : (
            <>
              <ChevronLeft size={20} />
              <span className="ml-2">Collapse</span>
            </>
          )}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;