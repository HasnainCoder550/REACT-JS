import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading : false,
  error : null
};


export const getAllUsersThunk = createAsyncThunk("user/getAllUsers" , async () => {
 try {
  const response = await axios.get(`https://auth-be-five.vercel.app/api/user`);
  console.log(response.data.data);
  

  return response.data.data;

 } catch (error) {
  console.log(error.message);
  
 }
})

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
 getAllUsersStart : (state,action) => {
state.loading = true
 },
 getAllUsersSuccess : (state,action) => {
  console.log(action.payload);
  
state.users.push(action.payload);
state.loading = false
 },
 getAllUsersFailure : (state,action,) => {
state.error = action.payload;
state.loading = false
 }
  },

  extraReducers : (builder) => {
 builder
 .addCase(getAllUsersThunk.pending , (state) => {
  state.loading = true
 })
 .addCase(getAllUsersThunk.fulfilled , (state,action) => {
   state.users = action.payload;
  state.loading = false;
 })
 .addCase(getAllUsersThunk.rejected , (state,action) => {
   state.error = "Error In Fetching Data!"
   state.loading = false;
 })
  }
});

export const { getAllUsersStart, getAllUsersSuccess, error } =
userSlice.actions;

export default userSlice.reducer;
