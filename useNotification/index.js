import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useNotification from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("you have to get some sleep", {
    body: "Take some rest fou you"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
