import React from 'react';
import './map.style.css';

const Map = () => {
    return (
        <div className="map-container">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe className="map" src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx" width="1800" height="900"></iframe>
        </div>
        </div>
    )
}
export default Map;