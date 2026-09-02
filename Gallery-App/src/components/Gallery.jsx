import React from 'react'

const Gallery = ({item}) => {
  return (
    <div className='bg-[#1e293b] hover:text-cyan-400 border border-slate-700/50  hover:border-slate-500  transition h-[260px] rounded-lg p-2 w-[260px] mb-3 text-white' >
      <div className='h-[170px] w-[245px] flex justify-center items-center'>
        <img src={item.download_url} className='rounded h-full w-full' alt="" height={"120px"} width={"200px"}/>
      </div>
      <div className='flex items-center justify-center pt-4 text-center text-2xl italic font-bold '>
        <h1>{item.author}</h1>
      </div>
    </div>
  )
}

export default Gallery
