import React, { createContext, useState } from 'react';
import HomePage from './Pages/HomePage';
import { Route, Routes } from "react-router-dom";
import './App.css';

interface SharedData {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const dataContext = createContext<SharedData | null>(null);

function App() {
  const [searchValue, setSearchValue] = useState('');

  const dataToshare = {
    searchValue,
    setSearchValue
  };

  return (
    <dataContext.Provider value={dataToshare}>
      <Routes>
      <Route path='/' element={<HomePage />} />
      </Routes>
    </dataContext.Provider>
  );
}

export default App;
export { dataContext };
