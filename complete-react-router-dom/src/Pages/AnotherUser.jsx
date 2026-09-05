import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'
import { Link } from 'react-router-dom'

const AnotherUser = () => {
const [user , setUser] = useState([])

    useEffect(() => {
      async function getUserData() {
        const result = await axios.get(`https://dummyjson.com/users`)  
      // console.log(result.data.users)
      setUser(result.data.users)
      }

      getUserData()

    } ,[])
  return (
   

   <>
   <h1 className='text-3xl mt-3 italic font-bold text-center'>Users</h1>
    <div className='p-3 flex flex-wrap justify-around '>
{user.length > 0 ? user.map((u) => <Link key={u.id} to={`/user/${u.id}`}><UserCard data={u} /></Link> ) : <p className='text-center text-2xl font-bold'>No User Found</p>}
    </div></>
  )
}

export default AnotherUser


const UserCard = ({data}) => {
    return(
        <div className='bg-gray-800 text-white text-bold p-3 w-[340px] h-[100px] rounded mb-3'>
      <h1>UserName : {data.firstName} {data.lastName}</h1>  
      <p>Email : {data.email}</p>  
    </div>
    )
}