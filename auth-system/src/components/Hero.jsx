import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Hero = () => {
const [users,setUsers] = useState([])

async function getData() {
  const apiRes = await axios.get("https://dummyjson.com/users")  
//    console.log(result);
   setUsers(apiRes.data.users)
  //  console.log(apiRes.data.users);
}

useEffect(() => {
getData()
},[])
// console.log(users);

  return (
    <>
    <h1 className='text-center text-4xl italic font-bold mt-4'>Users Data</h1>
     <div className='h-screen flex flex-wrap gap-[30px] justify-center italic'>
    {users.map((item) => (
        
    <Card key={item.id} data={item}/>
    ))}
    </div> 
    </>
  )
}

export default Hero
