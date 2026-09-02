import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Swal from 'sweetalert2'

const Login = () => {
const [form,setForm] = useState({
    email : "",
    password : ""
})

const handleChange = (value,feild) => {
setForm((prev) => ({...prev , [feild] : value}))

}

const loginHandler = () => {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(form.email.trim() === ""  || form.password.trim() === ""){
          return (
             Swal.fire({
              icon: "error",
              title: "Error",
              text: "Please Fill all Feilds!!",
              // footer: "<a href=\"#\">Why do I have this issue?</a>"
            })
          )
         }
         if(form.password.length < 8){
          console.log(form);
          
              return (
                 Swal.fire({
              icon: "error",
              title: "Error",
              text: "Password must be 8 chracters long!",
              // footer: "<a href=\"#\">Why do I have this issue?</a>"
            })
              )
            
            }if(!emailRegex.test(form.email.trim())){
            return (
                Swal.fire({
              icon: "error",
              title: "Error",
              text: "Please Enter a  Valid Email!",
              // footer: "<a href=\"#\">Why do I have this issue?</a>"
            })
            )
            }
  
            console.log(form);
             Swal.fire({
              icon: "success",
              title: "Success",
              text: " Successfully SignUp!",
              // footer: "<a href=\"#\">Why do I have this issue?</a>"
            })

    console.log("Milgya Bhai" , form);
    
}
// console.log(form);

  return (
    <div className='flex justify-center  items-center h-screen flex-col gap-7'>
        <h1 className='text-4xl font-bold italic'>Login</h1>
      <div className='shadow-xl h-[300px] rounded-lg w-[370px] p-3 flex flex-col gap-7 border items-center justify-center'>
    <Input placeholder={"Enter Your Email"} type={"email"} handler={handleChange}/>
    <Input placeholder={"Enter Your Password"} type={"password"} handler={handleChange}/>
     <Button btn={"Login"} handler={loginHandler} />
      </div>
      
    </div>
  )
}

export default Login
