// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState(" ");

  function onChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1> Inside out!!</h1>
      <input onChange={onChangeHandler} />
      <div>Welcome {userInput}</div>
    </div>
  );
}

export default App;
