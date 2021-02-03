import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Oldschool kit
export { default as oldskool_hat1 } from './sounds/oldskool/oldskool_hat1.wav';
export { default as oldskool_hat2 } from './sounds/oldskool/oldskool_hat2.wav';
export { default as oldskool_kick1 } from './sounds/oldskool/oldskool_kick1.wav';
export { default as oldskool_kick2 } from './sounds/oldskool/oldskool_kick2.wav';
export { default as oldskool_perc1 } from './sounds/oldskool/oldskool_perc1.wav';
export { default as oldskool_perc2 } from './sounds/oldskool/oldskool_perc2.wav';
export { default as oldskool_perc3 } from './sounds/oldskool/oldskool_perc3.wav';
export { default as oldskool_snare1 } from './sounds/oldskool/oldskool_snare1.wav';
export { default as oldskool_snare2 } from './sounds/oldskool/oldskool_snare2.wav';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
