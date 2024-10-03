import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Layout/Header';
import LettersPage from './pages/LettersPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col md:flex-row min-h-screen ">
          {/* Fixed Header */}
          <div className="fixed top-0 left-0 bottom-0 z-10">
            <Header />
          </div>
          
          {/* Main Content Area */}
          <main className="flex-grow p-4 md:p-6 md:ml-[72px] xl:ml-[256px] overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/letters" element={<LettersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Add routes for other pages as needed */}
            </Routes>
          </main>
          
          {/* Mobile Bottom Navigation (if needed) */}
          <div className="md:hidden fixed bottom-0 left-0 right-0  p-2">
            {/* Mobile navigation content */}
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;