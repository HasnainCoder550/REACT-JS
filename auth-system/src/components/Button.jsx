import React from 'react'

const Button = ({btn,handler}) => {
  return (
    <>
      <button onClick={handler} className=' cursor-pointer border p-1 w-[90px] rounded bg-black text-white italic'>{btn}</button>
    </>
  )
}

export default Button
