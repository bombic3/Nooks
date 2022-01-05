import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// useEffect는 ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate 임.
// useEffect( function, [dependency] );
const App = () => {
  const sayHello = () => console.log("Hello");
  // useEffect(() => {
  //   sayHello();
  // });
  // useEffect(sayHello); 와 같은 것
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // useEffect(sayHello, [number]);
  // 함수 sayHello가 number가 변할 때만 re-render
  useEffect(sayHello, []);
  // 함수 sayHello가 처음에만 실행
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
