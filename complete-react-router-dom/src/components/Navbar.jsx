import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-800 flex justify-around p-4 items-center'>
      
    <h1 className='text-white  font-bold text-2xl'>React-Router-Dom</h1>
      <ul className='flex gap-5 text-white font-bold cursor-pointer'>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <Link to={"/contact"}><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
