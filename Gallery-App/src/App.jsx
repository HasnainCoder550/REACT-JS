import React, { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Alert from './components/Alert';
const App = () => {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(8)
  // const [div,setDiv] = useState("")
  const [isAlertOpen, setIsAlertOpen] = useState(false);
    
// console.log(data);
// console.log(limit);
// console.log(div);

 const getData = async () => {
  const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
  // console.log(response.data);
  setData(response.data)
  
 } 


 useEffect(() => {
  getData()
 } , [limit,page])




  return (
    <div className='h-screen w-full bg-[#0f172a] flex flex-col justify-between relative'>
      {/* navbar  */}
    <div className='bg-[#1e293b] border-slate-100 p-4 mb-2 flex justify-between items-center text-white '>
  <h1 className='text-2xl font-bold text-white italic'>Gallery Application</h1>
  <p className='hover:underline cursor-pointer italic' onClick={() => setIsAlertOpen(true)}>How To Use?</p>
    </div>
 

      {/* gallery  */}
     {/* Card Parent  */}
     <div className='w-full overflow-y-auto scrollbar-none grid grid-cols-[repeat(auto-fill,minmax(250px,max-content))] justify-center gap-3'>
      {data.length > 0 ? 
      data.map((item,id) => <Gallery key={id} item={item}/>) : 
      <p className='text-slate-700 italic ml-160 text-center text-3xl font-bold'>
      Loading...
      </p> }
    </div>



      {/* footer  */}
     <Footer setLimit={setLimit} setPage={setPage}/>



    {/* How to use Div  */}
 <Alert isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)} />
    

    </div>
  )
}

export default App
