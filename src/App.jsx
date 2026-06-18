import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import './styles/global.css';

import TopPage from './pages/TopPage';
import ExhibitionPage from './pages/ExhibitionPage';
import JournalPage from './pages/JournalPage';
import StaticPage from './pages/StaticPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/exhibitions" element={<ExhibitionPage />} />
        <Route path="/exhibitions/:id" element={<ExhibitionPage />} />
        <Route path="/journal" element={<JournalPage />} />
        {/* Membership hidden for now — redirect any direct visits home */}
        <Route path="/membership" element={<Navigate to="/" replace />} />
        <Route path="/page/:slug" element={<StaticPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
