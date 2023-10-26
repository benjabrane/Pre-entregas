import CartWidget from "../CartWidget/CartWidget";
import React from 'react';
import { Link , NavLink } from "react-router-dom"
import Logo from "../../../public/img/Dead-by-Daylight-Logo-Vector.svg-.png"
import "./NavBar.css";
const NavBar = () => {
    return (
        <nav>
            {}
            <h1>
                <Link className="Title" to="/"><img src={Logo} alt="" /></Link>
            </h1>
            {}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/category/Survivors">Supervivientes</NavLink> 
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/category/Killers">Asesinos</NavLink> 
                </li>
            </ul>
        </div>
    </div>
        </nav>
            {}
            <div>CartWidget</div>
        </nav>
    )
};
export default NavBar;