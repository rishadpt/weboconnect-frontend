import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Header({ gender }) {
    const navigate = useNavigate()

    const handleClickOnDropdown = (type) => {
        if (type === "logout") {
            localStorage.clear()
            navigate('/login')
        }
        if (type === "profile") {
            navigate("/editprofile")
        }
    }

    return (
        <div className="header-container">
            <Link to={'/'}>
                <h1>WebOconnect</h1>
            </Link>
            <div className="avatar">
                <p>Rishad</p>
                <img src={gender === 'M' ? "/images/m.png" : "/images/f.png"} alt="" />
                <ul className="dropdown">
                    <li onClick={() => handleClickOnDropdown("profile")} className="dropdown-child" >Profile</li>
                    <li onClick={() => handleClickOnDropdown("logout")} className="dropdown-child" >Logout</li>
                </ul>
            </div>
        </div>
    )
}
