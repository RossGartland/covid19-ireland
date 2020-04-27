import React from 'react'
import './choose-region.style.css';

const ChooseRegion = (props) => {

    return (
        <div class="card" id="work-region-card">
            <div class="card-body">
                <h5 class="card-title" id="work-region-title">{props.region}</h5>
                <p class="card-text">{props.text}</p>
                <a href={props.link} class="card-link">Click Me!</a>
            </div>
        </div>
    )
}
export default ChooseRegion;