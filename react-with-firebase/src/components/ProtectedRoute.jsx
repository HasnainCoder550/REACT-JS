import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, } from 'react-router-dom';


const auth = getAuth();


const ProtectedRoute = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const getUser = () => {
        
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
            // console.log(user);/
            setUser(user)
            
          } else {
            // User is signed out
            
            setUser(null)
            // console.log(user);/
            // ...
          }
          setLoading(false)
        });
    }



useEffect(() => {

    getUser();
   return () => getUser();
    },[])


    if(loading){
        return <h1 className='text-center text-3xl font-bold'>Loading...</h1>
      }

if(user){
    // console.log(children);
    console.log(user);
    
    return children
}
else{
  return <Navigate to='/login' />


}
};

export default ProtectedRoute
