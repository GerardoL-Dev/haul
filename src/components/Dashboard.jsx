import React, { useState, useEffect } from 'react';
import CareersManager from '../components/CareersManager';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('gestion'); // Solo una sección

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-section">
          <button onClick={() => setActiveSection('gestion')}>GESTIÓN DE CARRERAS</button>
        </div>
      </aside>

      {/* Main Section */}
      <main className="main-section">
        {activeSection === 'gestion' && <CareersManager />}
      </main>
    </div>
  );
}