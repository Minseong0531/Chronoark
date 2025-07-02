import React from "react";
import { Link } from "react-router-dom";
import { fixPath } from "../utils/PathUtils";
function MainBanner(){

    return(
        <div className="main_banner">
                <div className="banner_wrap">
                    <img src={fixPath('images/contents/main_banner.png')} alt="메인 배너" />
                
                <div className="banner_icons">
                    <ul>
                        <li><Link to="/"><img src={fixPath("images/icon/Steam.png")}/></Link></li>
                        <li><Link to="/"><img src={fixPath("images/icon/X.png")}/></Link></li>
                        <li><Link to="/"><img src={fixPath("images/icon/Youtube.png")}/></Link></li>
                    </ul>
                    <img src={fixPath("images/icon/Scrolldown.png")} alt="스크롤 다운" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;