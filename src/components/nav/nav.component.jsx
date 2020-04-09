import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Covid-19 Ireland</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li>
                            <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li >
                            <a class="nav-link" href="#/map">MAP</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                INFO</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            
                                <a class="dropdown-item" href="#">Coronavirus</a>
                                <a class="dropdown-item" href="#/work">WORK</a>
                                <a class="dropdown-item" href="#/faq">F&Q</a>
                            </div>
                        </li>
                        <li>
                            <a class="nav-link" href="#/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Nav;