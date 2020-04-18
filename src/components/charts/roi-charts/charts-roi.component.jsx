import React from 'react';
import ROICounty from './roi-county-chart.component';
import fb from '../../../firebase';

class ChartsROI extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {

        const hseRef = fb.database().ref('hse');

        //Gets link for HSE report.
        hseRef.on('value', snapshot => {

            let hse = snapshot.val();

            this.setState({
                hseReport: hse.hse_daily_report
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <hr />
                <h5 className="charts-title">Republic of Ireland Charts</h5>
                <ROICounty />
                <a href={this.state.hseReport} target="_blank" rel="noopener noreferrer" className="view-report">Click here to view the HSE daily operations report.</a>
            </React.Fragment>
        )
    }
}

export default ChartsROI;