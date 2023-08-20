import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import Main_section from './components/Main_section.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <App /> */}
        <Main_section />
  </BrowserRouter>
    
  
)
