import React from "react";
import { Link } from "react-router-dom";
import { fixPath } from "../utils/PathUtils";
function MainBanner(){

    return(
        <div className="main_banner">
                <div className="banner_wrap">
                    <img src={fixPath('images/Contents/main_banner.png')} />
                
                <div className="banner_icons">
                    <ul>
                        <li><Link to="/" /><img src={fixPath("images/icon/Steam.png")}/></li>
                        <li><Link to="/" /><img src={fixPath("images/icon/X.png")}/></li>
                        <li><Link to="/" /><img src={fixPath("images/icon/Youtube.png")}/></li>
                    </ul>
                    <img src={fixPath("images/icon/Scrolldown.png")} />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;