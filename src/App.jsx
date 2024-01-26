import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);
  function handleInput(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    const check = inputValue.toString().replace(",", "");
    const check2 = check.toString().replace(".", "");
    const reverseNum = parseFloat(check2.split("").reverse().join(""));
    setResult(Math.abs(parseFloat(check2) - reverseNum));
  }

  function handleReverse() {}
  return (
    <div className="App">
      <div>
        Number: <input onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result} </div>
    </div>
  );
}
