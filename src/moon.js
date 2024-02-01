// src/App.js
import React from "react";
import "./App.css"; // Import your CSS file
import NestedCircles from "./components/NestedCircles";
import Circle from "./components/Circle";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <div className="nav-left"></div>
        <div className="nav">

<NavBar/>
          
        </div>
        <div className="nav"></div>
        <div className="nav">
        </div>
        <NestedCircles />
      </div>
    </div>
  );
}

export default App;
