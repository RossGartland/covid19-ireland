import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import './nav.style.css';

const Nav = () => {
    
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-inverse nav-fill w-100" style={{ background: window.scrollY > 0 ? "white" : "transparent" }}>
                <a class="navbar-brand" href="#">COVID-19 IRELAND</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li>
                            <a class="nav-link active" href="#">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li >
                            <a class="nav-link active" href="#/map">MAP</a>
                        </li>
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                INFO</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            
                                <a class="dropdown-item" href="#/covidupdates">Updates</a>
                                <a class="dropdown-item" href="#/work">WORK</a>
                                <a class="dropdown-item" href="#/faq">F&Q</a>
                            </div>
                        </li>
                        <li>
                            <a class="nav-link active" href="#/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Nav;