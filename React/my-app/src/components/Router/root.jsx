import React from "react";
import { Outlet,Link } from "react-router-dom";
import { Nav, NavItem, NavLink} from "reactstrap";


export default class Root extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            active:1,
        }
        this.clickActive = this.clickActive.bind(this);
        
    }
    clickActive(){
        
    }
   
    render(){
        return (
            
            <>
                <Nav tabs>
              <NavItem>
                <NavLink active>
                <Link to={"/home"} onClick={this.clickActive}>
                    Home
                </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to={"/second"}>
                Second Component
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
                <Link to={"/temp"}>
                Temp
                </Link></NavLink>
              </NavItem>
            </Nav>
            <div id="detail">
                <Outlet />
            </div>
            </>
        );
    }

   
}
