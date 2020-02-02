import React, { Component } from "react";
import { NavItem, Nav, NavLink, NavbarBrand } from "reactstrap";
import navlogo from "./lib/logo.png";
import { IoMdHome} from "react-icons/io";
import { MdReorder} from "react-icons/md";
import { FiSearch} from "react-icons/fi";
import {NavLink as nLink} from "react-router-dom"




class SideNav extends Component {
    state={
        active: false
    }
  render() {
      let classname = this.state.active ? "active" : null
    return (
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

              <div>
                <NavItem className="navlistStyle">
                  <NavLink href="#" NavLink activeClassName="active"> <IoMdHome />  <small>  <strong>Home</strong> </small>
                  </NavLink>
                </NavItem>

                <NavItem className="navlistStyle">
                  <NavLink href="#" NavLink activeClassName="active"><FiSearch />  <small> <strong>Search</strong></small></NavLink>
                </NavItem>
                <NavItem className="navlistStyle">
                  <NavLink href="#" ><MdReorder /> <small> <strong>Your Library</strong></small></NavLink>
                </NavItem>
                <NavItem className="navlistStyle">
                  <NavLink disabled href="#">
                    Disabled Link
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </div>

          <div className="d-flex flex-column justify-content-around w-75 ">
            <div className="d-flex flex-column justify-content-betweeen align-content-between">
              <button className="navbutton">LOGIN</button>
              <br />
              <button className="navbutton">SIGN UP</button>
              <br />
            </div>
            <small className="text-start text-white-50">
              Cookie | Privacy{" "}
            </small>{" "}
            <small className="text-white-50">&nbsp; Policy </small>
            <small></small>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
