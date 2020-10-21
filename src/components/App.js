import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [vis, setText] = React.useState(false);
  // let vis = false;
  const handleclick = () => {
    // vis = true;
    setText(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={() => handleclick()}>
        Output
      </button>
      {vis && (
        <p id="para">
          "Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy"
        </p>
      )}
    </div>
  );
}

export default App;