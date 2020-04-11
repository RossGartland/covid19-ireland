import React from 'react';
import './overall-stats.style.css';

const Overall = (props) => {

    return (
        <div class="card" id="overall-card">
            <h4 class="card-header" id="overall-title">Ireland</h4>
            <div class="card-body">
                <h5 class="card-title card-title-overall">Cases: <span id="total-cases">{props.totalCases}</span></h5>
                <h5 class="card-title card-title-overall">Deaths: <span>{props.totalDeaths}</span></h5>
                <h5 class="card-title card-title-overall">Tested: <span>{props.totalTested}</span></h5>
                <p class="card-text">Statistics are updated daily.</p>
            </div>
        </div>
    )
}
export default Overall;