import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./sakura.css";
import Header from './component/Header';
import MainBanner from './component/MainBanner';
import Home from './page/Home';
function App() {
  
  return(
      <div>
            <Header />
            <MainBanner />
            <Routes>
                <Route path={`/`} element={<Home />}></Route>
            </Routes>
      </div>
  )

}

export default App;
