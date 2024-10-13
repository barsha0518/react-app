import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import './App.js';
import reportWebVitals from './reportWebVitals.js';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from'./components/Login.jsx';
import Signup from'./components/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/", 
    element: ( <Home/> ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/Login",
    element:( <Login /> ),
  },
  {
    path: "./Signup",
    element:( <Signup /> ),
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


reportWebVitals();
