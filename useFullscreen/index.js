import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const { element, triggerFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <img
        ref={element}
        src="https://i.ibb.co/R6RwNxx/grape.jpg"
        alt="grape"
        width="250"
      />
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
