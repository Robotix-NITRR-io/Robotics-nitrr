import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/ProjectList">
          Projects
          </NavLink>
          <NavLink to="/ProjectDetails">
          ProjectDetails
          </NavLink>
          <NavLink to="/AddProject">
          AddProject
          </NavLink>
          <NavLink to="/sign-up">
            Sign Up
          </NavLink>
          <NavLink to="/card">
            card
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;