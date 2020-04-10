import React, {useState} from 'react';

const RegStats = (props) => {

    function handleChange(event) {
        props.onChange(event.target.regValue);
      }

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.regValue}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Cases: {props.Cases}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Deaths: {props.Deaths}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Tested: {props.Tested}</h6>
            </div>
        </div>
    )
}
export default RegStats;