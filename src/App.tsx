import React from 'react';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import LobbyPage from "../src/components/LobbyPage/LobbyPage"
import OneCodePage from '../src/components/OneCodePage/OneCodePage';
import { useEffect, useState } from 'react';

function App() {

  return (
		<BrowserRouter>
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        <Route path="/oneCodePage" element={<OneCodePage />} />
      </Routes>
		</BrowserRouter>
  );
}

export default App;