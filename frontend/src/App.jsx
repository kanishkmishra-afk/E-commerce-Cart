import { useState } from 'react'
import Products from './pages/Products.jsx'
import Nav from './components/Nav.jsx'
import Cart from './pages/Cart.jsx'
import { Route, Routes } from 'react-router-dom'
import Recipt from './pages/Recipt.jsx'


function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/recipt' element={<Recipt />}/>
    </Routes>
    </>
  )
}

export default App
