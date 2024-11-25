import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeaderStyle, SunIcon, MoonIcon } from '../style/header';
import { AuthContext } from '../context/authContext';
import { GlobalContext } from '../context/globalContext';
import Logo from '../images/logo.webp';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(GlobalContext);

  return (
    <HeaderStyle>
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav>
          {auth && <NavLink to="/dashboard">Dashboard</NavLink>}
          {auth && <NavLink to="/add-presentation">Dodaj Prezentację</NavLink>}
          {auth ? (
            <span onClick={logout}>Wyloguj</span>
          ) : (
            <NavLink to="/login">Zaloguj</NavLink>
          )}
          {auth ? null : <NavLink to="/register">Rejestracja</NavLink>}
          <div className="theme-toggle">
          {theme === 'dark' ? (
          <SunIcon onClick={() => toggleTheme('light')} />
          ) : (
          <MoonIcon onClick={() => toggleTheme('dark')} />
          )}
        </div>
        </nav>
      </HeaderStyle>
  );
};

export default Header;
