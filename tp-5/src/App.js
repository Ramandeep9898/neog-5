// import logo from "./logo.svg";
import "./App.css";

function App() {
  var welcomeMessage = "welcome";
  var likeCounter = 0;
  function likeMeClickHander() {
    // console.log("clicked");
    likeCounter = likeCounter + 1;
    console.log(likeCounter);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundcolor: "blue" }}>
        {" "}
        {welcomeMessage}
        <span style={{ color: "pink" }}>YOOOOO</span>
        <button onClick={likeMeClickHander}>click me!!</button>
      </h1>
    </div>
  );
}

export default App;
