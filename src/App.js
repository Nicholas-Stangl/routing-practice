  
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router, Link } from '@reach/router';
import Hello from './components/Hello';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <Link to="/home">Get Started!</Link>

      <Router>
      <Hello path="/home"/>
      <Word path="/:param" />
      <Word path="/:param/:textColor"/>
      <Word path="/:param/:textColor/:bgColor"/>
      <Word path="/:param/_/:bgColor"/>
      </Router>
  
    </div>
  );
}

export default App;
