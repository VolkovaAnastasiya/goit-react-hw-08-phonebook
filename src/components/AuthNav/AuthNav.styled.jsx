import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 0 40px;
  color: #5c0505;
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #b43bc4;
    border-bottom: 1px solid #b43bc4;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;
