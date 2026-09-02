import React, { useState } from 'react'

const App = () => {

const [count , setCount] = useState(0);
// console.log(count);

// const HandlerDecrement = () => {
//   if(count == 0) {
//     return 
//   }else{

//     setCount(count -1)
//   }

 

// }


  return (
    <>
    <h1 className='text-white text-5xl text-center mb-10 text-shadow-white text-shadow-md font-bold italic'>Counter App</h1>
    <div className='h-[350px] w-[350px]  rounded-lg flex text-white flex-col justify-evenly items-center border border-white'>
   <h1 className= {`${count < 0 ? "text-red-500" : "" } ${count == 0 ? "text-gray-500" : "text-green-500"} } font-bold text-5xl `}>{count}</h1>
   <div className='flex gap-[30px]'>
    <button onClick={() => setCount(count - 1)} className='py-2 px-4 border border-white rounded-md bg-red-500 hover:bg-red-800 cursor-pointer'>Decrement</button>
    <button onClick={() => setCount(count + 1)}  className='py-2 px-4 border border-white rounded-md bg-green-500 hover:bg-green-800 cursor-pointer'>Increment</button>
   </div>
   <div>
   <button onClick={() => setCount(0)}  className='py-2 px-4 border border-white rounded-md bg-gray-500 hover:bg-gray-800 cursor-pointer'>Reset</button>
   </div>
    </div>
    </>
  )
}

export default App
