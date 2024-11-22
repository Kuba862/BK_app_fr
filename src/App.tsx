import React, { useState, lazy, Suspense, useContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthContext } from './context/authContext';
import { Root } from './style/root';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './Home';
import Layout from './Layout';
// const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const TextEditor = lazy(() => import('./components/textEditor/TextEditor'));

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useContext(AuthContext);

  if (auth) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Nie ma takiej strony 404</div>,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          </PublicRoute>
        ),
      },
      {
        path: '/login',
        element: (
          <PublicRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          </PublicRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <PublicRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <Register />
            </Suspense>
          </PublicRoute>
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
      <RouterProvider router={router} />
    </Root>
  );
};

export default App;
