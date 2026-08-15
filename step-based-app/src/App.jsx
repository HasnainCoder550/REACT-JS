import React, { useState } from 'react'

const App = () => {
let advices = ["Eating"  , "Coding" , "Sleeping" , "Repeat"]
  const [step,setStep] = useState(1)

  const prevHandler = () => {
    console.log(step);
    
    setStep(step - 1)
    step ===1 ? setStep(4) : setStep(step - 1)
  }

  const nextHandler = () => {
    console.log(step);
    
    setStep(step + 1)

    step === 4 ? setStep(1) : setStep(step + 1)
  }
  return (
    <>
    <div className='h-[200px] w-full flex justify-center items-center  relative bg-blue-200'>
      <ul className='flex h-[100px] w-full bg-white justify-evenly items-center '>
        <li className={` text-slate-600  text-lg rounded-full h-[40px] w-[40px] flex items-center justify-center ${step === 1 ? "bg-blue-200 border-blue-600" : ""} font-semibold`}>1</li>
        <li className={` text-slate-600  text-lg ${step === 2 ? "bg-blue-200 border-blue-600 text-blue-600" : "" } font-semibold rounded-full h-[40px] w-[40px] flex items-center justify-center`}>2</li>
        <li className={`text-slate-600 font-semibold text-lg ${step === 3 ? "bg-blue-200 border-blue-600 text-blue-600" : "" }  rounded-full h-[40px] w-[40px] flex items-center justify-center`}>3</li>
        <li className={`text-slate-600 font-semibold text-lg ${step === 4 ? "bg-blue-200 border-blue-600 text-blue-600" : "" }  rounded-full h-[40px] w-[40px] flex items-center justify-center`}>4</li>
      </ul>
    </div>
    <div className='h-[100px] w-full flex items-center justify-center '>
      <h2 className='h1 text-3xl text-blue-400 font-semibold '>Advice : {advices[step - 1]}</h2>
    </div>
    <div className='h-[70px] w-full flex items-center justify-evenly mt-20'>
      <button onClick={prevHandler} className={`h-[40px] w-[120px] bg-slate-100 text-slate-600 rounded-lg italic hover:bg-slate-300 cursor-pointer border border-slate-200`}>Previous</button>
      <button onClick={nextHandler} className='h-[40px] w-[120px] bg-blue-500 hover:bg-blue-700 text-white rounded-lg italic cursor-pointer'>Next</button>
    </div>
    </>
  )
}

export default App
