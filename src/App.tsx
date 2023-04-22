import React from 'react';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import LobbyPage from "../src/components/LobbyPage/LobbyPage"
import OneCodePage from '../src/components/OneCodePage/OneCodePage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function App() {

  return (
		<BrowserRouter>
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        {/* <Route path="/oneCodePage/:id" element={<OneCodePage roomId={useParams().id} />} /> */}
        <Route path="/oneCodePage/:id" element={<OneCodePage />} />
      </Routes>
		</BrowserRouter>
  );
}

export default App;