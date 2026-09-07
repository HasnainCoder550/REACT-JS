import React, { useEffect, useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase/config';



const EditUserModal = ({ setIsEditUser , editUserData }) => {
    const [username, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")
    // const [loading,setLoading] = useState(true);


    const updateUser = async (id) => {
    try {
        await setDoc(doc(db, "users", id), {
            email,
            password,
            age,
            username
            
        });
        setIsEditUser(false)
        // setLoading(false)
        console.log("user updates successfully",editUserData)
    } catch (error) {
        console.log(error);
        
    }
    }

    useEffect(() => {
        
            setEmail(editUserData.email || "")
            setPassword(editUserData.password || "")
            setAge(editUserData.age || "")
            setuserName(editUserData.username || "")
    },[editUserData])

    // setLoading(false);
    return (
        <div>
            <div className='h-screen bg-black flex justify-center items-center flex-col gap-8 italic fixed top-0 left-0 right-0 bottom-0 text-white'>
                <h1 className='text-4xl italic font-bold text-slate-100 font-stretch-semi-condensed '>Update</h1>
                <div className='border border-white rounded-lg shadow-2xl p-6 flex flex-col gap-4 justify-center items-center'>
                    <div>
                        <input value={username} onChange={(e) => setuserName(e.target.value)} type="text" placeholder='Enter Your username' className='border h-[40px] border-white text-white outline-none pl-2 rounded' />
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='border h-[40px] border-white text-white outline-none pl-2 rounded' />
                    </div>
                    <div>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' className='border h-[40px] border-white text-white outline-none pl-2 rounded' />
                    </div>
                    <div>
                        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder='Enter Your Age' className='border h-[40px] border-white text-white outline-none pl-2 rounded' />
                    </div>


                    <button onClick={() => updateUser(editUserData.id)} className='border w-[100%] border-white text-white rounded hover:bg-slate-200 hover:text-slate-700 cursor-pointer mt-4 h-[30px]'>Update User</button>
                    <button onClick={() => setIsEditUser(false)} className='border w-[100%] border-white text-white rounded hover:bg-slate-200 hover:text-slate-700 cursor-pointer mt-4 h-[30px]'>Close</button>


                </div>

            </div>
        </div>
    )
}

export default EditUserModal
