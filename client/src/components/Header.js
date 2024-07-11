import React from 'react'
import './Header.css'
import Teslalogo from '../assets/teslaLogoSmall.svg'
import {AuthContext} from '../contexts/AuthContext'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./menu.js"
// window.onload = function () {
  

//     // document.getElementById("menu").onclick = (e) => {
//     //   console.log(document.getElementsByClassName("menu"));
//     //   e.preventDefault();
//     //   openMenu();
//     // };
//     // document.querySelector("aside button.close").onclick = (e) => {
//     //   closeMenu();
//     // };
//     // document.querySelector(".backdrop").onClick = (e) => {
//     //   closeMenu();
//     // };
// };
const Header = () => {
    const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.querySelector("aside").className = "active";
  }
    const closeMenu = () => {
      document.querySelector(".backdrop").className = "backdrop";
      document.querySelector("aside").className = "";
    };
    const [isHovering, setIsHovering] = useState(false);
    const { currentUser, logout } = useContext(AuthContext);
  
    const handleHover = () => {
      setIsHovering(!isHovering);
    };
  const navigate = useNavigate();
    const logoutUser = () => {
        logout();
        navigate('/login');
      };
    return(
        <div className='header'>
            <div className='header_logo'>
            <a href="home" className="logo">
            <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
            </a>
            </div>

            <div className="header_center">
                <a href='#'><p>Model S</p></a>
                <a href='#'><p>Model 3</p></a>
                <a href='#'><p>Model X</p></a>
                <a href='#'><p>Model Y</p></a>
                <a href='#'><p>Solar Roof</p></a>
                <a href='#'><p>Solar Panels</p></a>
            </div>

            <div className="header_right">
                <a href="#" ><p>Shop</p></a>
                {currentUser ? (
          <div className='user-info' onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <p>{currentUser.email}</p>
            {isHovering && (
              <div className='logout-dropdown'>
                <a href='#' className='logout-link' onClick={logoutUser}>
                  Logout
                </a>
              </div>
            )}
          </div>
        ) : (
          <a href='#'>
            <p>Account</p>
          </a>
        )}
                <div id="menu" className="menu" onClick={openMenu}><p>Menu</p></div>
            </div>
            <div className="backdrop" onClick={closeMenu}></div>
            <aside>
        <button className="close" onClick={closeMenu}>&times;</button>
        <a href="">Existing Inventory</a>
        <a href="">Used Inventory</a>
        <a href="">Trade-In</a>
        <a href="">Test Drive</a>
        <a href="">Insurance</a>
        <a href="">Cybertruck</a>
        <a href="">Roadster</a>
        <a href="">Semi</a>
        <a href="">Charging</a>
        <a href="">Powerwall</a>
        <a href="">Commercial Energy</a>
        <a href="">Utilities</a>
        <a href="">Find Us</a>
        <a href="">Support</a>
        <a href="">Investor Relations</a>
    </aside>
        </div>
    )
}



export default Header