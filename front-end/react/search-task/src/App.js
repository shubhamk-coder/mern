import React, { useState } from "react";
import "./App.css";
import FRUITS from "./fruits.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <label for="search">Search: </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {FRUITS.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
