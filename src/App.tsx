import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './config/router/router';

function App() {
  return (
    <div className="App">
      <>
        <AppRouter />
      </>
    </div>
  );
}

export default App;
