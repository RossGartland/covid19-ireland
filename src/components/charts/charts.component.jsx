import React from 'react';
import Collapsible from 'react-collapsible';
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
            <hr/>
            <Collapsible trigger="View Northern Ireland Charts" triggerWhenOpen="Close Northern Ireland Charts">
            <ChartsNI />
            </Collapsible>
            <hr/>
            <Collapsible trigger="View Republic of Ireland Charts" triggerWhenOpen="Close Republic of Ireland Charts">
            <ChartsRoi/>
            </Collapsible>
            <hr/>
            <Collapsible trigger="View Island Wide Charts" triggerWhenOpen="Close Island Wide Charts">
            <ChartsIsland/>
            </Collapsible>            
            </React.Fragment>
        )
    }
}

export default Charts;