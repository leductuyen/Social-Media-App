import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import LeftBar from '../LeftBar/LeftBar'
import NavBar from '../NavBar/NavBar'
import RightBar from '../RightBar/RightBar'

import { DarkModeContext } from '../../context/darkModeContext'
import '../../style.scss'
const Layout = () => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={`theme-${darkMode ? 'light' : 'dark'}`}>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <LeftBar />
                <div style={{ flex: 6 }}>
                    <Outlet />
                </div>
                <RightBar />
            </div>
        </div>
    )
}

export default Layout
