import React, {useState}  from 'react';
import {StateContext} from "../components/StateContext"
import Landing from "../components/Landing";
import Insta from "../components/Insta";
import Intro from "../components/Intro";
import Graphics from '../components/Graphics';
import Footer from '../components/Footer';

export default function MainPage() {
    const [showState, toggleStates] = useState([false, false]);
    const value = {showState, toggleStates}
    console.log(showState, "IN MAIN")
    return (
        <>
        <StateContext.Provider value={value}>
            <Landing />
            {showState[0] && <Intro/>}
            {showState[1] && <Insta/>}
            {showState[2] && 
                <>
                    <Graphics/>
                    <Footer/>
                </>
            }
        </StateContext.Provider>
        </>
    )
}