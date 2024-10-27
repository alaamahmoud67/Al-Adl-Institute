import React from 'react'
import Contact from './Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
export default function App() {
  return (
    <div className=''>
  <Router>
      <Navbar/>
       <Routes>
       <Route path="/" element={ <Home/>} />

            <Route path="/contact" element={ <Contact/>} />
           


          </Routes>
         
       </Router>
    </div>
  )
}