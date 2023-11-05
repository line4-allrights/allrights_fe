import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AllRights from '../assets/images/AllRights.png'; 
import colors from '../styles/colors'; 


const HeaderNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgColor};
`;

const LogoImage = styled.img`
  width: 5vw; 
  height: 6vh;

  @media (max-width: 768px) {
    width: 6vw; 
    height: 1.5vh;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${colors.navtext}; 
  font-size: 0.7vw;
  font-weight: 500;
  text-decoration: none;
  align-items: center;

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
      <div style={{display: "flex", justifyContent: "space-between", width: "80%"}}>
        <div style={{display: "flex", gap: "2vw", alignItems: "center"}}>
          <LogoImage src={AllRights} alt="로고"/>
          <StyledNavLink to="/sound">효과음</StyledNavLink>
          <StyledNavLink to="/music">배경음악</StyledNavLink>
          <StyledNavLink to="">요금제</StyledNavLink>
        </div>
        <div style={{display: "flex", gap: "1vw", alignItems: "center"}}>
          <StyledNavLink to="/signin">Sign In</StyledNavLink>
          <p style={{color: colors.navtext}}>|</p>
          <StyledNavLink to="/signup">Sign Up</StyledNavLink>
        </div>
      </div>
    </HeaderNavBar>
  );
};

export default Header;
