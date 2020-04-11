import React from 'react';
import Fade from 'react-reveal/Fade'; 
import './home-banner.style.css';

const HomeBanner = () => {
    return (
        <div id="banner">        
        <div class="layer">
        <Fade left>
            <h1 id="banner-title">Out of Work Due to Covid-19? <br/>
            We Have the Answers Here!</h1>
                </Fade>
            <a class="btn" id="btn-banner" href="#">FIND OUT MORE</a>
        </div>  
    </div>
    )
}
export default HomeBanner;