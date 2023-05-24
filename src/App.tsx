import React from 'react';
import HomePage from './pages/HomePage';
import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsArticlePage from './pages/NewsArticlePage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='bg-slate-100'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/article/:articleId" element={<NewsArticlePage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
