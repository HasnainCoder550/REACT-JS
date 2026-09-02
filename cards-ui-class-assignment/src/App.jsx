// import React, { useState } from 'react'
// import Navbar from './components/navbar.jsx'
// import Card from './components/card.jsx'
// import Tung from './components/Tung.jsx'
// const App = () => {

//   // let age = 45;
//   // if(age  && age ===45){
//   // age =65;
//   // console.log(age);
  
//   // }

//   const [username , setUsername] = useState({})
//   // console.log(username);
  
//   const userHandler = () => {
//    let u =  setUsername({name : "Hasnain" , email : "codermhasnain@gmail.com" , password : "*********"})
//     // console.log(u);
//     console.table(username)
//   }

//   return (
//     <>
//    {/* <Navbar />
//     <Card /> */}
//   <div>
//     <button onClick={userHandler}>Click</button> 
//   </div>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Tung from './components/Tung.jsx'

// const App = () => {
//   return (
//     <div>
//       <Tung h={"User"} userName={"Muhammad Hasnain"} email={"codermhasnain@gmail.com"}/>
//       <Tung h={"User"} userName={"Muhammad Umair"} email={"umair@gmail.com"}/>
//       <Tung h={"User"} userName={"Muhammad Anas"} email={"anaskhan@gmail.com"}/>
//       <Tung h={"User"} userName={"John Doe"} email={"JohnDoe@gmail.com"}/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Tung from './components/Tung'

const App = () => {
  let arr = ["Hasnain" , "Umair" , "Lala" , "Khansaab" , "Chacha" , "JohnDoe"]
  return (
    <div>
      <Tung userName={
        arr.map((item) => item)
      } />
    </div>
  )
}

export default App
