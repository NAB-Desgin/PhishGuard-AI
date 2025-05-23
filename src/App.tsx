import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import EmailScanner from './pages/EmailScanner';
import UrlScanner from './pages/UrlScanner';
import Alerts from './pages/Alerts';
import Configuration from './pages/Configuration';
import History from './pages/History';
import Login from './pages/Login';
import Help from './pages/Help';
import './index.css';

function App() {
  // Simulated authentication state
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        {isAuthenticated ? (
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/email-scanner" element={<EmailScanner />} />
            <Route path="/url-scanner" element={<UrlScanner />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;