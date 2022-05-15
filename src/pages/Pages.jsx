import React from 'react';
import { Route, Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';



function Pages() {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
    </Routes>
        
  )
}

export default Pages