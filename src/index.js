import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tachyons';
import App from './App';
import './index.css';

const particleObj = {
  particles: {
    shadow: {
      enable: true,
      color: '#3CA9D1',
      blur: 0,
    },
    color: {
      value: '#ffffff',
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Particles className="particles" params={particleObj} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
