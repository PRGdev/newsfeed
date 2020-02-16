import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
    <div className="wrapper">
    <Main/>
  </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
