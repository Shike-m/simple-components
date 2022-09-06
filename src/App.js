import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
