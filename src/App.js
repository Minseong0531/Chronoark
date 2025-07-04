import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import "./sakura.css";
import Header from './component/Header';
import MainBanner from './component/MainBanner';
import Home from './page/Home';
import Modal from './component/Modal';
import { useState } from 'react';

function App() {  
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const toggleModal = () => setModalOpen(prev => !prev);
  const closeModal = () => setModalOpen(false);
  const gnbMenu = (
    <nav className='main_navbar_modal'>
      <ul>
        <li><Link to="/main" onClick={closeModal}>메인</Link></li>
        <li><Link to="/universe" onClick={closeModal}>세계관</Link></li>
        <li><Link to="/charactor" onClick={closeModal}>캐릭터</Link></li>
        <li><Link to="/guide" onClick={closeModal}>게임소개</Link></li>
        <li><Link to="/soundtrack" onClick={closeModal}>사운드트랙</Link></li>
      </ul>
    </nav>
  );
  return(
      <div>
        <Header toggleModal={toggleModal} isOpen={modalOpen}/>
          {modalOpen && (
           <Modal isOpen={modalOpen} onClose={closeModal}>
            {gnbMenu} 
           </Modal>
           )
                    
          }
            <MainBanner />
            <Routes>
                <Route path={`/`} element={<Home />}></Route>
            </Routes>

      </div>
  )

}

export default App;
