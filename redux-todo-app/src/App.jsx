import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {ToastContainer, toast } from 'react-toastify';
import { addTodo, deleteTodo, editTodo } from './features/todo/todoSlice';





const App = () => {
const dispatch = useDispatch();
const [input,setInput] = useState("");
const [isEditTodo,setIsEditTodo] = useState(null);



let todos = useSelector(state => state.todo.todos);
console.log(todos);

// console.log(input);
// console.log(todos);

const updateTodoHandler = () => {

dispatch(editTodo({
  id : isEditTodo,
  title: input
}))  
setIsEditTodo(null);
setInput("")
toast.success("Task Updated SuccessFully!")
}


const addHandler = () => {
// console.log(id);
if(!input){
  return toast.warning("Please Enter a Task!")
}

// edit Todo 
if(isEditTodo !== null){
return updateTodoHandler();
}

if(todos.length > 4){
  return toast.error("Only Five Tasks at a Time!")
}

// add todo 
dispatch(addTodo({
  id : new Date().getTime(),
  title : input,
}))
setInput("")
toast.success("Task Added Successfully!")
// console.log("chala");
// toastHandler("Task Added Successfully")

 
}




const editTodoHandler = (data) => {
console.log(data);
setInput(data.title)
setIsEditTodo(data.id)

}


const deleteHandler = (id) => {
dispatch(deleteTodo(id));
setIsEditTodo(null);
setInput("")
toast.success("Task Deleted Successfully!");
}


  return (
    <div className='h-screen bg-slate-950 flex flex-col justify-center items-center gap-3 w-full'>
      <h1 className='text-slate-100  text-3xl '>To-do Application</h1>
      <p className='text-red-600 text-sm cursor-pointer'></p>
      <div className='w-[380px]  bg-slate-900 border border-white p-3 rounded-md'>
      <div className='flex gap-2'>
        <input type="text" placeholder='Enter Your Task' className='text-slate-100 border-white border h-[38px] pl-2 w-[100%] p-2 rounded-md outline-none' onChange={(e) => setInput(e.target.value)} value={input}/>
        <button className=' h-[38px bg-slate-900 text-white border border w-[27%] rounded-md hover:bg-slate-700 hover:text-white cursor-pointer' onClick={addHandler}>
          {isEditTodo && isEditTodo ? "Update" :  "Add"} 
        </button>

      </div>
      {/* CardParent  */}
    <div className='Parent'>
      {/* todo */}
    
   {todos && todos.length > 0 ? todos.map((todo) => <TODO key={todo.id} editTodoHandler={editTodoHandler} data={todo}   deleteHandler={deleteHandler}/> )  : <p className='text-white p-3 text-center'>No Tasks Added Yet!</p>}
    </div>
    
      </div>
<ToastContainer />
    </div>
  )
}

export default App


const TODO = ({data,editTodoHandler , deleteHandler}) => {
  return (
    <div className='flex  justify-between mt-3 border border-white p-2 rounded-md bg-slate-950'>
    <div className='overflow-y-scroll scrollbar-none w-[70%] h-full'>
      <p className='text-white'>{data.title}</p>
    </div>
    <div className='flex gap-2'>
      <button className='text-green-600' onClick={() => editTodoHandler(data)}>Edit</button>
      <button className='text-red-600' onClick={() => deleteHandler(data.id)}>Delete</button>
    </div>
      </div>
  )
}