import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ProtectedRoute, PublicRoute } from './RouteGuards';
import Layout from './Layout';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const TextEditor = lazy(() => import('./components/textEditor/TextEditor'));
const PresentationsList = lazy(() => import('./user/PresentationsList'));
const Dashboard = lazy(() => import('./user/Dashboard'));
const Verification = lazy(() => import('./Verification'));
const ForgotPassword = lazy(() => import('./user/ForgotPassword'));
const ResetPassword = lazy(() => import('./user/ResetPassword'));
const Media = lazy(() => import('./user/Media'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Login />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Register />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <PublicRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <ForgotPassword />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="reset-password"
          element={
              <Suspense fallback={<LoadingSpinner />}>
                <ResetPassword />
              </Suspense>
          }
        />
        <Route
          path="add-presentation/:id"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <TextEditor />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard/:id"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Dashboard />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="media/:id"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Media />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="presentations/:id"
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <PresentationsList />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="verify/:token" element={
          <PublicRoute>
            <Suspense fallback={<LoadingSpinner />}>
          <Verification />
          </Suspense>
          </PublicRoute>
          } 
          />
      </Route>
    </Routes>
  );
};

export default AppRoutes;