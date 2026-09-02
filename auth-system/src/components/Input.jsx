import React from 'react'

const Input = ({placeholder,type,handler}) => {
    // console.log(type);
    
  return (
    <div>
      <input  type={type} placeholder={placeholder} className='h-[40px] italic pl-2 border w-[300px] outline-none rounded'  onChange={(e) => handler(e.target.value, type)}/>
    </div>
  )
}

export default Input
