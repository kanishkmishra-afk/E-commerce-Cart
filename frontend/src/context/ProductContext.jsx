import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext=createContext()

export const ProductContextProvider=({children})=>{
     const [products,setProducts]=useState([])
     const [cart,setCart]=useState([])
     const [total,setTotal]=useState(0)
     const getProducts=async()=>{
          try {
          const response= await axios.get("http://localhost:3000/api/product/getProducts")
          setProducts(response.data)
            
          } catch (error) {
            console.log("getProducts ERROR::",error);    
        }
  }
    const cartItems=async()=>{
        const response = await axios.get("http://localhost:3000/api/product/getCartItem")
        setCart(response.data)
    }
  
    useEffect(()=>{
      getProducts()
      cartItems()
    },[cart])
    
    const value={
        products,
        setProducts,
        cart,
        setCart,
        total,
        setTotal
    }
    return(
        <div>
            <ProductContext.Provider value={value}>
            {children}
            </ProductContext.Provider>
        </div>
    )
}

export default ProductContext