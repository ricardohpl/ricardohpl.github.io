import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import Skills from '../Skills'

const NavRouter = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="skills" element={<Skills />} />
    </Routes>
  )
}

export default NavRouter