import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navlink, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function TopMenuBar() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Navbar.Brand href="/">Test01</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/link1">Link 1</Nav.Link>
                    <Nav.Link href="/link2">Link 2</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

/*class TopMenuBar extends Component {
    render() {
        
        return (
            <Navbar expand="sm" className="bg-body-tertiary">
                <Navbar.Brand href="/">Test01</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey="/">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/link1">Link 1</Nav.Link>
                        <Nav.Link href="/link2">Link 2</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default TopMenuBar;*/