import React from 'react'
import { createRoot } from 'react-dom/client';

const Card = () => {

  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZzY4HOjzBwiROTqIdQsG8G-Yne6q2iJRQNJl3iunZg&s=10" },
    { id: 2, name: "Smartphone", price: 499.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL4xgIyZgNtVqcDoN442n321fKW8j72I5JqTkIe3-Wg&s=10" },
    { id: 3, name: "Headphones", price: 79.99, category: "Electronics", inStock: false, image: "https://www.freepnglogos.com/uploads/headphones-png/headphones-beats-pro-beats-dre-22.png" },
    { id: 4, name: "Running Shoes", price: 59.99, category: "Sports", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKbjTB9SKcA23pza5sBtH7TGYO-9kOtBgPuJrWmjJeg&s=10" },
    { id: 5, name: "Backpack", price: 45.00, category: "Travel", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHbLdxZtKgQbjhXcOriHPpBhay6i3JQPcuEvJq5cE9w&s=10" },
    { id: 6, name: "Coffee Maker", price: 89.99, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8JkGMNzqEEhKhXcaLLIl1Vwex7JsK55n6bT83Rn8MA&s=10" },
    { id: 7, name: "Desk Lamp", price: 25.50, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThslLWLj7lOXDXISp6tSao0-3Pr_3h7s_8DN9PDGdidA&s=10" },
    { id: 8, name: "Notebook", price: 4.99, category: "Stationery", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiJILzAajs-T22NqTx0nZS2YJJdvPZuzSlylLuPyxuQ&s=10" },
    { id: 9, name: "Pen Set", price: 12.99, category: "Stationery", inStock: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyH39-NImW46HbroKcM6ExwOpnPAuir4Mr-v-_Q1Etomp5gobfbPgdER0&s=10" },
    { id: 10, name: "Water Bottle", price: 15.00, category: "Sports", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWupAdES3_9XN_L8JYLaeIN70GaVBhqDbmimmkhE2wQ&s=10" },
    { id: 11, name: "Monitor", price: 199.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmijFX8wpgbzzdWzYm0E29HRx8Lt2W9ja-vv4Zei40oBuMkxXO-G4lBPM&s=10" },
    { id: 12, name: "Keyboard", price: 49.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMkmHpio4-Ivc14wHdYtNYJ9dSp5FUjhGWHc3KM-Tow&s=10" },
    { id: 13, name: "Mouse", price: 29.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojtenk0ybA9Z-jld2LsazMY5m439Mzrxrb0V8aHDt_Q&s=10" },
    { id: 14, name: "External Hard Drive", price: 109.99, category: "Electronics", inStock: false, image: "https://www.minitool.com/images/uploads/2019/06/external-hard-disk-1.png" },
    { id: 15, name: "Desk Chair", price: 149.00, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r6uAh9YhvVIO5KkuZLEkrajRuKMxhDOUZTKqFP-x_w&s=10" },
    { id: 16, name: "Yoga Mat", price: 20.00, category: "Sports", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRlEFr9VTJmKjLp8MOO0EzAf6X_S9Y9S-d8FbX4titQ&s=10" },
    { id: 17, name: "Dumbbell Set", price: 55.00, category: "Sports", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzldeHfHJ9I86Q0HgiFBpOxRPv2ewe50KtHXJDDRbZpA&s=10" },
    { id: 18, name: "Blender", price: 39.99, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgLwvMKEhg-yTUdsy-QJq-k4Vi5ii7TKXvtBLlckJlA&s=10" },
    { id: 19, name: "Toaster", price: 34.50, category: "Home", inStock: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTGkPKng1q3cYh5Jt5c72hU2XujuQnrNAdgMsqAVvEw&s=10" },
    { id: 20, name: "Microwave", price: 120.00, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbh0TIkmOieaGXjCNvXlvmYbvcIZPNci9v1axDTGLf4w&s=10" },
    { id: 21, name: "T-Shirt", price: 18.99, category: "Apparel", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50Rc0w-K-FfWMZq9werv50W3xQnQUqHi_TnojObwuVw&s=10" },
    { id: 22, name: "Jeans", price: 40.00, category: "Apparel", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwlbfdg1rSoidyCWCZMfmXzCQeZcYgmDjtTD_GC-23Q&s=10" },
    { id: 23, name: "Jacket", price: 75.00, category: "Apparel", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHZXtmEktpCZueCnEEohi2FWHmsIyfE2BKau2TNiAfg&s=10https://unsplash.com" },
    { id: 24, name: "Socks", price: 6.99, category: "Apparel", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8s6Umhj3fRCeRnPavBLsnFa1OSEiVmC22N1ucufj4Qw&s=10" },
    { id: 25, name: "Cap", price: 14.99, category: "Apparel", inStock: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ts0zdezC-7TgloBOpB1sjzqs9QJh-8mYmM07D3piBA&s=10" },
    { id: 26, name: "Sunglasses", price: 22.00, category: "Accessories", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrae59tyPPuodfOGBETsEmSed1ioolvxm0Vuc-0W8L0w&s=10" },
    { id: 27, name: "Watch", price: 150.00, category: "Accessories", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaLvmvIcxIpQP_IfCRk0Gz8Fw39xWI8Qgd2BPGM2F2A&s=10" },
    { id: 28, name: "Wallet", price: 30.00, category: "Accessories", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxeloV200OGD68hLafzP2F3I0v9msnm0bq9kfU3FMpQ&s=10" },
    { id: 29, name: "Belt", price: 19.99, category: "Accessories", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHMKQfNdMdo2666u-U7oSIFNXVSbRpaq1R_JTQfsCAA&s=10" },
    { id: 30, name: "Umbrella", price: 12.50, category: "Accessories", inStock: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOaGFhsdkSyrXPthk6oLKCC_xa6JdDZJdO5w1P4G7lw&s=10" },
    { id: 31, name: "Action Camera", price: 249.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTdT2jYZj7mw4m2W0s9zdOJ4A9Wr4dJoqSW8MS_OADw&s=10" },
    { id: 32, name: "Tripod", price: 35.00, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59_Y2okBjk5VMEhZjenCKeZIxJBkF9Wh72fDKWr-GHg&s=10" },
    { id: 33, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtvyPaqtq842Le5ZEcoffWYDuzTp26KJIy2MPipbO0w&s=10" },
    { id: 34, name: "Fitness Band", price: 45.00, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVnxsCAtJr1tZ3F-t2FIhjqi6dZ4fjHdh8hoEh5bTPQ&s=10" },
    { id: 35, name: "Electric Toothbrush", price: 50.00, category: "Health", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrlP9XHz4b4bB_toPWxXngUvsMorUwpVB974nnzpnUw&s=10" },
    { id: 36, name: "Hair Dryer", price: 38.00, category: "Health", inStock: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNaXotdyJ6HmRYEY_4FvbnFw6kv8yzTcGVnufiLq60Q&s=10" },
    { id: 37, name: "Shampoo", price: 8.50, category: "Health", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ko2BBGcjAq58_RZ2C4zP5M1bQl9jxpU-DdDK1SqUXg&s=10" },
    { id: 38, name: "Soap", price: 3.99, category: "Health", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoujrMQuZHazPrpK80evaOFKhs0YsZEgYae3XnnJuxrA&s=10" },
    { id: 39, name: "Towel", price: 14.00, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmDzze3L6nny4tVknbfYcNPdSRuyMZHDVQTnBbra83Q&s=10" },
    { id: 40, name: "Bed Sheet", price: 42.00, category: "Home", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8Bn7XXBHydVDyMxhx4pAo4fnRTM9Dj2J1EXaXigfCg&s=10" }
  ];
  
  return (
    <>
    <div className='h-[100vh] w-full flex flex-wrap justify-center mt-30 '>
    {products.map((item , idx) => {
        return <div key={idx} className='h-[370px] w-[290px] rounded-xl  m-4 shadow shadow-2xl'>
        <div className='h-[190px] w-full '>
       <img src={item.image} alt="" className='h-full w-full'/>
        </div>
        <hr />
        <div className='px-4 py-2'>
         
       <h2 className='text-2xl italic font-bold mb-1'>{item.name}</h2>
       <p className='mb-1'>Category : {item.category}</p>
       <p className='mb-1' key={idx}>Instock : Yes </p>
       <p className='mb-2'>Price : {item.price}</p>
       <button className='btn border p-1 rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white italic cursor-pointer'>See Details</button>
        </div>
       </div>
      })}
    </div>
    
    </>
  )

document.addEventListener("click" , (e) => {
  console.log(e.target.classList.contains("btn"));
  
 })
}

export default Card
