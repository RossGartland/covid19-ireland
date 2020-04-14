import React from 'react';
import './coffee-button.style.css';

const CoffeeButton = () => {
    return (
        <React.Fragment>
                <a className="coffee-a"href="https://ko-fi.com/covid_19irelandwebsite?fbclid=IwAR0vESWmJYmVYgiG4vf-W9H5YNLvByXvk0Gmd3FcVyT3roboFCchfJ-AmbI">
                    <span>
                    <img className="coffe-image" src="https://cdn.ko-fi.com/cdn/cup-border.png" />
                        Buy Us a Coffee
                    </span>
                </a>
        </React.Fragment>
    )
}
export default CoffeeButton;