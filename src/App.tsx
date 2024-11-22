import React, { useState, lazy, Suspense, useContext } from 'react';
import { createBrowserRouter, RouterProvider, redirect, Navigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import Header from './components/Header';
import { Root } from './style/root';
import Login from './components/Login';
import Register from './components/Register';
import TextEditor from './components/textEditor/TextEditor';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './Home';
import Layout from './Layout';
// const Home = lazy(() => import('./components/Home'));
// const Login = lazy(() => import('./components/Login'));
// const Register = lazy(() => import('./components/Register'));
// const TextEditor = lazy(() => import('./components/textEditor/TextEditor'));

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useContext(AuthContext);

  if(!auth) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>;
}

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useContext(AuthContext);

  if(auth) {
    return <Navigate to="/dashboard" replace />
  }
  return <>{children}</>;
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>Error</div>,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: '/add-presentation',
          element: (
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <TextEditor />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: '/dashboard',
          element: (
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

const App: React.FC = () => {

  return (
    <Root>
      <RouterProvider router={router}  />
    </Root>
  );
};

export default App;
