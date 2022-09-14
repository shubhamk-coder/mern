import "./App.css";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStep, resetStep } from "./Action";
function App() {
  const myState = useSelector((state) => state.addStep);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        You've walked <span className="span">{myState}</span> steps today!{" "}
      </h1>
      <button
        className="button"
        type="button"
        onClick={() => dispatch(addStep())}
      >
        Add step
      </button>
      <br></br>
      <button
        className="button"
        type="Reset"
        onClick={() => dispatch(resetStep())}
      >
        Reset steps
      </button>
    </div>
  );
}
export default App;
