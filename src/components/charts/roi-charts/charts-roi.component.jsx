import React from 'react';
import ROICounty from './roi-county-chart.component';
import ROIAge from './roi-age-chart.component';
import ROIGender from './roi-gender-chart.component';
import ROIHospital from './roi-hospitalisation.component';
import fb from '../../../firebase';

class ChartsROI extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <hr />
                <h5 className="charts-title">Republic of Ireland Charts</h5>
                <ROICounty />
                <ROIAge/>
                <ROIGender/>
                <ROIHospital/>
                <a href="https://www.hse.ie/eng/services/news/newsfeatures/covid19-updates/" target="_blank" rel="noopener noreferrer" className="view-report">Click here to view the HSE daily operations report.</a>
            </React.Fragment>
        )
    }
}

export default ChartsROI;