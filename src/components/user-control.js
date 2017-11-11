import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon } from 'react-bootstrap';
import { showLogin, getCurrentUser, logout } from '../actions/authentication-actions';

class UserControl extends Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        const { profile, showLogin, logout } = this.props;
        if (profile) {
            return (
                <NavDropdown title={profile.name} id="user-ctrl-main">
                    <NavItem onClick={ logout }>
                    <Glyphicon glyph="off" /> Logout 
                    </NavItem>
                </NavDropdown>
            )
        }
        return <NavItem onClick={ showLogin }>Login</NavItem>

    }
}

function mapStateToProps(state) {
    let newProps = {
        profile: state.profile
    };
    return newProps;
}

export default connect(mapStateToProps, { showLogin, getCurrentUser, logout })(UserControl);