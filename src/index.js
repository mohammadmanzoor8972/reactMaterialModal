import React from "react";
import ReactDOM from "react-dom";
import Professional from "./Professional";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Professional />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
