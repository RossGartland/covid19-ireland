import React from 'react';
import NICouncil from './ni-council-chart.component';
import NIAge from './ni-age-chart.component';
import NIGender from './ni-gender-chart.component';
import NICases from './ni-cases-chart.component';
import fb from '../../../firebase';


class ChartsNI extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <hr/>
                <NICouncil />
                <NIAge />
                <NIGender />
                <NICases/>
                <a href="https://www.publichealth.hscni.net/publications/covid-19-surveillance-reports" target="_blank" rel="noopener noreferrer" className="view-report">Click here to view the HSCNI surveillance reports.</a>
            </React.Fragment>
        )
    }
}

export default ChartsNI;