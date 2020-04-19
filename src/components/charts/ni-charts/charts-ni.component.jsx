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

    componentDidMount() {

        const hscniRef = fb.database().ref('hscni');

        //Gets link for HSCNI report.
        hscniRef.on('value', snapshot => {

            let hscni = snapshot.val();

            this.setState({
                hscniReport: hscni.hscni_surveillance_reports
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <hr/>
                <h5 className="charts-title">Northern Ireland Charts</h5>
                <NICouncil />
                <NIAge />
                <NIGender />
                <NICases/>
                <a href={this.state.hscniReport} target="_blank" rel="noopener noreferrer" className="view-report">Click here to view the HSCNI surveillance reports.</a>
            </React.Fragment>
        )
    }
}

export default ChartsNI;