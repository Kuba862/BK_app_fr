import React, { Dispatch, SetStateAction, useContext } from 'react';
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
      <div>logo</div>
      <nav>
        <ul>
          {auth && (
            <li onClick={() => showEditorHandler(true)} >
              dodaj prezentację
            </li>
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
