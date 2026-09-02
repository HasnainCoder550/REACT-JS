import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Dashboard = () => {
    let list = ["Home" , "Projects" , "About"]
  return (
    <div>
      <Navbar listItems={list}/> 
      {/* <Navbar */}
      <Hero />
    </div>
  )
}

export default Dashboard
