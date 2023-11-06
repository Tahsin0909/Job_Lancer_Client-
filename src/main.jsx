import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from '../Routes.jsx'
import { ContextApi } from './Components/ContextApi/ContextApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={Routes} />
    </ContextApi>
  </React.StrictMode>,
)
