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
          {auth && <Link to="/add-presentation">dodaj prezentację</Link>}
          {auth ? <span onClick={logout} >wyloguj</span> : <Link to="/login">zaloguj</Link>}
          {auth ? null : <Link to="/register">rejestracja</Link>}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
