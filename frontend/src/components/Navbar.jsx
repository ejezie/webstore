import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <h2>SmartMobile<i class="fad fa-mobile"></i></h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart">
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar
