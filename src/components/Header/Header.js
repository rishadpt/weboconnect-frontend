import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/EssentialContext'

export default function Header({ gender }) {
    console.log(gender)
    const navigate = useNavigate()
    const auth = useAuth()

    const handleClickOnDropdown = (type) => { ///drop down functions
        if (type === "logout") {
            window.confirm("Are you sure you want to Logout ?") &&
            auth.logout(navigate)
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
                <p>{auth.userdata?.userName}</p>
                <img src={gender === 'M' ? "/images/m.png" : "/images/f.png"} alt="" />
                <ul className="dropdown">
                    <li onClick={() => handleClickOnDropdown("profile")} className="dropdown-child" >Profile</li>
                    <li onClick={() => handleClickOnDropdown("logout")} className="dropdown-child" >Logout</li>
                </ul>
            </div>
        </div>
    )
}
