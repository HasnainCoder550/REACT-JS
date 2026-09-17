import { Box,  Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { ToastContainer, toast } from 'react-toastify';

import GoogleIcon from '@mui/icons-material/Google';
import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { Link } from 'react-router-dom';
import SigninWithGoogle from '../../components/SigninWithGoogle';
// import { GoogleAuthProvider } from "firebase/auth";



const Login = () => {


const [form,setForm] = useState({
  email: "",
  password : "",
})

const handleInputChange = (value,key) => {
  console.log("Handler Chala",value,key)
  setForm((prev) => ({...prev , [key] : value}))
}

const LoginHandler = async() => {
console.log(form);

try {
 let response = await signInWithEmailAndPassword(auth, form.email, form.password)
 console.log(response);
 if(response.user){
  toast.success(` Login SuccessFully!`)
 }
 
} catch (error) {
  console.log(error.message);
  toast.error("Invalid Credentials!")
  
}




}

// const signupWithGoogleHandler = async( )=>{
  
//  try {
//   const provider = new GoogleAuthProvider();
//   let response = await signInWithPopup(auth, provider);
//   console.log(response);

//   if(response.user){
//     toast.success(`Login SuccessFully!`)
//    }

// } catch (error) {
//   console.log(error);
//   toast.error("Email Already In Use!")

  
//  }
   
// }


  return (
 <>
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }}>
        <Paper
        elevation={2}
        sx={{
            padding:"10px",
            width:"400px"

        }}>
       <h1 className='text-3xl font-bold text-center mb-3'>Login </h1>

    <Box>
      <Input handler={handleInputChange} label={"Enter Your Email"} type={"email"}value={form.email}/>
      <Input handler={handleInputChange} label={"Enter Your Password"} type={"password"} value={form.password}/>

      <Box className="flex justify-center gap-4 mb-5 mt-4">
      {/* <Button  title={"SignUp With Google"} handler={signupWithGoogleHandler} icon={<GoogleIcon/>}/> */}
      <SigninWithGoogle title={"Login WIth Google"} status={"User Login Successfully!"}/>
      <Button handler={LoginHandler} title={"Login"}/>
      </Box>
      <Link to={"/signup"}><Typography className='text-center'>Don't Have an Account?, Signup</Typography></Link>
    </Box>

    </Paper>
    </Box>
    <ToastContainer />
    </>
  )
}

export default Login
