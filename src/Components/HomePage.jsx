import React, { Component } from 'react';
import { NavLink, Nav, NavItem } from 'reactstrap';

class HomePage extends Component {
    render() {
        return (
            <main className="mainstyle h-100">
                <h1>
                   <Nav>
                       <NavItem>
                <NavLink>
                    hello
                </NavLink>
                       </NavItem>
                          

                   </Nav>
                </h1>
            </main>
        );
    }
}

export default HomePage;