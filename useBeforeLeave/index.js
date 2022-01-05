import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const beForLife = () => console.log("Pls dont leave");
  useBeforeLeave(beForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
