import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    //! State
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null,
    )

    //! Function
    const login = () => {
        //TO DO
        setCurrentUser({
            id: 1,
            name: 'John Doe',
            profilePic:
                'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
        })
    }
    //! useEffect
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    //! context
    const value = { currentUser, login }

    //! Return
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
