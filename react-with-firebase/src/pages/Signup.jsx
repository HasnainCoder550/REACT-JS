import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';
const auth = getAuth(app)


const Signup = () => {
  const [username,setuserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const signupHandler = () => {
 console.log(email,password,username);

 const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(auth);
    console.log(userCredential);
    
    // Signed up 
    const user = userCredential.user;

    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    
    // ..
  });
 
  }
  return (
    <div className='h-screen bg-slate-500 flex justify-center items-center flex-col gap-8 italic'>
        <h1 className='text-4xl italic font-bold text-slate-100 font-stretch-semi-condensed '>Signup</h1>
        <div className='border border-white rounded-lg shadow-2xl p-6 flex flex-col gap-4 justify-center items-center'>
       <div>
      <input value={username} onChange={(e) => setuserName(e.target.value)} type="text" placeholder='Enter Your username' className='border h-[40px] border-white text-white outline-none pl-2 rounded'/>
       </div>
       <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='border h-[40px] border-white text-white outline-none pl-2 rounded'/>
       </div>
       <div>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' className='border h-[40px] border-white text-white outline-none pl-2 rounded'/>
       </div>
       <button  onClick={signupHandler} className='border w-[100%] border-white text-white rounded hover:bg-slate-200 hover:text-slate-700 cursor-pointer mt-4 h-[30px]'>Signup</button>
        
        <Link to={"/login"}><button className='text-slate-100 hover:underline text-center cursor-pointer text-sm'>Already have an Account? , Login</button></Link>
        </div>

    </div>
  )
}

export default Signup
