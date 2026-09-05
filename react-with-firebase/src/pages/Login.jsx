import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';

const auth = getAuth(app)
// console.log(auth);


const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
// const [user,setUser] = useState(null)

const navigate = useNavigate();
// console.log(navigate);

//  console.log(email,password,username);

const loginHandler = () => {

// const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    
    if(user){
      navigate("/")
      // console.log(user);
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode,errorMessage);
    
  });

 
  }
  return (
    <div className='h-screen bg-slate-500 flex justify-center items-center flex-col gap-8 italic'>
        <h1 className='text-4xl italic font-bold text-slate-100 font-stretch-semi-condensed '>Login</h1>
        <div className='border border-white rounded-lg shadow-2xl p-6 flex flex-col gap-4 justify-center items-center'>
  
       <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='border h-[40px] border-white text-white outline-none pl-2 rounded'/>
       </div>
       <div>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' className='border h-[40px] border-white text-white outline-none pl-2 rounded'/>
       </div>
       <button  onClick={loginHandler} className='border w-[100%] border-white text-white rounded hover:bg-slate-200 hover:text-slate-700 cursor-pointer mt-4 h-[30px]'>Login</button>
        
        <Link to={"/signup"}><button className='text-slate-100 hover:underline text-center cursor-pointer text-sm'>Already have an Account? , Signup</button></Link>
        </div>

    </div>
  )
}

export default Login
