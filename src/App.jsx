import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar'
import { Contact, Custom404, Home, ProjectGallery } from './components/Pages'
import './App.css'


function App() {

  return (
    <Router>
      <MyNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<ProjectGallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<Custom404 />} />
        </Routes>
    </Router>
  )
}

export default App
