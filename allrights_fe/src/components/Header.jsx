import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AllRights from '../assets/images/AllRights.png'; 
import colors from '../styles/colors'; 


const HeaderNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #16162A;
  height: 10rem;
 
`;


const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${colors.navtext}; 
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  align-items: center;
  gap: 4.5rem; 

  &.active {
    color:${colors.white};
  }

  &:hover {
    opacity: 0.8; 
  }
`;


const Header = () => {
  return (
    <HeaderNavBar>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4.5rem', marginLeft: '20vw' ,marginBottom:"3vw"}}>
        <img src={AllRights} alt="로고" />
        <StyledNavLink to="/sound">효과음</StyledNavLink>
        <StyledNavLink to="/music">배경음악</StyledNavLink>
        <StyledNavLink to="">요금제</StyledNavLink>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginRight: '20vw' ,marginBottom:"3vw"}}>
        <StyledNavLink to="/signin">Sign In</StyledNavLink>
        <StyledNavLink to="/signup">Sign Up</StyledNavLink>
      </div>
    </HeaderNavBar>
  );
};

export default Header;
