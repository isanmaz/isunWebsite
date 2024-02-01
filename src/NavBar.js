import { Link } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
const NavBar = () => {
  const [isPrimaryNavVisible, setIsPrimaryNavVisible] = useState(false);

const togglePrimNav=()=>{
  setIsPrimaryNavVisible((prev)=>!prev);
}


  
  return (
    <>
     <button  className="hid-but"
      aria-controls="primary-nav" aria-expanded={isPrimaryNavVisible} onClick={togglePrimNav}>
      
      
      <span className="menu-text" >Nav</span></button>
    <nav>
    
    <ul id="primary-nav" className={`primary-nav ${isPrimaryNavVisible ? "visible" : ""}`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>
   
  </nav>
 
  </>

    
  );
};
export default NavBar;
