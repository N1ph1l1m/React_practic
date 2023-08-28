import React from "react";
import { Outlet,Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";


export default function Root(){
    return (
        <>
            <Nav justified tabs>
          <NavItem>
            <NavLink active>
            <Link to={"/home"}>
                Home
            </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
            <Link to={"/form"}>
            Forms component
            </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
            <Link to={"/"}>
            Disabled Link
            </Link></NavLink>
          </NavItem>
        </Nav>
        <div id="detail">
            <Outlet />
        </div>
        </>
    );
}
