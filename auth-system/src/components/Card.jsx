import React from 'react'

const Card = ({data}) => {
    // console.log(data);
    
  return (
    <>
       
       <div className=' mt-9 border border-green-700 shadow-lg rounded-lg h-[140px] w-[370px] p-3 flex flex-col gap-2'>
     <h1>UserName : {data.username} </h1>
     <p>Email : {data.email}</p>
     <p>Password : {data.password}</p>
       </div>
    </>
  )
}

export default Card
