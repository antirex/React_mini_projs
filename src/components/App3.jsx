import React from "react";
import Navbar from "./Navbar";
import Home from "./Home"

function App2() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App2;
