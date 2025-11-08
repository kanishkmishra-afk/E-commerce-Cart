import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate=useNavigate()

  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex  items-center justify-between px-[30px] shadow-md shadow-black '>

        <div className='w-[20%] lg:w-[30%] flex items-center justify-start   gap-[10px] '>
            <h1 className='text-[25px] text-[black] font-sans '>NEXORA.Cart</h1>
        </div>
        <div className='w-[50%] lg:w-[40%] hidden md:flex'>
            <ul className='flex items-center justify-center gap-[19px] text-[white] '>
                <li onClick={()=>navigate("/")} className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' >Products</li>
                <li onClick={()=>navigate("/cart")} className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl' >Cart</li>
            </ul>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Nav
