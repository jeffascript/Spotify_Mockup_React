import React, { Component } from 'react';
import { NavLink, Nav, NavItem, Col } from 'reactstrap';
import TopNav from './TopNav';

class HomePage extends Component {
    render() {
        return (
            <Col className="p-0 h-100">
            <main className="mainstyle h-100">
            <TopNav/>
            </main>
            </Col>
        );
    }
}

export default HomePage;