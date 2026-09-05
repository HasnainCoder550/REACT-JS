import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetailPage = () => {
  const {id} = useParams()
const [currentUser , setCurrentUser] = useState({})

   useEffect(() => {
        async function getUserData() {
          const result = await axios.get(`https://dummyjson.com/users/${id}`)  
        console.log(result.data)
        setCurrentUser(result.data)
        }
  
        getUserData()
  
      } ,[])

    // console.log(params);
    
  return (
   <div className='parent flex justify-center items-center h-screen '>
 <div className='border p-3 items-center flex flex-col justify-center text-center'>
     <div>
      <img src={currentUser.image} alt="" />
     </div>
     <div>
      <p>Name :{currentUser.firstName} {currentUser.lastName} </p>
      <p>Email : {currentUser.email}</p>
      <p>Gender : {currentUser.gender}</p>
     </div>
    </div>
   </div>
  )
}

export default UserDetailPage
