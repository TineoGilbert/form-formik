import React from 'react';
import ReactDOM from 'react-dom';
import MyForm from './components/MyForm';
import './index.css';
//import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <div className="contenedor">
      <MyForm/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


