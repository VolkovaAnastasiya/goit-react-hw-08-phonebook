import { useSelector } from 'react-redux';
import UserHome from '../components/UserHome';
import AuthHome from '../components/AuthHome';
import { getSelectorIsLoggedIn } from '../redux/auth/auth-selectors';

function HomePage() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  return <>{isLoggedIn ? <UserHome /> : <AuthHome />}</>;
}

export default HomePage;
