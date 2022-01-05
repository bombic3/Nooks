import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// reference란 우리의 component의 어떤 부분을 선택할 수 있는 방법이다.
// document.getElementById() 사용한 것과 동등하게 말이다.
const App = () => {
  const potato = useRef();
  // setTimeout(() => console.log(potato.current), 5000);
  setTimeout(() => potato.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
