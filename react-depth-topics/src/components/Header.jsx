import React from 'react'
import HeaderList from './HeaderList'

const Header = ({title}) => {
  return (
    <div className='h-[60px] w-full bg-red-500 text-white flex items-center p-3 text-lg justify-between'>
      {title}
      <HeaderList title="Navbar">
       <li>Portfolio</li>
       <li>Contact</li>
       <li>Products</li>
      </HeaderList>
    </div>
  )
}

export default Header
