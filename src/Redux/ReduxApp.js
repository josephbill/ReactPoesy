import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement , setName} from './actions'

function ReduxApp () {

    //access states from the store 
    const count = useSelector(state => state.count)
    const name = useSelector(state => state.name)

    const dispatch = useDispatch(); //used to send , execute, event trigger for our reducer logic.


    function handleIncrement () {
        dispatch(increment());
    }
    function handleDecrement () {
        dispatch(decrement());
    }

    return (
        <>
           <h1>Name : {name}</h1>
           <h1>Count : {count}</h1>
           <button onClick={handleIncrement}>Increment</button>
           <button onClick={handleDecrement}>Decrement</button>
           <button onClick={() => dispatch(setName('Mary'))}>Set Name</button> 
    
        </>
    )

}

export default ReduxApp