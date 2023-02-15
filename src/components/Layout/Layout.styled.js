import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 8px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  color: black;

  &.active {
    color: tomato;
  }
`;