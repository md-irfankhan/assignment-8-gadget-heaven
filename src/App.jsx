
import { Outlet } from 'react-router'
import './App.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { createContext } from 'react'
import { useState } from 'react'
import { getCart } from './db/ldb'
export const CartContext=createContext()
function App() {
  
  const [lcart,setLCart]=useState(getCart())
  return (
    <div >
      <CartContext.Provider value={{lcart,setLCart}}>
     <Nav></Nav>
     <Outlet ></Outlet>
     <Footer></Footer>
     </CartContext.Provider>
    </div>
  )
}

export default App
