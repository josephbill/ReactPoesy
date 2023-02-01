import { configureStore } from '@reduxjs/toolkit';
import { combineReducers} from 'redux';

//reducer function 
const countReducer  = (state = 0,action) => {
    // switch , cases 
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
            ;

            case 'DECREMENT':
                return state - 1;

                default:
                    return state;
    }
};


const nameReducer = (state = 'Joseph Mbugua', action) => {
      switch(action.type){
           case 'SET_NAME':
            return action.name;
            default: 
            return state;
      }
};
//  CONFIGURE STORE 
// //create store 
// const store = configureStore({
//     reducer: reducer
// })
// export default store;

//COMBINED REDUCERS
const rootReducer  = combineReducers({
    count: countReducer,
    name: nameReducer
});

export default rootReducer;



