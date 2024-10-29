import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home"
import ProductHome from './ProductHome';
function App() {


  return (
  <>
  <Router>
    <div className='App' >
      <Navbar/>
   <main>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductHome />} />
    </Routes>
   </main>

    </div>
  </Router>
  </>
  )
}

export default App
