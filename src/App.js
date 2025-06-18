import './App.css';
import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './component/Header';
import MainBanner from './component/MainBanner';

function App() {
  
  return(
    <div className='App'>
      <Header />
      <MainBanner />
      <section id='intro'>
        <div className='title'>
          <h2>크로노아크</h2>
          <span>세계를 복구시키기 위한 여정</span>
        </div>
        
      </section>
    </div>
  )

}

export default App;
