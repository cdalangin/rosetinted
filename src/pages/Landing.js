import React from 'react';
import LandImg from "../assets/FullLanding.png";
import Info from "../assets/info.png";
import Settings from "../assets/settings.png";
import Start from "../assets/getstarted.png";
import "../css/Landing.css"

export default function Landing() {

    return(
        <div className="landing">
            {/* <img src={LandImg} alt="landing window" className="landing-img"/> */}
            <div className="landing-img" style={{backgroundImage: `url(${LandImg})`,backgroundRepeat:"no-repeat" ,backgroundSize:"contain"}}>
                <div className="landing-buttons">
                    <img src={Info} alt="info" className="land-but info-button" />
                    <img src={Settings} alt="settings" className="land-but settings-button" />
                    <img src={Start} alt="get started" className="land-but start-button" />
                </div>
            </div>
        </div>

    )
}