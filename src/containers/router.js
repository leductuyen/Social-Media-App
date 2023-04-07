import React, { useContext } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import Layout from './Layout/Layout'
const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        return <Navigate to="/login" />
    }
    return children
}
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
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

export const ConfigRouter = () => {
    return <RouterProvider router={router} />
}
