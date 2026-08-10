import React from 'react'

const Card = () => {

  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZzY4HOjzBwiROTqIdQsG8G-Yne6q2iJRQNJl3iunZg&s=10" },
    { id: 2, name: "Smartphone", price: 499.99, category: "Electronics", inStock: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL4xgIyZgNtVqcDoN442n321fKW8j72I5JqTkIe3-Wg&s=10" },
    { id: 3, name: "Headphones", price: 79.99, category: "Electronics", inStock: false, image: "https://unsplash.com" },
    { id: 4, name: "Running Shoes", price: 59.99, category: "Sports", inStock: true, image: "https://unsplash.com" },
    { id: 5, name: "Backpack", price: 45.00, category: "Travel", inStock: true, image: "https://unsplash.com" },
    { id: 6, name: "Coffee Maker", price: 89.99, category: "Home", inStock: true, image: "https://unsplash.com" },
    { id: 7, name: "Desk Lamp", price: 25.50, category: "Home", inStock: true, image: "https://unsplash.com" },
    { id: 8, name: "Notebook", price: 4.99, category: "Stationery", inStock: true, image: "https://unsplash.com" },
    { id: 9, name: "Pen Set", price: 12.99, category: "Stationery", inStock: false, image: "https://unsplash.com" },
    { id: 10, name: "Water Bottle", price: 15.00, category: "Sports", inStock: true, image: "https://unsplash.com" },
    { id: 11, name: "Monitor", price: 199.99, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 12, name: "Keyboard", price: 49.99, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 13, name: "Mouse", price: 29.99, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 14, name: "External Hard Drive", price: 109.99, category: "Electronics", inStock: false, image: "https://unsplash.com" },
    { id: 15, name: "Desk Chair", price: 149.00, category: "Home", inStock: true, image: "https://unsplash.com" },
    { id: 16, name: "Yoga Mat", price: 20.00, category: "Sports", inStock: true, image: "https://unsplash.com" },
    { id: 17, name: "Dumbbell Set", price: 55.00, category: "Sports", inStock: true, image: "https://unsplash.com" },
    { id: 18, name: "Blender", price: 39.99, category: "Home", inStock: true, image: "https://unsplash.com" },
    { id: 19, name: "Toaster", price: 34.50, category: "Home", inStock: false, image: "https://unsplash.com" },
    { id: 20, name: "Microwave", price: 120.00, category: "Home", inStock: true, image: "https://unsplash.com" },
    { id: 21, name: "T-Shirt", price: 18.99, category: "Apparel", inStock: true, image: "https://unsplash.com" },
    { id: 22, name: "Jeans", price: 40.00, category: "Apparel", inStock: true, image: "https://unsplash.com" },
    { id: 23, name: "Jacket", price: 75.00, category: "Apparel", inStock: true, image: "https://unsplash.com" },
    { id: 24, name: "Socks", price: 6.99, category: "Apparel", inStock: true, image: "https://unsplash.com" },
    { id: 25, name: "Cap", price: 14.99, category: "Apparel", inStock: false, image: "https://unsplash.com" },
    { id: 26, name: "Sunglasses", price: 22.00, category: "Accessories", inStock: true, image: "https://unsplash.com" },
    { id: 27, name: "Watch", price: 150.00, category: "Accessories", inStock: true, image: "https://unsplash.com" },
    { id: 28, name: "Wallet", price: 30.00, category: "Accessories", inStock: true, image: "https://unsplash.com" },
    { id: 29, name: "Belt", price: 19.99, category: "Accessories", inStock: true, image: "https://unsplash.com" },
    { id: 30, name: "Umbrella", price: 12.50, category: "Accessories", inStock: false, image: "https://unsplash.com" },
    { id: 31, name: "Action Camera", price: 249.99, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 32, name: "Tripod", price: 35.00, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 33, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 34, name: "Fitness Band", price: 45.00, category: "Electronics", inStock: true, image: "https://unsplash.com" },
    { id: 35, name: "Electric Toothbrush", price: 50.00, category: "Health", inStock: true, image: "https://unsplash.com" },
    { id: 36, name: "Hair Dryer", price: 38.00, category: "Health", inStock: false, image: "https://unsplash.com" },
    { id: 37, name: "Shampoo", price: 8.50, category: "Health", inStock: true, image: "https://unsplash.com" },
    { id: 38, name: "Soap", price: 3.99, category: "Health", inStock: true, image: "https://unsplash.com" },
    { id: 39, name: "Towel", price: 14.00, category: "Home", inStock: true, image: "https://unsplash.com" },
    { id: 40, name: "Bed Sheet", price: 42.00, category: "Home", inStock: true, image: "https://unsplash.com" }
  ];
  
  return (
    <>
    <div className='h-[100vh] w-full flex flex-wrap justify-center'>
    {products.map((item) => {
        return <div className='h-[340px] w-[260px] rounded-md border m-4 '>
        <div className='h-[190px] w-full border-green-500 border'>
       <img src={item.image} alt="" className='h-full w-full'/>
        </div>
        <div className='px-2 py-2'>
         
       <h2 className='text-2xl italic font-bold mb-1'>{item.name}</h2>
       <p className='mb-1'>Category : {item.category}</p>
       <p className='mb-1'>Instock : {item.inStock}</p>
       <p>Price : {item.price}</p>
        </div>
       </div>
      })}
    </div>
    
    </>
  )
}

export default Card
