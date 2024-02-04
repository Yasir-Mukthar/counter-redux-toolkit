import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store= configureStore({
    reducer:{
        //reducers goes here 
        counter:counterReducer


    }
})