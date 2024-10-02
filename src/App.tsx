import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
          <Header />
          <main className="flex-grow pb-16 md:pb-0 md:pl-16 lg:pl-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Add routes for other pages as needed */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;