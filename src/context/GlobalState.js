import React, { createContext, useReducer} from 'react';

import AppReducer from './AppReducer';

//Create the Initial State
const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

//Create the provider for Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    //Actions for Transaction
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    // Add new Transaction Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}