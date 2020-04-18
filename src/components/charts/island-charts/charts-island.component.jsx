import React from 'react';
import CityComparison from './island-city-chart.component';


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
                <h5 className="charts-title">Island Wide Charts</h5>
                <CityComparison />
            </React.Fragment>
        )
    }
}

export default IslandCharts;