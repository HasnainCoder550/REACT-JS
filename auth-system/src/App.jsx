import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
let list = ["Home" , "Projects" , "About" , "Contact"]
console.log(list);

  return (
    <div>
      <Navbar listItems={list}/>
    </div>
  )
}

export default App
