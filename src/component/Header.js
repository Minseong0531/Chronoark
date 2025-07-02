import {Link} from 'react-router-dom'
import { fixPath } from '../utils/PathUtils'

function Header(){
    return(
        <header id="main_header">
            <div className='inner_container'>
                <h1><Link to="/"><img src={fixPath('images/Logo/Alfine_Logo_White.png')}></img></Link></h1>
                <nav className='main_navbar'>
                    <ul>
                        <li><Link to="/main">메인</Link></li>
                        <li><Link to="/universe">세계관</Link></li>
                        <li><Link to="/charactor">캐릭터</Link></li>
                        <li><Link to="/guide">게임소개</Link></li>
                        <li><Link to="/soundtrack">사운드트랙</Link></li>
                    </ul>
                </nav>
                <nav className='main_icons'>
                    <ul>
                        <li><Link to="https://store.steampowered.com/app/1188930/_/">Steam</Link></li>
                        <li><Link to="https://store.steampowered.com/app/1188930/_/">X</Link></li>
                        <li><Link to="https://store.steampowered.com/app/1188930/_/">Youtube</Link></li>
                    </ul>
                </nav>
                <button type="button" className="toggle_btn">
                    <span></span>
                    <span></span>
                    <span></span> 
                </button>
            </div>
        </header>
    )
}

export default Header