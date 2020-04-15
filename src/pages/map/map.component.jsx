import React from 'react';
import './map.style.css';

const Map = () => {
    return (
        <div className="map-container">
        <div class="embed-responsive embed-responsive-1by1">
            <iframe class="embed-responsive-item" src="https://www.google.com/maps/d/embed?mid=17uETzH31UQGdH8esyOlJvLHOcB8lV9E2" width="400" height="350"></iframe>
        </div>
        </div>
    )
}
export default Map;