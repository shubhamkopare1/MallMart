import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home"
function App() {


  return (
  <>
  <Router>
    <div className='App' >
      <Navbar/>
   <main>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
   </main>

    </div>
  </Router>
  </>
  )
}

export default App
