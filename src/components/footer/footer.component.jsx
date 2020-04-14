import React from 'react';
import CoffeeButton from '../custom-button/coffee-button/coffee-button.component';
import './footer.style.css';

const Footer = () => {
    return (
        <div class="footer">
            <div>
                <h5>Like our website? </h5> 
                <CoffeeButton/>
            </div>
        </div>
    )
}

export default Footer;