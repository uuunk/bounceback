import React from 'react';
import './Home.scss';
import Home from "./Home";
import Nav from "./Nav";

function App() {
    return (
        <div className="background-gradient">
            <Nav/>
            <Home/>
        </div>
    );
}

export default App;
