import React from 'react';
import './App.css';
import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home className="container"/>
    </div>
  );
}

export default App;
