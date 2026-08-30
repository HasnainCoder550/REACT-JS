import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
// import Sweety from '../components/AlertBox'
// import AlertBox from '../components/AlertBox'
import Swal from 'sweetalert2'
const SignUp = () => {
const [form,setForm] = useState({
    username : "",
    age : "",
    email : "",
    password : "",
    
})
    const handleChange = (value,feild) => {
    console.log(feild);

    setForm((prev) => ({...prev , [feild] : value}) )
    // console.log(prev);

    // value = " "
    
    }

    const registerHandler = () => {
       let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


       if(form.email.trim() === "" || form.username.trim() === "" || form.password.trim() === ""
      || form.age.trim() === ""){
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
      //  setForm(form.username = " ")
      
    }


  return (
    <div className='h-screen w-full justify-center items-center flex flex-col gap-7 '>
        <h1 className='text-4xl font-bold italic'>SignUp</h1>
      <div className='h-[400px] w-[390px] rounded-lg shadow-lg border justify-center items-center gap-7 flex flex-col'>
      <Input placeholder={"Enter Your UserName"} handler={handleChange} type={"username"}/>
      <Input placeholder={"Enter Your Age"} handler={handleChange} type={"age"}/>
      <Input placeholder={"Enter Your Email"} handler={handleChange} type={"email"}/>
      <Input placeholder={"Enter Your Password"} handler={handleChange} type={"password"}/>
      <Button btn={"SignUp"} handler={registerHandler}/>
      </div>
    </div>
  )
}

export default SignUp
