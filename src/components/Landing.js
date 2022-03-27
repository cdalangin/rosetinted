import React from 'react';
import Info from "../assets/info.png";
import Settings from "../assets/settings.png";
import Start from "../assets/getstarted.png";
import "../css/Landing.css"

import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";


export default function Landing() {

    return(
        <div className="landing">
            <div className="landing-img hvr-hang" > 
                <div className="landing-buttons">
                    <Link to="/rosetinted/about" className="land-but">
                        <img src={Info} alt="info" className="info-button" />
                    </Link>
                    <Link to="/rosetinted/settings" className="land-but">
                        <img src={Settings} alt="settings" className="settings-button" />
                    </Link>
                    <HashLink smooth to="/rosetinted/#insta" className="land-but">
                        <img src={Start} alt="get started" className="start-button" />
                    </HashLink>
                </div>
            </div>
        </div>

    )
}