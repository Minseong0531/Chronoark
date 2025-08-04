import { Link as ScrollLink } from 'react-scroll';
import {Link} from 'react-router-dom'
import { fixPath } from '../utils/PathUtils'

function Header({isOpen, toggleModal}){


    return(
        <header id="main_header">
            <div className='inner_container'>
                <h1><Link to="/"><img src={fixPath('images/Logo/Alfine_Logo_White.png')}></img></Link></h1>
                <nav className='main_navbar'>
                    <ul>
                        <li><ScrollLink to="intro" smooth={true} duration={500}>메인</ScrollLink></li>
                        <li><ScrollLink to="universe" smooth={true} duration={500}>세계관</ScrollLink></li>
                        <li><ScrollLink to="character-card" smooth={true} duration={500}>캐릭터</ScrollLink></li>
                        <li><ScrollLink to="introduction" smooth={true} duration={500}>게임소개</ScrollLink></li>
                        <li><ScrollLink to="sound-content" smooth={true} duration={500}>사운드트랙</ScrollLink></li>
                    </ul>
                </nav>
                <nav className='main_icons'>
                    <ul>
                        <li><Link to="https://store.steampowered.com/app/1188930/_/">Steam</Link></li>
                        <li><Link to="https://store.steampowered.com/app/1188930/_/">X</Link></li>
                        <li><Link to="https://store.steampowered.com/app/1188930/_/">Youtube</Link></li>
                    </ul>
                </nav>
                <button className={`toggle_btn ${isOpen ? 'open':''}`} 
                        onClick={()=>{toggleModal();}}
                        aria-expanded={isOpen}
                        aria-label="메뉴 토글"
                        type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span> 
                </button>
            </div>
        </header>
    )
}

export default Header