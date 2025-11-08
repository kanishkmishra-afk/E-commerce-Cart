import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ProductContext from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
    let {cart,setCart,products,total,setTotal}=useContext(ProductContext)
    const navigate=useNavigate()
    let newtotal=0;
    const handleRemove=async(itemId)=>{
      const newCart=cart.filter((item)=>item.productId !== itemId)
      const response = await axios.post("http://localhost:3000/api/product/removeItem",{newCart})
      setCart(response.data)
    }
    
  return (
    <div className='overflow-x-hidden relative top-[70px]'>
        {cart.map((item,index)=>{
          const productData= products.filter((product)=>product.id===item.productId)
          newtotal+=productData[0].price
          setTotal(newtotal)
          return (
            <div key={index} className='w-[100%] h-[100px] border-t border-b  flex items-center justify-between border rounded-md bg-white shadow p-4 hover:shadow-lg transition"'>
              <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                        <span className="font-semibold text-lg text-gray-800">{productData[0].name}</span>
                        <span className="text-blue-600 font-bold text-md ml-2">₹{productData[0].price}</span>
              </div>
                        <div className="flex items-center gap-2">
                              <span className="text-gray-600">Qty:</span>
                              <span className="font-mono text-base bg-gray-100 rounded px-2 py-1">{item.quantity}</span>
                        </div>
                         <button
                              onClick={() => handleRemove(item.productId)}
                              className="ml-2 bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded transition shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                              Remove
                            </button>
            </div>
          )
          
          
        })}
        <div className="border-t p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50">
        <div className="text-lg font-semibold text-gray-700 mb-4 sm:mb-0">
          Total: <span className="text-blue-700 font-bold">₹{total}</span>
        </div>
        <button
          onClick={()=>navigate("/recipt")}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded shadow transition focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
