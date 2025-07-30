
import { Outlet } from 'react-router'
import './App.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className='bg-base-200'>
     <Nav></Nav>
     <Outlet ></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default App
