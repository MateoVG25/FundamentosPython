import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    if (inputNumber === 1) {
      setInput1(value);
    } else {
      setInput2(value);
    }
  };

  const handleOperation = (op) => {
    setOperation(op);
  };

  const calculate = () => {
    if (operation === "+") {
      setResult(parseFloat(input1) + parseFloat(input2));
    } else if (operation === "-") {
      setResult(parseFloat(input1) - parseFloat(input2));
    } else if (operation === "*") {
      setResult(parseFloat(input1) * parseFloat(input2));
    } else if (operation === "/") {
      setResult(parseFloat(input1) / parseFloat(input2));
    } else if (operation === "//") {
      setResult(Math.floor(parseFloat(input1) / parseFloat(input2)));
    } else if (operation === "**") {
      setResult(Math.pow(parseFloat(input1), parseFloat(input2)));
    } else if (operation === "%") {
      setResult(parseFloat(input1) % parseFloat(input2));
    }
  };
 
  return (
    <>
      <img src="../src/assets/rickGreeting.gif" />
      <div className="App">
        <h1>Calculadora hyper pro mega max ultra 4k rgb incluide</h1>
        <input
          type="number"
          value={input1}
          onChange={(e) => handleInputChange(e, 1)}
        />
        <input
          type="number"
          value={input2}
          onChange={(e) => handleInputChange(e, 2)}
        />
        <br />
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <button onClick={() => handleOperation("//")}>//</button>
        <button onClick={() => handleOperation("**")}>^</button>
        <button onClick={() => handleOperation("%")}>%</button>
        <br />
        <button onClick={calculate}>=</button>
        <div>{result}</div>
      </div>
    </>
  );
};
