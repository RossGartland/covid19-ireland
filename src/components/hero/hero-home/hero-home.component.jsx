import React from 'react'
import './hero-home.style.css';

const HeroHome = () => {
    return (
        <div>
            <div class="hero-text">
                <h1 id="hero-heading">COVID-19 Ireland</h1>
                <p>Providing You With The Latest Facts & Figures.</p>
                <a type="button" class="btn" id="home-hero-button" href="#/faq">FIND OUT MORE</a>
            </div>
        </div>
    )
}
export default HeroHome;