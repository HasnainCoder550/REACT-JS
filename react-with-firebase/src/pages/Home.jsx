import React, { useEffect, useState } from 'react'
import { getAuth , signOut } from 'firebase/auth'
import { collection, getDocs } from "firebase/firestore"; 
const auth = getAuth()
import app, { db } from '../firebase/config'
import UserCard from '../components/UserCard';
import EditUserModal from '../components/EditUserModal';




const Home = () => {
  const [isEditUser,setIsEditUser] = useState(false);
const [allUsers,setAllUsers] = useState([]);
const [editUserData, setEditUserData] = useState({});
const [users,setUsers] = useState([]);
console.log(editUserData);


// console.log(allUsers);

  const getUserData = async() => {
 try {
  const querySnapshot = await getDocs(collection(db, "users"));
let user = querySnapshot.docs.map((doc) => {
  // console.log(`${doc.id} => ${doc.data()}`);
return {
  id : doc.id,
  ...doc.data()
}
  // setAllUsers((prev) => [...prev , doc.data()])
});

// console.log(user);
setAllUsers(user)

 } catch (error) {
  console.log(error);
  
 }
  }



  useEffect(() => {
    getUserData()
  } , [])


  const logoutHandler = () => {
    signOut(auth)
    }
   
  return (
   <>
   <div>
    <nav>
    <div className='flex gap-5  justify-center items-center h-[40px] w-full'>
     <p>This Is Home / Main Page</p>
    <button onClick={logoutHandler}>Logout</button>
    </div>
    </nav>
{/* main area  */}

{/* card parent / */}
    <div className='flex items-center justify-center gap-4'>
 {allUsers.length > 0 ? allUsers.map((u) => <UserCard setEditUserData={setEditUserData} setIsEditUser={setIsEditUser}  key={u.id} data={u} />) : <p>Loading...</p>}
 
    </div>

{isEditUser && <EditUserModal  editUserData={editUserData} setIsEditUser={setIsEditUser} setUsers={setUsers}/>}

   </div>
    </>
  )
}

export default Home
