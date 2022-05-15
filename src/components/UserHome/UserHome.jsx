import UserImage from '../../images/user.jpg';
import { Image } from './UserHome.styled';

function UserHome() {
  return (
    <>
      <Image src={UserImage} alt="alt" />
    </>
  );
}

export default UserHome;
