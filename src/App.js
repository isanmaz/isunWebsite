// src/App.js
import React from "react";
import "./App.css"; // Import your CSS file
import NestedCircles from "./components/NestedCircles"; // Import the NestedCircles component

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <div className="nav"></div>
        <div className="nav"></div>
        <div className="nav"></div>
        <div className="nav"></div>
        <NestedCircles />
      </div>
    </div>
  );
}

export default App;
