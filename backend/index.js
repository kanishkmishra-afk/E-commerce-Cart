import express from 'express';
import cors from 'cors';
import productRoute from './routes/productsRoute.js';

const app=express()
const PORT=3000
app.use(express.json())
app.use(cors())
app.use("/api/product",productRoute)
app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.listen(PORT,()=>{
    console.log(`server is listining on port ${PORT}`);
    
})