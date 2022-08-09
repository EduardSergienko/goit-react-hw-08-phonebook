import { Routes, Route } from 'react-router-dom';
import { getIsLoading } from 'redux/store';
import { useSelector } from 'react-redux';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { AppBar } from './AppBar/AppBar';
import { MainNav } from './MainNav/MainNav';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Contacts } from './Contacts/Contacts';
import { Home } from './Home/Home';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LogInForm/LogInForm';

export default function App() {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <AppBar>
        <MainNav />
        <AuthNav />
        <UserMenu />
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/singup" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      {isLoading
        ? Loading.circle({
            svgColor: '#3152f5',
            backgroundColor: 'rgba(0,0,0,0.2)',
          })
        : Loading.remove()}
    </>
  );
}