import React from 'react';
import HomePage from './pages/HomePage';
import './CSS/index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsArticlePage from './pages/NewsArticlePage';
import ProfilePage from './pages/ProfilePage';
import NewsForYou from './pages/NewsForYou';
import { AuthProvider } from './auth/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Header />
        <div className='bg-slate-100'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/article/:articleId" element={<NewsArticlePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/foryou" element={<NewsForYou />} />

          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
