import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
