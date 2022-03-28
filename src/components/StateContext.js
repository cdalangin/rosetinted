import React, {createContext} from 'react';

export const StateContext = createContext({
    showState: [false, false],
    toggleStates: () => {}
})