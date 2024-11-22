import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        {auth && <Link to="/dashboard">Zapisane Prezentacje</Link>}
          {auth && <Link to="/add-presentation">Dodaj Prezentację</Link>}
          {auth ? <span onClick={logout} >Wyloguj</span> : <Link to="/login">Zaloguj</Link>}
          {auth ? null : <Link to="/register">Rejestracja</Link>}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
