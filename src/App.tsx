

import { Outlet } from 'react-router'
import './App.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'


function App() {
  

  return (
    <>
    <div>

       
      
      <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <main className="container  mx-auto p-6 flex-1">
        <Outlet />
      
      </main>
     
      <footer className="bg-blue-500  border-t py-4 text-center">
       <Footer/>
      </footer>
    </div>
    </div>
    </>
  )
}

export default App
