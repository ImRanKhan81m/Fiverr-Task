import React from 'react';
import HomePage from './Pages/HomePage';
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;