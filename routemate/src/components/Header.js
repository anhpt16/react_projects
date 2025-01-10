import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/Header.css";
import Logo from "../assets/logo192.png";

export const Header = () => {
  return (
    <header className='header'>
      <Link to="/" className='logo'>
        <img src={Logo} alt="LOGO" />
        <span>RouterMate</span>
      </Link>
      <nav className='navbar'>
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </nav>
    </header>
  )
}
