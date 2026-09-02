import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import UserContext from '../Context/UserContext';



const Navbar = () => {
    const [theme,toggleTheme] = useContext(ThemeContext);
    const data = useContext(UserContext);
    console.log(data);
    
  return (
    <>
    <div className={`p-4  flex justify-around font-bold items-center ${theme === "light" ? `bg-white text-black` : "bg-gray-700 text-white"}`}>
        <div className='text-2xl '>
            <button onClick={toggleTheme} className='cursor-pointer'>Toggle Theme : {theme}</button>
            </div>
        <div>
            <ul className='flex gap-10 '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Portfolio</li>
                <li>Hire me</li>
            </ul>
        </div>
        
    </div>
    <hr className={` ${theme == "light" ? "text-black"  : "text-white"}`}/>
    </>
  )
}

export default Navbar
