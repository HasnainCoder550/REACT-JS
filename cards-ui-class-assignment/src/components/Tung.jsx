import React from 'react'

const Tung = ({userName , email , h}) => {
  console.log(userName);
  
  return (
    <div className='italic p-2 flex flex-col gap-[20px]'>
        <h1 className='text-2xl italic font-bold'>{h}</h1>
      <p className='text-3xl italic' >{userName[0]}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt tempora exercitationem nemo reprehenderit, molestiae temporibus alias asperiores fugiat voluptatibus aspernatur laboriosam unde, pariatur dolores suscipit quas? Expedita, consequatur veritatis.</p>
      <h1 className='text-3xl italic'>{userName[1]}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt tempora exercitationem nemo reprehenderit, molestiae temporibus alias asperiores fugiat voluptatibus aspernatur laboriosam unde, pariatur dolores suscipit quas? Expedita, consequatur veritatis.</p>
      <h1 className='text-3xl italic'>{userName[2]}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt tempora exercitationem nemo reprehenderit, molestiae temporibus alias asperiores fugiat voluptatibus aspernatur laboriosam unde, pariatur dolores suscipit quas? Expedita, consequatur veritatis.</p>
      <h1 className='text-3xl italic'>{userName[3]}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt tempora exercitationem nemo reprehenderit, molestiae temporibus alias asperiores fugiat voluptatibus aspernatur laboriosam unde, pariatur dolores suscipit quas? Expedita, consequatur veritatis.</p>
      <h1 className='text-3xl italic'>{userName[4]}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt tempora exercitationem nemo reprehenderit, molestiae temporibus alias asperiores fugiat voluptatibus aspernatur laboriosam unde, pariatur dolores suscipit quas? Expedita, consequatur veritatis.</p>
      <h1 className='text-3xl italic'>{userName[5]}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt tempora exercitationem nemo reprehenderit, molestiae temporibus alias asperiores fugiat voluptatibus aspernatur laboriosam unde, pariatur dolores suscipit quas? Expedita, consequatur veritatis.</p>
      {/* <p>{email}</p> */}
    </div>
  )
}

export default Tung
