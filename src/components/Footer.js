import React, {useContext} from 'react';
import {StateContext} from "../components/StateContext"
import { HashLink } from 'react-router-hash-link';
import "../css/Footer.css"

import StartOver from "../assets/startover.png"

export default function Footer() {
    const {showState, toggleStates} = useContext(StateContext)

    const startOver = () => {
        toggleStates([false, false, false])
    }

    return (
         <div id="footer">
            <p>Made with 💜 by Cirill Dalangin (c) 2022</p>
            <HashLink smooth to="/rosetinted/" onClick={startOver} >
                <img src={StartOver} alt="start over button" className="so-button" /> 
            </HashLink>
         </div>
    )
}