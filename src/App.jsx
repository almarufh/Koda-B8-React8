import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthContext from './context/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

const path = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  const [auth, setAuth] = React.useState(AuthContext)
  return (
    <AuthContext value={{auth, setAuth}}>
      <RouterProvider router={path} />
    </AuthContext>
  )
}

export default App