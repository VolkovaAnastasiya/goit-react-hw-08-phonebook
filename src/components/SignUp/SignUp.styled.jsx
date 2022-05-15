import styled from 'styled-components';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #decee0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #100733;
  font-weight: 400;
  font-size: 14px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #9e1111;
  }
`;
