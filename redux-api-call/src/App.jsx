import React, { useEffect } from 'react'
import UserCard from './components/userCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersStart, getAllUsersSuccess } from './featues/users/users'
import axios from 'axios'




const App = () => {
let users = useSelector(state => state.user.users);
console.log(users[2]);

const dispatch = useDispatch()


const getUserData = async () => {
  dispatch(getAllUsersStart())
try {
  const response = await axios.get(`https://auth-be-five.vercel.app/api/user`);
  console.log(response.data.data);
  
  dispatch(getAllUsersSuccess(response.data.data))
} catch (error) {
  console.log(error.message);
  
}
}

  useEffect(() => {
    getUserData()
  },[])
  return (
    <div className='bg-[#2a2a2a] h-[300vh] w-full text-white '>
      <h1>All Users</h1>

      <div className='flex flex-wrap justify-around'>
      {users[2].slice(0,10).map((u,idx) => <UserCard key={idx} user={u}/>)}
      </div>
    </div>
  )
}

export default App
