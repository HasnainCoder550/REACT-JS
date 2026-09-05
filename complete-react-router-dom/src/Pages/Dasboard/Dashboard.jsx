import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        {/* Navbar  */}
        <div className='bg-gray-800 text-white text-2xl font-bold p-3 italic'>
            <h1>Dashboard</h1>
        </div>
        {/* main content */}
    <div className='h-screen flex'>
        {/* Side Bar  */}
   <div className='w-[23%] bg-green-600 h-screen p-3 text-white font-bold italic text-lg'>
  <ul>
    <Link to={"users"}><li>Users</li></Link>
    <Link to={"jobs"}><li>Jobs</li></Link>
    <Link to={"profiles"}><li>Profiles</li></Link>
  </ul>
   </div>
   {/* Main Body  */}
   <div className='bg-red-500 w-full h-screen'>
 {/* Card Parent  */}
  <div className='flex gap-5 mt-3 p-2 justify-center items-center'>
  <div className='bg-gray-800 h-[100px] w-[250px] rounded'></div>
  <div className='bg-gray-800 h-[100px] w-[250px] rounded'></div>
  <div className='bg-gray-800 h-[100px] w-[250px] rounded'></div>
  <div className='bg-gray-800 h-[100px] w-[250px] rounded'></div>
  </div>
  {/* UI ALL Changing   */}
  <div className='p-3 text-white mt-3'>
    {/* Ye Mera UI Component Change Hoga... */}
  <Outlet />
  </div>
   </div>

    </div>

    </div>
  )
}

export default Dashboard
