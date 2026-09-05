import React from 'react'
import Navbar from './Components/Navbar'
import {ThemeProvider} from "./Context/ThemeContext"
import UserContext, { UserProvider } from './Context/UserContext'
import User from './Components/User'
const App = () => {
  return (
    <ThemeProvider>
    <UserProvider>
    <Navbar />
    <User />
    </UserProvider>
    </ThemeProvider>
  )
}

export default App
