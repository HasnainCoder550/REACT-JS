import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import CreateBlogModal from "../components/CreateBlogModal"


const Blog = () => {
  return (
    <>
    <Navbar  />
    
    <CreateBlogModal />
    </>
  )
}

export default Blog
