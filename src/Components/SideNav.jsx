import React, { Component } from "react";
import { NavItem, Nav, NavLink, NavbarBrand, Button } from "reactstrap";
import navlogo from "./lib/logo.png";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenavStyle h-100 p-1 overflow-hidden" >
          
        <div className="h-100 d-flex  flex-column justify-content-between  align-items-center ">
            <div className="pl-2">
              <Nav vertical>
              <NavbarBrand>
                      <img
                        src={navlogo}
                        alt="Spotify Logo"
                        width="85%"
                        height="20%"
                        className="pl-3"
                      />
                    </NavbarBrand>
                
                  <div>
                  
                    <NavItem>
                      <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">
                        Disabled Link
                      </NavLink>
                    </NavItem>
                  </div>
               
              </Nav>
            </div>
    
            <div className="d-flex flex-column justify-content-around ">
              <div className="d-flex flex-column justify-content-betweeen align-content-between">
                  <Button>hello</Button>
                  &nbsp;
                  <Button>hello</Button>
                  &nbsp;
              </div>
              <p>Cookie |  Privacy   </p> <p>Policy</p>
            
            </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
