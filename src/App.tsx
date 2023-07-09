import React from 'react';
import './App.css';
import PersistentDrawerLeft from "./components/MiniDrawerr"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlatformLaunch from './components/PlatformLaunch';
import DefaultScreen from './components/DefaultScreen';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { Provider } from "react-redux";
import { reducer as formReducer } from 'redux-form';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersistentDrawerLeft />} ></Route>
        <Route path="/contact" element={<PlatformLaunch />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
