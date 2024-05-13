import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Router/Route.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-pns'>
    <AuthProvider>
      <RouterProvider router={route}/>
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
