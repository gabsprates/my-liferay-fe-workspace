import { useState } from "react";
import reactLogo from "./assets/react.svg";
import webpackLogo from "./assets/webpack.svg";
import "./App.css";

import { myDate, myString } from "project-library";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
          <img src={webpackLogo} className="logo webpack" alt="Webpack logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        &gt;&gt; Webpack + React | {myDate()} : {myString()}
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Webpack and React logos to learn more
      </p>
    </>
  );
}

export default App;
