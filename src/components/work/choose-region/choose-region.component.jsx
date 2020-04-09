import React from 'react'
import Info from '../../work/job-information/job-information.component';

import './choose-region.style.css';

const ChooseRegion = (props) => {

    function handleChange(event) {
        props.onChange(event.target.region);
        props.onChange(event.target.text);
        props.onChange(event.target.onClick);
        props.onChange(event.target.link);
    }

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.region}</h5>
                <p class="card-text">{props.text}</p>
                <a href={props.link} class="card-link">Click Me!</a>
            </div>
        </div>
    )
}
export default ChooseRegion;