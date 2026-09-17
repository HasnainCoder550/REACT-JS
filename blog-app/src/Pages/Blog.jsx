import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'



const Blog = () => {
  return (
    <Navbar  />
  )
}

export default Blog
