import React from 'react';
// import styles from "./index.css"

import {TextField, Button}from '@mui/material';

import './App.css';
import './index.css';
import LinksTableComponent from './components/LinksTableComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1 className="text-6xl">URL Shortener</h1>
        </p>
        <span>
          <span><TextField id="outlined-basic" label="Shorten this URL" variant="outlined" /> 
          
          </span>
          <p></p>
          <Button variant="contained">Shorten!</Button>
          <LinksTableComponent/>
        </span>
      </header>
    </div>
  );
}

export default App;
