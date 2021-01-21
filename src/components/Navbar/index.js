// store all jsx and contents
import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

export const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">Logo</NavLogo>
                  <MobileIcon onClick={toggle}>
                     <FaBars />
                  </MobileIcon>
                  <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='project'>Projects</NavLinks>
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem> 
                    <NavBtn>
                        <NavBtnLink to="/contact"> Contact Us </NavBtnLink>
                    </NavBtn>
                  </NavMenu> 
              </NavbarContainer>
          </Nav>
        </>
    );
};

