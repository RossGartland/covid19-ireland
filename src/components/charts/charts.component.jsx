import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import './charts.component.css';

class Charts extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Down', 'Armagh', 'Fermanagh', 'Derry', 'Antrim', 'Tyrone'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            70,
                            80,
                            62,
                            14,
                            102,
                            35
                        ],
                        backgroundColor: [
                            'rgb(193, 66, 66)',
                            'rgb(191, 127, 63)',
                            'rgb(127, 191, 63)',
                            'rgb(63, 191, 191)',
                            'rgb(63, 63, 191)',
                            'rgb(63, 191, 63)'
                        ]
                    }
                ]
            }
        }
        )
    }

    render() {
        return (
            <React.Fragment>
            <div className="chart">
                <Bar data={this.state.chartData} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Northern Ireland cases by county'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
                />
            </div>
            <div className="chart">
                <Pie data={this.state.chartData} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Northern Ireland cases by county'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
                />
            </div>
            </React.Fragment>
        )
    }
}

export default Charts;