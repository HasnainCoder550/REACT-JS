import React from 'react'
import Button from './Button';

const Navbar = (list) => {
    console.log(list);
    
  return (
    <>
    <div className='h-[70px] w-full shadow-lg flex justify-between p-3 items-center'>
        <div>
            <h1 className='text-2xl '>Dashboard</h1>
        </div>
        <div>
        <ul className='flex  gap-8'>
       {list.listItems.map((item) =>  (
        <li>{item}</li>
       ))}
        </ul>
        </div>
        <div>
            <Button />
        </div>
    </div>
    </>
  )
}

export default Navbar
