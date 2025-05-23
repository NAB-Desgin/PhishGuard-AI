# 🛡️ PhishGuard AI

**PhishGuard AI** is a comprehensive, AI-powered phishing detection and response system. It's implemented as a **Chrome Extension** with a powerful **React-based dashboard** to provide real-time, enterprise-level protection against phishing attacks—accessible to regular users.

---

## 🔍 Features

### 🧠 Core AI Functionality
- **Email Scanner**
  - Detects phishing attempts using NLP to analyze text patterns, urgency cues, domain anomalies, and manipulation tactics.
- **URL Scanner**
  - Real-time URL evaluation, screenshot isolation, Vision AI analysis, and SSL/domain reputation checks.

### 👀 Background Monitoring
- Web navigation surveillance
- Form submission protection
- Threat database maintenance
- Real-time alert system

---

## 🤖 AI Technologies Used

- **Vision Transformers**
  - Detect fake login pages via screenshot analysis (logo mismatch, branding forgery)
- **Natural Language Processing**
  - Email & URL text analysis
  - Context-aware threat detection

---

## 🖥️ Dashboard Features

### 🔧 Dashboard
- Real-time stats
- Threat detection history
- Global threat map
- System & model performance

### ⚠️ Alerts
- Instant alerts with severity classification
- Auto-response logs
- Manual review options

### ⚙️ Settings
- Sensitivity adjustments
- AI config
- Notification rules

### 📜 Scan History
- Searchable logs
- Exportable data
- Filter & analytics

---

## 🔐 Security Highlights
- Secure authentication
- Role-based access control
- Encrypted API communication
- Data privacy safeguards

---

## 🌐 Chrome Extension Integration

- `background.ts`: Background worker for threat scanning
- `contentScript.ts`: Injected into pages to monitor phishing activity
- Browser popup for quick alerts and status

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript, Tailwind CSS, Framer Motion
- **Data Viz:** Recharts
- **UI:** Lucide Icons
- **Routing & State:** React Router, Context API, custom hooks

---

## 🚨 Phishing Lifecycle Coverage

- **Prevention:** Live URL/email scanning, Vision-based page inspection
- **Detection:** AI-driven pattern matching, behavior analysis
- **Response:** Auto-block, logging, alerts
- **Learning:** Feedback-driven improvement, model updates

---

## 📁 Folder Structure

