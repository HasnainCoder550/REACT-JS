import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';
import { Navigate, useNavigate } from 'react-router-dom';




const ProtectedRoute = ({ children }) => {
  const [existUser, setExistUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const getUserData = async () => {



    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(user);

          setExistUser(user)
          
          // ...
        } else {
          setExistUser(null)
        }

        setLoading(false)
      });
    }
    catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUserData()
    
    return () => getUserData()
  }, [])
  
  if (loading) {
    return <h1>Loading User...</h1>
  }
  
  console.log(existUser);
  if (existUser) {
    return children
  } else {
    return <Navigate to={"/login"} />
    console.log("Ponka")
  }

}

export default ProtectedRoute
