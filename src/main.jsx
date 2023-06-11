import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'primereact/resources/primereact.min.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import router from './routes'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import './index.css';
import Navbar from './component/Navbar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Navbar/>
  <RouterProvider router={router}/>
  </>
)
