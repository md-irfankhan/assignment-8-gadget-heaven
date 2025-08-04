
import { Outlet } from 'react-router'
import './App.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { createContext } from 'react'
import { useState } from 'react'
import { getCart, getWishList } from './db/ldb'
export const CartContext=createContext()
function App() {
  
  const [lcart,setLCart]=useState(getCart())
  const [lwish,setLWish]=useState(getWishList())
  return (
    <div >
      <CartContext.Provider value={{lcart,setLCart,lwish,setLWish}} >
     <Nav></Nav>
     <Outlet ></Outlet>
     <Footer></Footer>
     </CartContext.Provider>
    </div>
  )
}

export default App
