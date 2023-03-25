import React, { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    //! State
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false,
    )
    //! Function
    const toggle = () => {
        setDarkMode(!darkMode)
    }

    //! Effect
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    //! context
    const value = { darkMode, setDarkMode, toggle }

    //! Return
    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
}
