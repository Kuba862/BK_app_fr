import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import { Root } from './style/root';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './Home';
import Layout from './Layout';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { ProtectedRoute, PublicRoute } from './RouteGuards';
import AppRoutes from './AppRoutes';
import { AuthProvider } from './context/authContext';
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const TextEditor = lazy(() => import('./components/textEditor/TextEditor'));
const PresentationsList = lazy(() => import('./user/PresentationsList'));
const Dashboard = lazy(() => import('./user/Dashboard'));

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
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: '/presentations/:id',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <PresentationsList />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Root>
        <AppRoutes />
        </Root>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
