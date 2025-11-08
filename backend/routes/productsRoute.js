import express from 'express'
import { addToCart, getCartItem, getProducts, removeCartItem } from '../controller/productController.js'

const productRoute=express.Router()

productRoute.get("/getProducts",getProducts)
productRoute.post("/addTOCart",addToCart)
productRoute.get("/getCartItem",getCartItem)
productRoute.post("/removeItem",removeCartItem)


export default productRoute