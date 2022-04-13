import {createContext} from 'react';

export const StateContext = createContext({
    showState: [false, false, false],
    toggleStates: () => {}
})