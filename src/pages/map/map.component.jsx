import React from 'react';
import './map.style.css';

const Map = () => {
    return (
        <div className="map-container">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.google.com/maps/d/embed?mid=17uETzH31UQGdH8esyOlJvLHOcB8lV9E2" width="500" height="450"></iframe>
        </div>
        </div>
    )
}
export default Map;