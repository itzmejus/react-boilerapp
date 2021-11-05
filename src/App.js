import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Layouts/Navbar';
function App() {
  return (
    <div className="App">
      
        <Navbar/>
      <Router>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>

       
      </Router>

      
    </div>
  );
}

export default App;
