import {
  Container,
  Wrapper,
  Logo,
  LogoPhone,
  Image,
  CardImage,
  ImageSubtitle,
  Subtitle,
} from './AuthHome.styled';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';

import Love from '../../images/home.jpg';

function AuthHome() {
  return (
    <>
      <Wrapper>
        {' '}
        <Container>
          <LogoPhone>
            <VolunteerActivismRoundedIcon sx={{ fontSize: 100 }} />
          </LogoPhone>
          <Logo>
            Phone<LogoPhone>Book</LogoPhone>
          </Logo>
        </Container>
        <CardImage>
          <Image src={Love} alt="I love phone." />
          <ImageSubtitle>
            <Subtitle>
              You've never created a phonebook so fast before. Really. Try to
              use our website.
            </Subtitle>
          </ImageSubtitle>
        </CardImage>
      </Wrapper>
  
    </>
  );
}

export default AuthHome;
