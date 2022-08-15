import { Routes, Route } from 'react-router-dom';
import { getIsRefreshed } from 'redux/store';
import { useSelector } from 'react-redux';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { AppBar } from './AppBar/AppBar';
import { MainNav } from './MainNav/MainNav';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoures/PrivateRoutes';
import PublicRoute from './PublicRoutes/PublicRoutes';

import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./Home/Home' /* webpackChunkName: "Home" */));
const Contacts = lazy(() =>
  import('./Contacts/Contacts' /* webpackChunkName: "Contacts" */)
);
const RegisterForm = lazy(() =>
  import('./RegisterForm/RegisterForm' /* webpackChunkName: "RegisterForm" */)
);
const LoginForm = lazy(() =>
  import('./LogInForm/LogInForm' /* webpackChunkName: "LoginForm" */)
);
export default function App() {
  // const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshed = useSelector(getIsRefreshed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshed && (
      <>
        <AppBar>
          <MainNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBar>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginForm />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
        {/* {isLoading
          ? Loading.circle({
              svgColor: '#3152f5',
              backgroundColor: 'rgba(0,0,0,0.2)',
            })
          : Loading.remove()} */}
      </>
    )
  );
}
