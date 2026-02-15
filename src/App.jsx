import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './styles/global.css';

import TopPage from './pages/TopPage';
import ExhibitionPage from './pages/ExhibitionPage';
import JournalPage from './pages/JournalPage';
import MembershipPage from './pages/MembershipPage';
import StaticPage from './pages/StaticPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/exhibitions" element={<ExhibitionPage />} />
        <Route path="/exhibitions/:id" element={<ExhibitionPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/page/:slug" element={<StaticPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
