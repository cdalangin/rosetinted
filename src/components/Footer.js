import React, {useState, useContext} from 'react';
import {StateContext} from "../components/StateContext"
import "../css/Footer.css"

import StartOver from "../assets/startover.png"

export default function Footer() {
    const {showState, toggleStates} = useContext(StateContext)

    const startOver = () => {
        toggleStates([false, false, false])
    }

    return (
         <div id="footer">
             <p>Made with 💜 by Cirill Dalangin</p>
             <img src={StartOver} alt="start over button" className="so-button" onClick={() => {startOver()}}/>
         </div>
    )
}