import React from "react";
import { Nav,NavItem,NavLink } from "reactstrap";

export default class Root extends React.Component{
    render() {
        return (
            <>
        <Nav
  justified
  tabs
>
  <NavItem>
    <NavLink
      active
      href="#">
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
    </>
        );
    }
  
}