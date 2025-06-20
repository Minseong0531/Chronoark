import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './component/Header';
import MainBanner from './component/MainBanner';
import Home from './page/Home';

function App() {
  
  return(
    <div className='App'>
      <Header />
      <MainBanner />
      <Home />

    </div>
  )

}

export default App;
