import React from 'react'

const  Navbar = () => {

    let lists = ["HOME" , "PRODUCTS" , "CARDS" , "SERVICES" , "ABOUT" , "CONTACTS"]
  return (
    <div className='h-[80px] bg-[#217b7e] flex justify-between'>
      <div className='w-[400px]  h-[80px] flex justify-center items-center'>
    <h2 className='text-4xl font-bold italic text-white text-shadow text-shadow-lg'>Cards UI</h2>
      </div>
      <div className='h-[80px] w-[800px]   flex items-center'>
     <ul className='flex justify-between px-6 items-center gap-[70px] italic text-white'>
        {lists.map((item) => {
        return <li className='hover:cursor-pointer'>{item}</li>
        // console.log(item);
        
        })}
     </ul>
      </div>
    </div>
  )
}

export default Navbar
