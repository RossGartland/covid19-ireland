import React from 'react';
import ChartsNI from './ni-charts/charts-ni.component';
import ChartsRoi from './roi-charts/charts-roi.component';
import ChartsIsland from './island-charts/charts-island.component';

import './charts.style.css';

class Charts extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <React.Fragment>
            <ChartsNI />
            <ChartsRoi/>
            <ChartsIsland/>
            </React.Fragment>
        )
    }
}

export default Charts;