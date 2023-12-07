
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img
                    src="../assets/icon/SylvIcon.jpg"  // icon does not show on the page
                    alt="Sylv Icon"
                    className="icon-image"/>
            </Link>
            <div className="navbar-title">CofeeBAR</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/new-page">New Page</Link>
                <Link to="/bitcoin-rates">Bitcoin Rates</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>);};
export default Navbar;


