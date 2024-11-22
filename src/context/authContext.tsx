import React, { useState, useEffect, createContext, ReactNode } from 'react';
import axios from 'axios';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [userID, setUserID] = useState<string|null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token).then(isValid => {
        setAuth(isValid);
        if(!isValid) {
          localStorage.removeItem('token');
        }
      })
    }
  }, []);

  const verifyToken = async (token: string): Promise<boolean> => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BE_API_URL}${process.env.REACT_APP_BE_VERIFY_ENDPOINT}`, {
        headers: {
          'x-auth-token': token
        }
      });
      setUserID(res.data.userId);
      return res.data.ok;
    } catch(error) {
      return false;
    }
  }

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setAuth(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, verifyToken, userID }}>
      {children}
    </AuthContext.Provider>
  );
};
