import React from 'react'
import { getAuth , signOut } from 'firebase/auth'
const auth = getAuth()
import app from '../firebase/config'




const Home = () => {
  const logoutHandler = () => {
  signOut(auth)
  }
  return (
   <>
    <div className='flex gap-5  justify-center items-center h-[40px] w-full'>
     <p>This Is Home / Main Page</p>
    <button onClick={logoutHandler}>Logout</button>
    </div>
    </>
  )
}

export default Home
