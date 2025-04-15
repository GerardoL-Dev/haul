import React, { useState } from 'react';
import CareersManager from '../components/CareersManager';
import MessagesManager from '../components/MessagesManager';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('gestion');

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-section">
          <button onClick={() => setActiveSection('gestion')}>GESTIÓN DE CARRERAS</button>
          <button onClick={() => setActiveSection('mensajes')}>MENSAJES DE CONTACTO</button>
        </div>
      </aside>

      {/* Main Section */}
      <main className="main-section">
        {activeSection === 'gestion' && <CareersManager />}
        {activeSection === 'mensajes' && <MessagesManager />}
      </main>
    </div>
  );
}
