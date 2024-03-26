import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import './index.css'

// components
import Error from "./components/pages/Error.jsx";
import About from "./components/pages/About.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Contact from "./components/pages/Contact.jsx";
import Resume from "./components/pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <About />
      }, {
        path: '/portfolio',
        element: <Portfolio />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/resume',
        element: <Resume />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)