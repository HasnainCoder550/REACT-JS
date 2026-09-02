import React from 'react'

const Footer = ({setLimit , setPage}) => {
    // console.log(setLimit);
    
  return (
    <div className='bg-[#1e293b] p-2 flex justify-between w-full text-slate-500 text-xs' >
    {/* buttons  */}
<div className='flex items-center justify-around w-[400px]'>
<div><h1 className='text-2xl font-bold text-slate-500 text-xl italic '>Pages</h1></div>
{[1,2,3,4,5].map((num,id) => <button className=' cursor-pointer hover:border border-white w-[40px]  font-bold italic' onClick={(e) => setPage(e.target.innerText)} key={id}>{num}</button>)}
</div>
{/* Dropdown  */}
<div className=''>
<select className='w-[100px] border hover:border-slate-500 outline-none h-full 'onChange={(e) => setLimit(e.target.value)
}>
<option selected value="8">8</option>
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select>
</div>
</div>
  )
}

export default Footer
