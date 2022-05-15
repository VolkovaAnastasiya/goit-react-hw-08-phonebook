import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';

export default styled(BottomNavigation)``;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 0 40px;
  color: #3e1268;
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #b43bc4;
    border-bottom: 1px solid #b43bc4;
  }
`;
