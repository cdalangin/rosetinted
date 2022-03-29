import React, {useState, createContext}  from 'react';
import {StateContext} from "../components/StateContext"
import Landing from "../components/Landing";
import Insta from "../components/Insta"
import Intro from "../components/Intro"

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
        </StateContext.Provider>
        </>
    )
}