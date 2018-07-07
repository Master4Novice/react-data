import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="sm">
                    <NavbarBrand  href="/">RDS - <FontAwesomeIcon id="up" icon="angle-double-up" /> React Data Structure <FontAwesomeIcon id="down" icon="angle-double-down" /></NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                  Array
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to="/array/traverse">
                                        <DropdownItem>Traverse</DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link to="/array/searching">Searching</Link>
                                    </DropdownItem>                                                             
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}