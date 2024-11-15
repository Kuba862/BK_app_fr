import React, { useState, useEffect, createContext, ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setAuth(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
