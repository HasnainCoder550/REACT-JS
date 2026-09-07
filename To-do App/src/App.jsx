import React, { useState } from 'react'
import {ToastContainer, toast } from 'react-toastify';

const App = () => {
const [todos,setTodos] = useState([]);
const [input,setInput] = useState("");
const [editTodo,setEditTodo] = useState(null);
// console.log(input);
// console.log(todos);
const toastHandler = (message) => {
  console.log(message);
  
  toast(message);
}

const addHandler = () => {
// console.log(id);
if(!input){
  return toastHandler("Please Enter a Task!")
}

if(todos){
const existingUser = todos.map((todo) => todo.title.includes(input));
// console.log(existingUser);

if(existingUser[0]) {
return toastHandler("Task Already Added!")

}  
}

if(todos.length > 4){
 toastHandler("Only Five Tasks Added at a Time!")
 return
   
}

  const todoItem = {
    title : input,
    id : Date.now()
  }
  setTodos((prev) => [ ...prev ,todoItem ]);
  setInput("")
toastHandler("Task Added Successfully")

  if(editTodo){
   const updateTodo =  todos.map((item) => item.id == editTodo ? {...item , title : input} : item);
   setTodos(updateTodo);
   setEditTodo(null);
   setInput("");
   toastHandler("Task Updated SuccessFully")

  }
}



const editTodoHandler = (id) => {

const editItem = todos.find((task) => task.id === id);
console.log(editItem);

setEditTodo(editItem.id);
setInput(editItem.title);

}


const deleteHandler = (id) => {
const deleteTodo = todos.filter((i) => i.id !== id);
setTodos(deleteTodo)
setInput("")
setEditTodo(null)
toastHandler("Task Deleted Successfully!")
}

const deleteAllHandler = () => {  
  setTodos([]);
  setInput("");
  setEditTodo(null)
  
}
  return (
    <div className='h-screen bg-slate-950 flex flex-col justify-center items-center gap-3 w-full'>
      <h1 className='text-slate-100  text-3xl '>To-do Application</h1>
      <p className='text-red-600 text-sm cursor-pointer' onClick={() => deleteAllHandler()}>{todos.length > 0 ? "DeleteAll" : ""}</p>
      <div className='w-[380px]  bg-slate-900 border border-white p-3 rounded-md'>
      <div className='flex gap-2'>
        <input type="text" placeholder='Enter Your Task' className='text-slate-100 border-white border h-[38px] pl-2 w-[100%] p-2 rounded-md outline-none' onChange={(e) => setInput(e.target.value)} value={input}/>
        <button className=' h-[38px] bg-slate-900 text-white border border w-[27%] rounded-md hover:bg-slate-700 hover:text-white cursor-pointer' onClick={() => addHandler()}>
          {editTodo ? "Update" :  "Add"} 
        </button>

      </div>
      {/* CardParent  */}
    <div className='Parent'>
      {/* todo */}
    
   {todos.length > 0 ? todos.map((tds) => <TODO key={tds.id} data={tds} deleteHandler={deleteHandler} editTodoHandler={editTodoHandler} /> ) : <p className='text-white p-3 text-center'>No Tasks Added Yet!</p>}
    </div>
    
      </div>
<ToastContainer />
    </div>
  )
}

export default App


const TODO = ({data,editTodoHandler , deleteHandler}) => {
  return (
    <div className='flex justify-between mt-3 border border-white p-2 rounded-md bg-slate-950'>
    <div>
      <p className='text-white'>{data.title}</p>
    </div>
    <div className='flex gap-3'>
      <button className='text-green-600' onClick={() =>editTodoHandler(data.id) }>Edit</button>
      <button className='text-red-600' onClick={() => deleteHandler(data.id)}>Delete</button>
    </div>
      </div>
  )
}