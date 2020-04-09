import React, {useState} from 'react';

const RegStats = (props) => {

    function handleChange(event) {
        props.onChange(event.target.regValue);
      }

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.regValue}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Cases: 0</h6>
                <h6 class="card-subtitle mb-2 text-muted">Deaths: 0</h6>
                <h6 class="card-subtitle mb-2 text-muted">Recoverd: 0</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
export default RegStats;