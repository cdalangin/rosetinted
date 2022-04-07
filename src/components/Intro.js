import React, {useContext, Fragment, Typography} from 'react';
import {StateContext} from "../components/StateContext"

import { HashLink } from 'react-router-hash-link';
import "../css/Intro.css"
import Proceed from "../assets/buttons/proceed.png"

export default function Intro() {
    const {showState, toggleStates} = useContext(StateContext)

    const showInsta = () => {
        const data = [...showState]
        data[1] = true

        toggleStates(data)
    }
    
    return(
        <>
        <div id="intro" className="intro-sect">
            <h1>Rose-Tinted Glasses</h1>
            <h2>got some free time? scroll through 

                <span>instagram</span>
            </h2>
            <p>inst</p>
            <HashLink smooth to="/rosetinted/#insta" onClick={showInsta} >
                <img src={Proceed} alt="proceed button" height="50vh" />
            </HashLink>
        </div>
        </>

    )
}