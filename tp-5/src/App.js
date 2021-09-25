// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😂": "laughing",
  "😎": "Face With Sunglasses",
  "❤": "Love",
  "😢": "Sed",
  "🎁": "Gift",
};

function App() {
  const [meaning, setMeaning] = useState(" ");

  function onChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " We Don't have this in Our Database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside out!!</h1>

      <input onChange={onChangeHandler} />
      <h2> Meaning: {meaning} </h2>
    </div>
  );
}

export default App;
