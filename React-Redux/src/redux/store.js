import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/counter.js"



export const store = configureStore({ 
    reducer: {
        counter: counterReducer
    } })
    console.log(store);
    
    