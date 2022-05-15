import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Loader from '../Loader';
import { Header } from './AppBar.styled';
import { getSelectorIsLoggedIn } from '../../redux/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default AppBar;
