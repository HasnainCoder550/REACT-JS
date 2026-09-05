import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Dashboard from './Pages/Dasboard/Dashboard'
import User from './Pages/User'
import Job from './Pages/Job'
import Profile from './Pages/Profile'
import AnotherUser from './Pages/AnotherUser'
import UserDetailPage from './Pages/UserDetailPage'
import CourseStudent from './Pages/CourseStudent'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    {/* Simple Routing  */}
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
       

       {/* Nested Routing  */}
       <Route path='/dashboard' element={<Dashboard />} >
       <Route path='users' element={<User />} />
       <Route path='jobs' element={<Job />} />
       <Route path='profiles' element={<Profile />} />
       </Route> 

       {/* Dynamic Routing  */}
       <Route path='user' element={<AnotherUser />}/>
       <Route path='user/:id' element={<UserDetailPage />}/>


    {/* Dynamic Nested Routing */}
   <Route path='/course/:courseName/Students' element={<CourseStudent />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
