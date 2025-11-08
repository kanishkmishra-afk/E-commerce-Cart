let cart=[]


export const getProducts=async(req,res)=>{
    try {
        const products = [
                { id: 1, name: "Wireless Mouse", price: 599 },
                { id: 2, name: "Gaming Keyboard", price: 1499 },
                { id: 3, name: "Bluetooth Headphones", price: 2499 },
                { id: 4, name: "USB-C Charger", price: 899 },
                { id: 5, name: "Smart Watch", price: 3799 },
                { id: 6, name: "Fitness Band", price: 1099 },
                { id: 7, name: "Portable Speaker", price: 1599 },
                { id: 8, name: "HD Webcam", price: 1299 },
                { id: 9, name: "Laptop Stand", price: 699 },
                { id: 10, name: "Desk Lamp", price: 499 }
         ];

        res.status(200).json(products)
    } catch (error) {
        
    }
}

export const addToCart=async(req,res)=>{
    try {
        const {productId,quantity}=req.body

        cart=[...cart,{productId,quantity}]

        res.status(200).json({message:"Product added to cart successfully"})
    } catch (error) {
        console.log("addTOCart ERROR::",error);
        
    }
}

export const getCartItem=async(req,res)=>{
    try {
        const cartItems=cart
        res.status(200).json(cartItems)
    } catch (error) {
        console.log("getCartItem ERROR::",error);
        
    }
}

export const removeCartItem=async(req,res)=>{
    try {
        const {newCart}=req.body
        cart=newCart
        return res.status(200).json(cart)
    } catch (error) {
        console.log("removeCartItem ERROR",error);
        
    }
}