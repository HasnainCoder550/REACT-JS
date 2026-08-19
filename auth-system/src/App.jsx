import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AlertBox from './components/AlertBox';

const App = () => {
let list = ["Home" , "Projects" , "About"]
// console.log(list);

  return (
<>



{/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />


          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/alert" element={<AlertBox />} /> */}
      </Routes>
      </BrowserRouter>
</>
  )
}

export default App
