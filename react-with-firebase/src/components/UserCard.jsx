import React, { useState } from 'react'
import { doc, deleteDoc , getDoc} from "firebase/firestore";
import { db } from '../firebase/config';

const UserCard = ({data,setIsEditUser , setEditUserData }) => {


// console.log(setEditUserData);


  const getUserDoc = async (id) => {
    try {
        const docRef = doc(db, "users", id);
  
        // 2. Fetch the snapshot of the document
        const docSnap = await getDoc(docRef);
      
        // 3. Check if the document exists before accessing data
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setEditUserData({...docSnap.data() , id : docSnap.id})
        //   console.log("Document ID" , docSnap.id);
          
        } else {
          console.log("No such document found!");
          return null;
        }
      
    } catch (error) {
        console.log(error);
        
    }
  };
    
  const editHandler = async () => {
    setIsEditUser(true);
    console.log(data.id);
    
    getUserDoc(data.id)
}

    const deleteHandler = async(id) => {
   try {
    console.log("userDeleted Successfully" , id);
    
    await deleteDoc(doc(db, "users", id));
   } catch (error) {
    console.log(error);
    
   }
    }

    // console.log(data);
    
  return (
    <div className='border p-4 rounded-lg h-[150px] w-[350px] flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-bold mb-2'>UserName : {data.username}</h1>
      <p>Email : {data.email}</p>
      <p>Age : {data.age}</p>

      <button onClick={editHandler}>Edit</button>
      <button onClick={() => deleteHandler(data.id)}>Delete</button>
    </div>
  )
}

export default UserCard
