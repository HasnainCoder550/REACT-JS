import React from 'react'
import Button from './Button';

const Navbar = (list) => {
    // console.log(list);
    const handler = () => {
        
    }
  return (
    <>
    <div className='h-[70px] w-full shadow-lg flex justify-between p-3 items-center text-lg'>
        <div>
            <h1 className='text-2xl italic'>Admin Dashboard</h1>
        </div>
        <div>
        <ul className='flex  gap-8 italic'>
       {list.listItems.map((item,id) =>  (
        <li key={id}>{item}</li>
       ))}
        </ul>
        </div>
        <div className='flex gap-4'>
            <Button btn={"SignUp"} />
            <Button btn={"Login"} />
        </div>
    </div>
    </>
  )
}

export default Navbar
