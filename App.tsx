import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AdminLayout, PublicLayout } from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import Cashier from './pages/Cashier';
import Operations from './pages/Operations';
import Tracking from './pages/Tracking';
import Inventory from './pages/Inventory';
import ServicesManager from './pages/ServicesManager';
import Settings from './pages/Settings';
import Clients from './pages/Clients';

// Simple Auth Guard
const PrivateRoute = () => {
  const user = localStorage.getItem('aqua_user');
  return user ? <AdminLayout><Outlet /></AdminLayout> : <Navigate to="/login" />;
};

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/seguimiento" />} />
        <Route path="/seguimiento" element={<PublicLayout><Tracking /></PublicLayout>} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="pos" element={<POS />} />
          <Route path="cashier" element={<Cashier />} />
          <Route path="clients" element={<Clients />} />
          <Route path="operations" element={<Operations />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="services" element={<ServicesManager />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<div className="p-4">Reportes en construcción</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;