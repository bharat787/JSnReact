import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// shifting components and the importing 
// helps in organisation
import MyInfo from "./MyInfo.js"

// using components
function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
}
// for multiple elements use <div><div/>


ReactDOM.render(
  //<React.StrictMode>
   // <App />
 // </React.StrictMode>,
 <MyInfo/>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
