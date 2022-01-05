import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useInput } from "./useInput";

const App = () => {
  // const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      {/* ...name = name의 모든 것을 담아줌(풀어줌) */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
