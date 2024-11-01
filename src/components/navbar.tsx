// src/components/Navbar.tsx
import React from "react";
import { Sticky, StickyContainer } from "react-sticky";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100vw;
  z-index: 1000;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 1rem;
`;

const NavItem = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.orange};
  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const Navbar: React.FC = () => {
  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <NavContainer style={style}>
            <NavItems>
              <Link to="home" smooth={true}><NavItem>Home</NavItem></Link>
              <Link to="services" smooth={true}><NavItem>Services</NavItem></Link>
              <Link to="gallery" smooth={true}><NavItem>Gallery</NavItem></Link>
              <Link to="about" smooth={true}><NavItem>About</NavItem></Link>
              <Link to="contact" smooth={true}><NavItem>Contact</NavItem></Link>
            </NavItems>
          </NavContainer>
        )}
      </Sticky>
    </StickyContainer>
  );
};