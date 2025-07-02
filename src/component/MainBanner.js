import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fixPath } from "../utils/PathUtils";
import Sakura from "../lib/sakura";
function MainBanner(){
    const options = {
        minSize: 10,
        maxSize: 15,
        delay: 1000,
        lifeTime: 5000,
        fallSpeed: 0.5,
        colors: [{
          gradientColorStart: 'rgba(100, 100, 100, 0.7)',
          gradientColorEnd: 'rgba(60, 60, 60, 0.5)',
          gradientColorDegree: 90
        }]
      };

    useEffect(()=> {
        new Sakura('#main_banner', options);
    },[])
    return(
        
        <div className="main_banner" id="main_banner">
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