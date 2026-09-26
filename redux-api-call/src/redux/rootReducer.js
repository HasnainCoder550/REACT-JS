import { combineReducers } from "@reduxjs/toolkit";
import  userReducer  from "../featues/users/users.js";


const rootReducer = combineReducers({
 user : userReducer
});

export default rootReducer;
