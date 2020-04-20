import React from 'react';
import CityComparison from './island-city-chart.component';
import IEGender from './ie-gender-chart.component';


class IslandCharts extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <hr />
                <CityComparison />
                <IEGender/>
            </React.Fragment>
        )
    }
}

export default IslandCharts;