import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeaderStyle } from '../style/header';
import { AuthContext } from '../context/authContext';
import Logo from '../images/logo.webp';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);

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
      </nav>
    </HeaderStyle>
  );
};

export default Header;
