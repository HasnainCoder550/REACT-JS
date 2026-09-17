import { Box,  Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { ToastContainer, toast } from 'react-toastify';
import { doc, setDoc } from "firebase/firestore"; 
import SigninWithGoogle from "../../components/SigninWithGoogle"

import GoogleIcon from '@mui/icons-material/Google';
import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { Photo } from '@mui/icons-material';
// import { GoogleAuthProvider } from "firebase/auth";



 export const saveDataIntoDB = async (name = "",data) => {
  console.log(data);
  
  try {
  await setDoc(doc(db, "users", data.uid), {
      email : data.email,
      name : name ? name : data.displayName,
      photoURL : data.photoURL ? data.photoURL : ""
    });
    // console.log(userDataSaved);
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
    
  }
}




const Signup = () => {


const [form,setForm] = useState({
  email: "",
  password : "",
  username : "",
})

const handleInputChange = (value,key) => {
  console.log("Handler Chala",value,key)
  setForm((prev) => ({...prev , [key] : value}))
}



const SignupHadnler = async() => {
console.log(form);

try {
 let response = await createUserWithEmailAndPassword(auth, form.email, form.password , form.username );
 console.log(response);
 if(response.user){
   saveDataIntoDB(form.username,response.user)
  toast.success("User SignUp Successfully")
 }
 
} catch (error) {
  console.log(error.message);
  toast.error("Email Already Exits")
  
}




}

// const signupWithGoogleHandler = async( )=>{
  
//  try {
//   const provider = new GoogleAuthProvider();
//   let response = await signInWithPopup(auth, provider);
//   console.log(response);

//   if(response.user){
//     toast.success(`${response.user.displayName ? response.user.displayName : form.username} Signup SuccessFully!`)
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
       <h1 className='text-3xl font-bold text-center mb-3'>Signup </h1>

    <Box>
      <Input handler={handleInputChange} label={"Enter Your UserName"} type={"username"} value={form.username}/>
      <Input handler={handleInputChange} label={"Enter Your Email"} type={"email"}value={form.email}/>
      <Input handler={handleInputChange} label={"Enter Your Password"} type={"password"} value={form.password}/>

      <Box className="flex justify-center gap-4 mb-5 mt-4">
      {/* <Button  title={"SignUp With Google"} handler={signupWithGoogleHandler} icon={<GoogleIcon/>}/> */}
      <SigninWithGoogle  title={"Signup With Google"} status={"User Signup Successfully"}/>
      <Button handler={SignupHadnler} title={"SignUp"}/>
      </Box>
      <Link to={"/login"}><Typography className='text-center'>Don't Have an Account?, Login</Typography></Link>
    </Box>

    </Paper>
    </Box>
    <ToastContainer />
    </>
  )
}

export default Signup
