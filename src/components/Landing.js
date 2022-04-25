import React, {useContext} from 'react';
import {StateContext} from "../components/StateContext"
import Info from "../assets/buttons/info2.png";
// import Settings from "../assets/buttons/settings.png";
import Start from "../assets/buttons/getstarted.png";
import "../css/Landing.css"

import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

export default function Landing() {
    const {showState, toggleStates} = useContext(StateContext)


    const showInfo = () => {
        const data = [...showState]
        data[0] = true

        toggleStates(data)
    }

    return(
        <div className="landing">
            <div className="landing-img hvr-hang" > 
                <div className="landing-buttons">
                    <Link to="/rosetinted/about" className="land-but">
                        <img src={Info} alt="info" className="info-button" />
                    </Link>
                    <HashLink smooth to="/rosetinted/#intro" className="land-but"onClick={showInfo} >
                        <img src={Start} alt="get started" className="start-button" />
                    </HashLink>
                </div>
            </div>
        </div>

    )
}