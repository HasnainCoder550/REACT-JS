import React, { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0)

  const incrementHandler = () =>{
    setCount(count + 1)
    
    }

   const DecrementHandler = () => {
    setCount(count - 1)

    // if(count ===0){
    //   return
    // }else{
    //   setCount(count - 1)
    // }
   } 
  const resetHandler = () => {
    setCount(0)
  }

  return (
    <>
    <div className='h-[100vh]  flex items-center justify-center flex-col gap-[30px]'>
      <h1 className='text-4xl italic font-bold  text-shadow-green-400 text-shadow-lg' >
        Counter App
      </h1>
   <div className='h-[400px] w-[340px] bg-white  rounded-xl shadow-2xl flex flex-col justify-evenly items-center relative'>
   <label className="absolute top-4 right-6 cursor-pointer select-none">
  <input type="checkbox" className="peer hidden" />
  
  <span id="reset" className="inline-block text-3xl text-gray-400 transform transition-transform duration-500 ease-in-out peer-checked:rotate-[360deg]" onClick={resetHandler}>
    ↺
  </span>
</label>

   <h1 className={`text-6xl font-bold font-mono ${count < 0 ? "text-red-500" : "" } ${count == 0 ? "text-gray-500" : "text-green-500"} `}>{count}</h1>
   <div className='flex gap-[20px]'>
    <Button incrementHandler={incrementHandler} DecrementHandler={DecrementHandler} />
   </div>
   </div>
   
    </div>
    </>
  )


}


const Button = ({incrementHandler,DecrementHandler}) => {  
  return (
    <>
    <button className='text-lg h-[40px] w-[120px] rounded-lg bg-red-500 text-white italic' onClick={DecrementHandler}>Decrement</button>
    <button className='text-lg h-[40px] w-[120px] rounded-lg bg-green-500 text-white italic' onClick={incrementHandler}>Increment</button>
    </>
  )
}

export default App

