import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
    
          <NavLink to="/ProjectList" activeStyle>
          Projects
          </NavLink>
          <NavLink to="/ProjectDetails" activeStyle>
          ProjectDetails
          </NavLink>
          <NavLink to="/AddProject" activeStyle>
          AddProject
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;