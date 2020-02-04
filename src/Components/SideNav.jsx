import React, { Component } from "react";
import { NavItem, Nav,  NavbarBrand, Col } from "reactstrap";
import navlogo from "./lib/logo.png";
import { IoMdHome } from "react-icons/io";
import { MdReorder, MdAddBox } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

class SideNav extends Component {
  state = {
    active: false
  };
  render() {
    let classname = this.state.active ? "active" : null;
    return (
      <Col xs="3" sm="3" md="3" lg="2" xl="2" className="p-0 h-100">
        <div className="sidenavStyle h-100 p-2 overflow-hidden">
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
                <br />
                <div>
                  <NavItem className="navlistStyle">
                    <NavLink className="navlinkStyle" to="/home" activeClassName="chosen">
                   
                      <IoMdHome />
                      <span>
                      
                       <small> <strong>Home</strong></small>
                      </span>
                    </NavLink>
                  </NavItem>

                  <NavItem className="navlistStyle">
                    <NavLink to="/search" className="navlinkStyle" activeClassName="chosen">
                   
                    
                      
                      <FiSearch />
                      <span>
                   
                        <small><strong>Search</strong></small>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="navlistStyle">
                    <NavLink to="/library" className="navlinkStyle" activeClassName="chosen">
                    
                      <MdReorder />
                      <span>
                      
                       <small> <strong>Your Library</strong></small>
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="navlistStyle">
                    <NavLink disabled to="/nothing" className="navlinkStyle" activeClassName="chosen">
                      Disabled
                    </NavLink>
                  </NavItem>

                  <NavItem
                    style={{ listStyle: "none" }}
                    className="navlistStyle mt-2"
                  >
                    <NavLink to="/playlist" className="navlinkStyle" activeClassName="chosen">
                   
                      <MdAddBox className="iconStyle" />
                      <span> <small>Create Playlist </small></span>
                    </NavLink>
                  </NavItem>
                </div>
              </Nav>
            </div>

            <div className="d-flex flex-column justify-content-around w-75 ">
              <div className="d-flex flex-column justify-content-betweeen align-content-between">
                <button className="navbutton">
                  <small>LOGIN</small>
                </button>
                <br />
                <button className="navbutton">
                  <small>SIGN UP</small>
                </button>
                <br />
              </div>
              <small className="text-start text-white-50">
                Cookie | Privacy
              </small>
              <small className="text-white-50">&nbsp; Policy </small>
              <small></small>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default SideNav;
