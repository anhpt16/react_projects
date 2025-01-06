import React, { useEffect, useState } from 'react';
import "../styles/Header.css";

import Logo from "../assets/logo192.png";

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || 'light');

  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme])

  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt="LOGO" />
            <span>Taskmate</span>
        </div>
        <div className='theme'>
            <span onClick={() => setTheme("light")} className={`light ${theme === 'light' ? 'active' : ''}`}></span>
            <span onClick={() => setTheme("medium")} className={`medium ${theme === 'medium' ? 'active' : ''}`}></span>
            <span onClick={() => setTheme("dark")} className={`dark ${theme === 'dark' ? 'active' : ''}`}></span>
            <span onClick={() => setTheme("gOne")} className={`gOne ${theme === 'gOne' ? 'active' : ''}`}></span>
            <span onClick={() => setTheme("gTwo")} className={`gTwo ${theme === 'gTwo' ? 'active' : ''}`}></span>
            <span onClick={() => setTheme("gThree")} className={`gThree ${theme === 'gThree' ? 'active' : ''}`}></span>
        </div>
    </header>
  )
}
