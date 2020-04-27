import React from 'react';
import './overall-stats.style.css';

const Overall = (props) => {

    const getTotalCases = () => {
        if (typeof props.niCases === 'string' && typeof props.roiCases === 'string') {//IF both are strings
            let niCases = parseFloat(props.niCases.replace(/,/g, ''));//Removes comma
            let roiCases = parseFloat(props.roiCases.replace(/,/g, ''));
            let totalCases = niCases + roiCases;//Adds numbers together
            return totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//Replaces comma
        }
        else if (Number.isInteger(props.niCases) && typeof props.roiCases === 'string') { //If 1 var is an int and the other is a string
            let roiCases = parseFloat(props.roiCases.replace(/,/g, ''));
            let totalCases = props.niCases + roiCases;
            return totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.roiCases) && typeof props.niCases === 'string') {
            let niCases = parseFloat(props.niCases.replace(/,/g, ''));
            let totalCases = niCases + props.roiCases;
            return totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.niCases) && Number.isInteger(props.roiCases)) {//If both are int
            return props.niCases + props.roiCases;
        }
    }

    const getTotalDeaths = () => {
        if (typeof props.niDeaths === 'string' && typeof props.roiDeaths === 'string') {//IF both are strings
            let niDeaths = parseFloat(props.niDeaths.replace(/,/g, ''));
            let roiDeaths = parseFloat(props.roiDeaths.replace(/,/g, ''));
            let totalDeaths = niDeaths + roiDeaths;
            return totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.niDeaths) && typeof props.roiDeaths === 'string') { //If 1 var is an int and the other is a string
            let roiDeaths = parseFloat(props.roiDeaths.replace(/,/g, ''));
            let totalDeaths = props.niDeaths + roiDeaths;
            return totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.roiDeaths) && typeof props.niDeaths === 'string') {
            let niDeaths = parseFloat(props.niDeaths.replace(/,/g, ''));
            let totalDeaths = niDeaths + props.roiDeaths;
            return totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.niDeaths) && Number.isInteger(props.roiDeaths)) {//If both are int
            return props.niDeaths + props.roiDeaths;
        }
    }

    const getTotalTested = () => {
        if (typeof props.niTested === 'string' && typeof props.roiTested === 'string') {//IF both are strings
            let niTested = parseFloat(props.niTested.replace(/,/g, ''));
            let roiTested = parseFloat(props.roiTested.replace(/,/g, ''));
            let totalTested = niTested + roiTested;
            return totalTested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.niTested) && typeof props.roiTested === 'string') { //If 1 var is an int and the other is a string
            let roiTested = parseFloat(props.roiTested.replace(/,/g, ''));
            let totalTested = props.niTested + roiTested;
            return totalTested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.roiTested) && typeof props.niTested === 'string') {
            let niTested = parseFloat(props.niTested.replace(/,/g, ''));
            let totalTested = niTested + props.roiTested;
            return totalTested.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else if (Number.isInteger(props.niTested) && Number.isInteger(props.roiTested)) {//If both are int
            return props.niTested + props.roiTested;
        }

    }

    return (
        <div class="card" id="overall-card">
            <h4 class="card-header" id="overall-title">Ireland</h4>
            <div class="card-body">
                <h5 class="card-title card-title-overall">Population: <span>6.786 million</span></h5>
                <h5 class="card-title card-title-overall">Cases: <span id="total-cases">{getTotalCases()}</span></h5>
                <h5 class="card-title card-title-overall">New: <span>{props.newTotalCases}</span></h5>
                <h5 class="card-title card-title-overall">Deaths: <span>{getTotalDeaths()}</span></h5>
                <h5 class="card-title card-title-overall">New: <span >{props.newTotalDeaths}</span></h5>
                <h5 class="card-title card-title-overall">Tested: <span>{getTotalTested()}</span></h5>
                <p class="card-text">Statistics last updated on <span id="last-updated">{props.lastUpdated}.</span></p>
            </div>
        </div>
    )
}
export default Overall;