import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductContext from '../context/ProductContext.jsx'

function Products() {
  const {products, setProducts}= useContext(ProductContext)
  const addToCart=async(productId,quantity)=>{
    const response=await axios.post("http://localhost:3000/api/product/addTOCart",{productId,quantity})
    
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 relative top-[70px]'>
      {products.map((product)=>(
        <div key={product.id} className='className="border rounded-lg shadow-sm p-6 bg-white flex flex-col items-center hover:shadow-md transition'>
          <div className="text-lg font-semibold mb-2">{product.name}</div>
          <div className="text-xl font-bold text-blue-700 mb-4">{product.price}</div>
          <button onClick={()=>addToCart(product.id,1)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
