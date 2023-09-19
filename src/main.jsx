import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Header } from './Components/Header/Header.jsx'
import { Dark_Mode } from './Components/Dark_Mode/Dark_Mode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Dark_Mode/>
    <Header />
    <App />
  </React.StrictMode>,
)
