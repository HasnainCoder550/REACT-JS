import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import Button from '../components/Button'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { auth } from '../firebase/config';
import { saveDataIntoDB } from '../Pages/Auth/Signup';
import { useNavigate } from 'react-router-dom';
// import GoogleIcon from '@mui/icons-material/Google';


const SigninWithGoogle = ({title , status}) => {
const nav = useNavigate()
   const signupWithGoogleHandler = async( )=>{
     
    try {
     const provider = new GoogleAuthProvider();
     let response = await signInWithPopup(auth, provider);
     console.log(response);
     if(response.user){
       saveDataIntoDB("",response.user)
       toast.success(status)
       nav("/")
      }
   
   } catch (error) {
     console.log(error);
     toast.error("Email Already In Use!")
   
     
    }
      
   }
    
  return (
    <Button  title={title} handler={signupWithGoogleHandler} icon={<GoogleIcon/>}/>
  )
}

export default SigninWithGoogle
