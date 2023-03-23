import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import Layout from './Layout/Layout'
import Profile from '../pages/Profile/Profile'

const ConfigRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/profile/:id',
                    element: <Profile />,
                },
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ])
    return <RouterProvider router={router} />
}
export default ConfigRouter
