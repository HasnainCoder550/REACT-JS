import { collection, getDocs, query } from 'firebase/firestore';
import React from 'react';
import BlogCard from "../components/BlogCard";
import { db } from '../firebase/config';
import Navbar from '../components/Navbar';



const Home = () => {

  const [allBlogs, setAllBlogs]= React.useState([])

    const getBlogsData = async() => {
      try {
        
        
        const q = query(collection(db, "blogs"));
        
        const querySnapshot = await getDocs(q);
    let blogs = querySnapshot.docs.map((doc) => (
      {
          // doc.data() is never undefined for query doc snapshots
          id : doc.id,
          ...doc.data()

          
        }
      ));
      console.log();
  console.log(blogs);
  
  setAllBlogs(blogs)
  
    } catch (error) {
      console.log(error);
      
    }
    }
  
  
  
  
    React.useEffect(()=>{
  getBlogsData()
    },[])
  return (
    <>
    <Navbar />

    <h1 className='text-3xl font-bold text-italic text-center mt-5 mb-5'>All Blogs </h1>
    
  <div className='flex flex-wrap justify-center gap-4'>


  {allBlogs.length > 0 ? allBlogs.map((blog)=> (<BlogCard getBlogsData={getBlogsData} data={blog}/>)) :   <p>Blog Finding</p>}
  </div>
    
    </>
  )
}

export default Home
