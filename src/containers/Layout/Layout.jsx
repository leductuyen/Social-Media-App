import React from 'react'
import NavBar from '../NavBar/NavBar'
import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
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
