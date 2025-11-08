import React, { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext'

export default function Recipt() {
    let { total }=useContext(ProductContext)
    const[payment,setPayment]=useState("COD")
    const[Recipt,setRecipt]=useState(false)
  return (
    <div className='top-[70px] relative text-center flex flex-col items-center min-h-[60vh]'>
        {!Recipt && (
             <div className='top-[300px] relative '>
            <h1 className='text-xl font-semibold text-gray-800 mb-6 '>Select payment method</h1>
           <div className='flex gap-6 '>
                <button onClick={()=>(setPayment("COD"),setRecipt(true))} className='bg-gray-900 text-white font-medium rounded-lg px-6 py-2 shadow hover:bg-gray-700 transition border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400'>CASH ON DELIVERY</button>
                <button onClick={()=>(setPayment("Razorpay"),setRecipt(true))} className='bg-blue-600 text-white font-medium rounded-lg px-6 py-2 shadow hover:bg-blue-700 transition border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400'>RAZERPAY</button>
           </div>
        </div>
        )}
        {Recipt && (
            <div className='relative top-[70px] max-w-md mx-auto shadow-lg rounded-xl mt-10 px-8 py-6'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Order Recipt</h1>
                <div className='mb-6 text-center'>
                    <p className='text-gray-700'>Thank You for your purchase!</p>
                </div>
                <div className='space-y-2 border-t pt-4'>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-600'>Order ID:</span>
                        <span className='font-mono text-gray-800'>#123456789</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-600'>Payment Method:</span>
                        <span className='font-mono text-blue-600'>{payment}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-gray-600'>Order total:</span>
                        <span className='font-mono text-blue-600'>{total}</span>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
