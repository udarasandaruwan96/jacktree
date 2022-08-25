import React from 'react';
import ReactDOM from 'react-dom/client';
import './Asets/css/regal_library.css';
import './Asets/css/regal_style.css';
import './Asets/fonts/themify-icons.css';
import './Asets/fonts/hotel/flaticon.css';
 
import reportWebVitals from './reportWebVitals';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
