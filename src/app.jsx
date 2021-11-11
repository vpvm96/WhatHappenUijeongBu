import React from 'react';
import Board from './components/board/board';
import Navbar from './components/navbar/navbar';

import { Link, Route, Switch } from 'react-router-dom';

import './app.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>  
  );
}

export default App;
