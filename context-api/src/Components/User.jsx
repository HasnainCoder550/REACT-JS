import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import ThemeContext from '../Context/ThemeContext'

const User = () => {
    const data = useContext(UserContext)
    const [theme, toggleTheme] = useContext(ThemeContext);
    return (
        <div className={ ` font-bold h-screen p-4 text-lg ${theme == "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}>
            <button onClick={toggleTheme} className='mb-3'>Change Background</button>
            <br />
            This Is a User Context API Page..
            
            Name : {data.name} Email :  {data.email}
        </div>
    )
}

export default User
