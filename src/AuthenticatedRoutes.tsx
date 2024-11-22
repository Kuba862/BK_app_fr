import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import LoadingSpinner from './components/LoadingSpinner';

export const AuthenticatedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { auth, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};