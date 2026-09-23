import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
  todos : []
 }

export const todo5Slice = createSlice({
  name: 'todo5',
  initialState,
  reducers: {
   addTodo : (state,action) => {
 state.todos.push(action.payload);

   },

   editTodo : (state,action) => {
  let findEdit  = state.todos.find((todo) => todo.id === action.payload.id);

  if(findEdit){
    findEdit.title = action.payload.title
  }
   },
   deleteTodo : (state,action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload)
   }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, editTodo, deleteTodo } = todo5Slice.actions

export default todo5Slice.reducer