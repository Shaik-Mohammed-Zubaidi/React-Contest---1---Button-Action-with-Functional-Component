import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [paratext, setText] = useState("");
  const handleclick = () => {};
  return (
    <div id="main">
      <button
        id="click"
        onClick={() =>
          setText(
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          )
        }
      >
        Click
      </button>
      <p id="para">{paratext}</p>
    </div>
  );
}

export default App;
