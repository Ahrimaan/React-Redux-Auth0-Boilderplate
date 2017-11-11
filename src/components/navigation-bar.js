import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserControl from './user-control';
import { Navbar, Nav,NavItem, NavDropdown,MenuItem } from 'react-bootstrap';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a >YOUR APP</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <UserControl />
                    
                    <NavItem></NavItem>
                </Nav>
            </Navbar>
        )
    }
}