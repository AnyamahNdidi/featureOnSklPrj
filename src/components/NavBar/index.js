import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import RegModal from "../Regpages/RegModal"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <FaMagento style={{ marginRight: "10px" }} />
            Teens Project
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/overview">Ola</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/prospect">Gideon</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/whatis">Lekan</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Elementry">Olorunda</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/curriculum">Peter</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="signup">JOIN FOR FREE</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <RegModal />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
