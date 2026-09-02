import React from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
{/* <Navbar /> */}

      Dashboard


<div>

    {[
        {
            name : "profile",
            url : "profile"
        },{
            name : "setting",
            url : "setting"
        }
    ].map((item,idx) => (
         <Link key={idx} to={item.url} >
            {/* {" "} */}
    <li >{item.name}</li>
    </Link>
    ) )}
   
</div>

      <Outlet />
    </div>
  )
}

export default Dashboard
