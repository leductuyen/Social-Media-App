import React, { useContext } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import Layout from './Layout/Layout'
import Profile from '../pages/Profile/Profile'
import { AuthContext } from '../context/authContext'

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
