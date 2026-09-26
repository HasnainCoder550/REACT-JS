import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading : false,
  error : null
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
 getAllUsersStart : (state,action) => {
state.loading = true
 },
 getAllUsersSuccess : (state,action) => {
state.users.push(action.payload);
state.loading = false
 },
 getAllUsersFailure : (state,action,) => {
state.error = action.payload
 }
  },
});

export const { getAllUsersStart, getAllUsersSuccess, error } =
userSlice.actions;

export default userSlice.reducer;
