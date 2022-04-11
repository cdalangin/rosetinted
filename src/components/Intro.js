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
            <div className="intro-text">
                {/* <h1>What are you romanticizing?</h1> */}
                <p>You scroll through Instagram to destress, connect, and stay informed</p>
                <p>72% of 12-17 year olds use Instagram</p>
                <p>71% of 18-24 year olds use Instagram</p>
                <p>But is it doing any favors to your mental health?</p>
            </div>
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