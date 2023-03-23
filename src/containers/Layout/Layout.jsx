import React from 'react'
import NavBar from '../Navbar/Navbar'
import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex' }}>
                <LeftBar />
                <Outlet />
                <RightBar />
            </div>
        </div>
    )
}

export default Layout
