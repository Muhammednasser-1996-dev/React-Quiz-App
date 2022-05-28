import React from 'react';
import './App.css';
import RouteModule from './infrastructure/modules/routes';
import { BrowserRouter } from 'react-router-dom'


const App = () => {



  return (
    <div className="App">
      <BrowserRouter >
        <RouteModule />
      </BrowserRouter>
    </div>
  );
}

export default App;
