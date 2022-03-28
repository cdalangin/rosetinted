import React, {useState, createContext}  from 'react';
import {StateContext} from "../components/StateContext"
import Landing from "../components/Landing";
import Insta from "../components/Insta"

export default function MainPage() {
    const [showState, toggleStates] = useState([false, false]);
    const value = {showState, toggleStates}
    console.log(showState, "IN MAIN")
    return (
        <>
        <StateContext.Provider value={value}>
            <Landing />
            {showState[0] && <Insta/>}
        </StateContext.Provider>
        </>
    )
}