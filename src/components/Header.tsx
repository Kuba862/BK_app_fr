import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../style/header';
import { AuthContext } from '../context/authContext';

interface HeaderProps {
  defineWindowHandler: Dispatch<
    SetStateAction<{ login: boolean; register: boolean }>
  >;
  appWindow: { login: boolean; register: boolean };
  showEditorHandler: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ defineWindowHandler, showEditorHandler }) => {
  const { auth, logout } = useContext(AuthContext);
  
  return (
    <HeaderStyle auth={auth} >
      <Link to="/" >logo</Link>
      <nav>
        <ul>
          {auth && (
            // <li onClick={() => showEditorHandler(true)} >
            //   dodaj prezentację
            // </li>
            <Link to="/add-presentation">dodaj prezentację</Link>
          )}
          <li
            value={auth ? 1 : 0}
            onClick={(e: React.MouseEvent<HTMLLIElement>) => {
              defineWindowHandler({ login: true, register: false });
              if (e.currentTarget.textContent) {
                logout();
              }
            }}
          >
            {!auth ? 'zaloguj' : 'wyloguj'}
          </li>
          <li
            onClick={() =>
              defineWindowHandler({ login: false, register: true })
            }
          >
            rejestracja
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
