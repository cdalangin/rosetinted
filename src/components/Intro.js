import React, {useContext} from 'react';
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
            <h1>What are you romanticizing?</h1>
            <p>Instagram is a popular app full of pretty pictures and___ to help you destress, connect, and be informed</p>
            <p>72% of 12-17 year olds use Instagram</p>
            <p>71% of 18-24 year olds use Instagram</p>
            <p>But what if these pretty pictures also __?</p>
            {/* <h2>got some free time? scroll through 

                <span> instagram</span>
            </h2> */}
            {/* <p>inst</p> */}
            <HashLink smooth to="/rosetinted/#insta" onClick={showInsta} >
                <img src={Proceed} alt="proceed button" height="50vh" />
            </HashLink>
        </div>
        </>

    )
}