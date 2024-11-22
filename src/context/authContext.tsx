import React, { useState, useEffect, createContext, ReactNode } from 'react';
import axios from 'axios';

interface AuthProviderProps {
  children?: ReactNode;
  userID?: string | null;
  loading?: boolean;
  login?: (token: string, userID: string) => void;
  logout?: () => void;
  verifyToken?: (token: string) => Promise<boolean>;
}

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [userID, setUserID] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserID = localStorage.getItem('uID');

    if (token && storedUserID) {
      verifyToken(token).then(isValid => {
        setAuth(isValid);
        if(!isValid) {
          localStorage.removeItem('token');
          localStorage.removeItem('uID');
        }
        setLoading(false);
      })
    } else {
      setLoading(false);
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

  const login = (token: string, userID: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('uID', userID);
    setAuth(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, verifyToken, userID, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
