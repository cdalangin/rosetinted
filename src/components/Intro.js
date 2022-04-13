import React, {useContext} from 'react';
import {StateContext} from "../components/StateContext"
import Anime from 'react-anime';

import { HashLink } from 'react-router-hash-link';
import "../css/Intro.css"
import Proceed from "../assets/buttons/pinkpro.png"

import Txt1 from "../assets/intro/txt1.png"
import Txt2 from "../assets/intro/txt2.png"
import Txt3 from "../assets/intro/txt3.png"
import Stats from "../assets/intro/stats.png"

export default function Intro() {
    const {showState, toggleStates} = useContext(StateContext)

    const texts = [ 
        {
            "name": "scroll",
            "img": Txt1
        },
        {
            "name": "stats",
            "img": Stats
        },
        {
            "name": "favors",
            "img": Txt2
        },
        {
            "name": "click",
            "img": Txt3
        }
    ]

    const showInsta = () => {
        const data = [...showState]
        data[1] = true

        toggleStates(data)
    }
    
    return(
        <div id="intro">
            <div className="intro-text">
                <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 2000}>
                    {texts.map(text => (
                        <img src={text.img} alt={text.name} className="intro-graphics"/>
                    ))}
                </Anime>

                <HashLink smooth to="/rosetinted/#insta" onClick={showInsta} className="intro-link">
                    <img src={Proceed} alt="proceed button" className="intro-button"/>
                </HashLink>
            </div>
        </div>

    )
}