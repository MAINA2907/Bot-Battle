import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BotSpecs from './Components/BotSpecs';

const routes = [
  {
    path: '/Bot-Battle',
    element:<App/>,
  },
  {
    path: '/Bot-Battle/:id',
    element:<BotSpecs/>,
  }
];

export {routes}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {createBrowserRouter(routes)} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
