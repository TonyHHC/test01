import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navlink, useLocation, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function TopMenuBar() {
    const location = useLocation();
    console.log(new Date().toLocaleString() + " " + location.pathname);

    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Navbar.Brand href="/">Test01</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname}>
                    <Link to="/">Home</Link>
                    <Link to="/link1">Link 1</Link>
                    <Link to="/link2">Link 2</Link>
                    <Nav.Link href="/">Home</Nav.Link>
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

/*export default function TopMenuBar() {
    const location = useLocation();
    console.log(new Date().toLocaleString() + " " + location.pathname);

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
}*/

