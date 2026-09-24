import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

import AddIcon from '@mui/icons-material/Add';const App = () => {
const dispatch = useDispatch();
const count = useSelector((state) => state.counter.value)


  return (
  <>
   <div className='flex justify-center items-center h-screen bg-indigo-300'>
     <div className='w-[400px] border p-3 flex justify-center items-center flex-col gap-10 rounded-2xl'>
     <h1 className='text-3xl font-extrabold text-center italic'>Redux-Counter</h1> 
     <p className={`${count > 0 ? "text-green-600" : "text-gray-600" } ${count < 0 ? "text-red-600" : ""} text-5xl font-extrabold text-center`}>{count}</p>


     <div className='flex gap-20 '>
      <button className=' bg-red-600 rounded-4xl  flex items-center text-white p-2' onClick={() => {dispatch(decrement())}}><RemoveIcon /></button>
      <button className='bg-green-600 rounded-4xl flex items-center text-white p-2' onClick={() => {dispatch(increment())}}><AddIcon /> </button>
     </div>
      <button className='p-2 text-white bg-gray-600 rounded-4xl items-center' onClick={() => {dispatch(reset())}}><ClearIcon /></button>
    </div>
   </div>
   </>
  )
}

export default App
