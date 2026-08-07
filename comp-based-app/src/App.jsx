import React from 'react'
import Navbar  from './components/Navbar.jsx'
import Card from './components/Card.jsx'
function App() {
  let nums = [1,2,3,4,5]
// let isActive = true;
  const products = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      price: 199.99,
      category: "Electronics",
      inStock: true,
      stock: 45,
      rating: 4.7,
      image: "https://cs.ucsb.edu/sites/default/files/2021-06/source-4280758_1920.jpg"
    },
    {
      id: 2,
      name: "Ergonomic Mesh Office Chair",
      price: 249.50,
      category: "Furniture",
      inStock: true,
      stock: 12,
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRTsIl0sHuIkDCL7DmpmXBjA4D_Ls-ZYtTgf8bnkMH4cKB0yCbTqZRQE&s=10"
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle (32oz)",
      price: 27.99,
      category: "Fitness & Outdoors",
      inStock: true,
      stock: 120,
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWx2hSNLhtkd33-Ege0W9FmRcEF1nWO40ZZsPVkXUuX9MkxHwOIYNQVtM&s=10"
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      price: 89.99,
      category: "Electronics",
      inStock: false,
      stock: 0,
      rating: 4.3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpfwaaOxWVQsol3NxWzYKhU1tsPPDbHYQz3T9MYFF0w&s=10"
    },
    {
      id: 5,
      name: "Organic Green Tea Blend",
      price: 15.45,
      category: "Grocery",
      inStock: true,
      stock: 85,
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RMv5Tlo5NzpUFAQr9XmkPHlrC0dVu0tIo60ga4RhxA&s=10"
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle (32oz)",
      price: 27.99,
      category: "Fitness & Outdoors",
      inStock: true,
      stock: 120,
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWx2hSNLhtkd33-Ege0W9FmRcEF1nWO40ZZsPVkXUuX9MkxHwOIYNQVtM&s=10"
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      price: 89.99,
      category: "Electronics",
      inStock: false,
      stock: 0,
      rating: 4.3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpfwaaOxWVQsol3NxWzYKhU1tsPPDbHYQz3T9MYFF0w&s=10"
    },
    {
      id: 5,
      name: "Organic Green Tea Blend",
      price: 15.45,
      category: "Grocery",
      inStock: true,
      stock: 85,
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RMv5Tlo5NzpUFAQr9XmkPHlrC0dVu0tIo60ga4RhxA&s=10"
    }
  ];

  // let returnVal = products.map((item)=> {
  //   return "Lala Ki Jann"
  // })
  // console.log(returnVal);
  
  
  
  return (
    <>
    <Navbar />
   {/* Navbar Completed  */}
  {/* HardCoded Data  */}

    {/* <div className='hero'>
    <Card image={"https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" } title={"Muhammad Hasnain"}  description={"This work is done by me!. I am the owner of this work as i do this work and this time i work on react practice to make comp and also other topics like prop destructuring."}/>
    <Card image={"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww" } title={"Umair Arfeen"}  description={"This work is done by me!. I am the owner of this work as i do this work and this time i work on react practice to make comp and also other topics like prop destructuring."}/>
    <Card image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWAxn0U9AE2fKTFz1lNY6q3I0dqldmorXG7_ug-rb1bBKdCU21zu0U1JF&s=10" } title={"Chacha"}  description={"This work is done by me!. I am the owner of this work as i do this work and this time i work on react practice to make comp and also other topics like prop destructuring."}/>
    <Card image={"https://cs.ucsb.edu/sites/default/files/2021-06/source-4280758_1920.jpg" } title={"Murshid"}  description={"This work is done by me!. I am the owner of this work as i do this work and this time i work on react practice to make comp and also other topics like prop destructuring."}/>
    </div>
   */}

  {/* Dummy Data  */}

  <div className='hero'>
  {/* <Card /> */}
  {products.map((item) => {
    return  <div className='box'>
    <div className='logo'>
      <img src={item.image} alt="" />
    </div>
    <hr />
    <div className='details'>
   <h2>{item.name}</h2>
   <p>{item.category}</p>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
   <p>${item.price}</p>
    </div>
  </div>
  })}
  </div>

  {/* Footer  */}

<div className='footer'>
<div className='first'>
  <p className='fd'>© 2026 Harry React Based Component
  All rights reserved.
  </p>
  <span className='spand'>
  <a href="" className='ancher'>Privacy</a>
  <a href="" className='ancher'>Terms</a>
  <a href="" className='ancher'>Contact</a>
  </span>
</div>
</div>

  
{/* Conditional Styling and we already do inline and external styling   */}

   {/* <ul className={`${isActive ? "bg-red" : "bg-green"} box`}>
    <li>dfw</li>
    <li>asda</li>
    <li>adsd</li>
   </ul> */}

   {/* <ul className='box'>
    {nums.map((item,index,arr) => {
    return <>
    <li key={index}> {item}</li>
    <li>{index}</li>
    <li>{arr}</li>
         </>
    })}
   </ul> */}

   
    </>
  )


}

export default App
