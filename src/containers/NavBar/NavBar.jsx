import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { DarkModeContext } from '../../context/darkModeContext'
import './NavBar.scss'
const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)
    const { currentUser } = useContext(AuthContext)
    const handleOnChangeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span>lamasocial</span>
                </Link>

                <HomeOutlinedIcon />

                {darkMode ? (
                    <LightModeOutlinedIcon onClick={handleOnChangeMode} />
                ) : (
                    <DarkModeOutlinedIcon onClick={handleOnChangeMode} />
                )}

                <GridViewOutlinedIcon />

                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
