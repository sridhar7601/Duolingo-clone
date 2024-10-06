import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/api';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import LettersPage from './pages/LettersPage';
import Leaderboards from './pages/Leaderboards';
import { LessonProvider } from './contexts/LessonContext';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LessonProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/letters" element={<LettersPage />} />
              <Route path="/leaderboards" element={<Leaderboards />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Layout>
        </Router>
      </LessonProvider>
    </QueryClientProvider>
  );
};

export default App;