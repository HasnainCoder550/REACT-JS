import React from 'react'
import Navbar from './Components/Navbar'
import { ThemeProvider } from './Context/ThemeContext'
import { UserProvider } from './Context/UserContext'
import User from './Components/User'

const App = () => {
  return (
    <div>
    <ThemeProvider>
      <UserProvider>
   9
      <Navbar />
      <User />
      </UserProvider>
    </ThemeProvider>
    </div>
  )
}

export default App
