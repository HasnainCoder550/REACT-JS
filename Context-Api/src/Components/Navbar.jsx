import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import UserContext from '../Context/UserContext'

const Navbar = () => {
  const [theme,toggleTheme] = useContext(ThemeContext)
  const data = useContext(UserContext)
  console.log(data);
  
  return (
    <>
    <div className={`flex justify-between p-4 font-bold items-center ${theme == "light" ? "bg-white text-black" : `bg-black text-white`}`}>
      <div className='flex gap-5'>
      Navbar
      <button onClick={toggleTheme}>Toggle Theme : {theme}</button>
</div>
      <div>
        <ul className='flex gap-5'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>PortFolio</li>
          <li>Details</li>
        </ul>
    </div>
    </div>
    <hr className={`${theme == "light" ? "text-black" : "text-white"}`}/>
    </>
  )
}

export default Navbar
