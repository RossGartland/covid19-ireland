import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import ChartsNI from './charts-ni.component';
import ChartsRoi from './charts-roi.component';
import ChartsAll from './charts-all.component';


import './charts.component.css';

class Charts extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <React.Fragment>
                <h5 id="chart-title">Chart Data was last updated on: 04/13/2020</h5>
            <ChartsNI />
            <ChartsRoi/>
            <ChartsAll/>
            </React.Fragment>
        )
    }
}

export default Charts;