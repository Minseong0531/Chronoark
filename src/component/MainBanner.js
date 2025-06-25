import React from "react";
import { Link } from "react-router-dom";

function MainBanner(){
    return(
        <div className="main_banner">
                <div className="banner_wrap">
                    <img src='/images/Logo/Main_banner_m.png' />
                
                <div className="banner_icons">
                    <ul>
                        <li><Link to="/" /><img src="/images/icon/Steam.png"/></li>
                        <li><Link to="/" /><img src="/images/icon/X.png"/></li>
                        <li><Link to="/" /><img src="/images/icon/Youtube.png"/></li>
                    </ul>
                    <img src="images/icon/Scrolldown.png" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;