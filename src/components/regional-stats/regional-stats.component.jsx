import React, {useState} from 'react';
import './regional-stats.style.css';

const RegStats = (props) => {

    function handleChange(event) {
        props.onChange(event.target.regValue);
      }

    return (
        <div class="card" id="reg-stats-card">
            <div class="card-body">
                <h5 class="card-title" id="reg-stats-title">{props.regValue}</h5>
                <h6 class="card-subtitle mb-2 reg-stats-nums">Population: <span  className="stats-num">{props.population}</span></h6>
                <h6 class="card-subtitle mb-2 reg-stats-nums">Cases: <span className="stats-num">{props.Cases}</span></h6>
                <h6 class="card-subtitle mb-2 reg-stats-nums">New: <span className="stats-num">{props.newCases}</span></h6>
                <h6 class="card-subtitle mb-2 reg-stats-nums">Deaths: <span className="stats-num">{props.Deaths}</span></h6>
                <h6 class="card-subtitle mb-2 reg-stats-nums">New: <span className="stats-num">{props.newDeaths}</span></h6>
                <h6 class="card-subtitle mb-2 reg-stats-nums">Tested: <span className="stats-num">{props.Tested}</span></h6>
            </div>
        </div>
    )
}
export default RegStats;