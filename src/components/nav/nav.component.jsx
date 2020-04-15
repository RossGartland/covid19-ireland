import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './nav.style.css';

const MyNav = () => {

    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });


    return (
        <div>     
            <Navbar collapseOnSelect className="navbar navbar-expand-lg navbar-light navbar-inverse nav-fill w-100" expand="lg" style={{ background: window.scrollY > 0 ? "white" : "transparent" }}>
                <Navbar.Brand href="#">COVID-19 IRELAND</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">HOME</Nav.Link>
                        <Nav.Link href="#/map">MAP</Nav.Link>
                        <NavDropdown title="INFO" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#/covidupdates">UPDATES</NavDropdown.Item>
                            <NavDropdown.Item href="#/work">WORK</NavDropdown.Item>
                            <NavDropdown.Item href="#/faq">F&Q</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/about">ABOUT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default MyNav;