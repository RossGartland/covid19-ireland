import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import CoffeeButton from '../custom-button/coffee-button/coffee-button.component';
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
            <Navbar collapseOnSelect className="navbar navbar-expand-lg navbar-light navbar-inverse nav-fill w-100" expand="lg" style={{ background: window.scrollY > 0 || window.innerWidth < 900 ? "rgb(233, 236, 239)" : "transparent" }}>
                <Navbar.Brand href="#">COVID-19 IRELAND</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">HOME</Nav.Link>
                        <NavDropdown title="MORE" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#/covidupdates">UPDATES</NavDropdown.Item>
                            <NavDropdown.Item href="#/work">WORK</NavDropdown.Item>
                            <NavDropdown.Item href="#/faq">F&Q</NavDropdown.Item>
                            <NavDropdown.Item href="#/map">MAP</NavDropdown.Item>
                            <NavDropdown.Item href="#/ni-plan">NI PATHWAY TO RECOVERY</NavDropdown.Item>
                            <NavDropdown.Item href="#/roiroadmap">ROI ROADMAP</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/about">ABOUT</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <CoffeeButton />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default MyNav;