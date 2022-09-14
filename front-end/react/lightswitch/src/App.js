import "./App.css";
import { useState } from "react";
import React from "react";

const roomLight = document.getElementById("room");
function App() {
  const [light, setLight] = useState("OFF");
  const lightChange = () => {
    if (light === "OFF") {
      roomLight.classList.add("active");
      setLight("ON");
    } else {
      roomLight.classList.remove("active");
      setLight("OFF");
    }
  };
  return (
    <div className="App">
      <h1 id="room">Room with a Light Switch : {`${light}`}</h1>
      <button onClick={lightChange}>Click</button>
    </div>
  );
}
export default App;
