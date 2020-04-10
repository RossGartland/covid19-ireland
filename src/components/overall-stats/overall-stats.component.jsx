import React from 'react';

const Overall = (props) => {

    return (
        <div class="card">
            <h4 class="card-header">Ireland</h4>
            <div class="card-body">
                <h5 class="card-title">Cases: {props.totalCases}</h5>
                <h5 class="card-title">Deaths: {props.totalDeaths}</h5>
                <h5 class="card-title">Tested: {props.totalTested}</h5>
                <p class="card-text">Example text  Example text  Example text  Example text  Example text </p>
            </div>
        </div>
    )
}
export default Overall;