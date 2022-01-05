import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import { useScroll } from "./useScroll";

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 1000 ? "red" : "blue" }}>
        Hi
      </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
