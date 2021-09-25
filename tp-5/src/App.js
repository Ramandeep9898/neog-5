// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  var welcomeMessage = "welcome";

  const [likeCounter, setLikeCounter] = useState(0);

  function likeMeClickHander() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundcolor: "blue" }}>
        {" "}
        {welcomeMessage}
        <span style={{ color: "pink" }}>YOOOOO</span>
        <button onClick={likeMeClickHander}>like me!!</button>
        {likeCounter}
      </h1>
    </div>
  );
}

export default App;
