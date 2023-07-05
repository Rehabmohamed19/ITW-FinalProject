import React from 'react';
import './App.css';
import PersistentDrawerLeft from "./components/MiniDrawerr"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlatformLaunch from './components/PlatformLaunch';
import DefaultScreen from './components/DefaultScreen';


function App() {



  return (
    <BrowserRouter>
      <PersistentDrawerLeft />
      <Routes>
        <Route path="/contact" element={<PlatformLaunch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
