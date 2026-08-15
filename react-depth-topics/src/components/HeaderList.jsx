import React from 'react'

const HeaderList = ({title,children}) => {
  console.log(title);
  
  return (
    <div>
      <ul className='flex gap-8'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        {children}
      </ul>
    </div>
  )
}

export default HeaderList
