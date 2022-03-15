import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './App';
import RideContext from './RideContext';
ReactDOM.render(
  <React.StrictMode>
  <RideContext>
    <App />
    </RideContext>
  </React.StrictMode>,
  document.getElementById('root')
);
