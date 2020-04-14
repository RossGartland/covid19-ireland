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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/map">Map</Nav.Link>
                        <NavDropdown title="Info" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#/covidupdates">Updates</NavDropdown.Item>
                            <NavDropdown.Item href="#/work">Work</NavDropdown.Item>
                            <NavDropdown.Item href="#/faq">F&Q</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default MyNav;