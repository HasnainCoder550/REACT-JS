import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
import ThemeContext from '../Context/ThemeContext'

const User = () => {
 const data = useContext(UserContext)
 const [theme , toggleTheme] = useContext(ThemeContext)
 console.log(data);


  return (
    <div className={`flex h-[100vh] p-3 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}` }>
        This Is a User Component Context API Page <br />  UserName : {data.name} <br /> Email : {data.email}
    </div>
  )
}

export default User
