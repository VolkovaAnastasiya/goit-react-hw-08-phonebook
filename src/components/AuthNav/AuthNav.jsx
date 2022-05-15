import * as React from 'react';
import { BottomNavigationAction, BottomNavigation } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { StyledNavLink } from './AuthNav.styled';

function AuthNav() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label={
          <StyledNavLink to="/register">
            <VpnKeyIcon />
          </StyledNavLink>
        }
        value="recents"
      />
      <BottomNavigationAction
        label={
          <StyledNavLink to="/login">
            <LockOpenIcon />
          </StyledNavLink>
        }
        value="recents"
      />
    </BottomNavigation>
  );
}

export default AuthNav;
