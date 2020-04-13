import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import './charts.component.css';

class ChartsAll extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Carlow',' Cavan','Clare','Cork','Donegal','Dublin','Galway','Kerry','Kildare','Kilkenny','Laois',
                'Leitrim','Limerick','Longford','Louth','Mayo','Meath','Monaghan','Offaly','Roscommon','Sligo','Tipperary',
                'Waterford','Westmeath','Wexford','Wicklow'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            38,
                            222,
                            98,
                            730,
                            225,
                            5006,
                            197,
                            200,
                            404,
                            136,
                            88,
                            32,
                            252,
                            56,
                            195,
                            194,
                            289,
                            95,
                            133,
                            39,
                            45,
                            200,
                            73,
                            213,
                            52,
                            272
                        ],
                        backgroundColor: [
                            'rgb(193, 66, 66)',
                            'rgb(127, 191, 63)',
                            'rgb(63, 191, 191)',
                            'rgb(63, 63, 191)',
                            'rgb(63, 191, 63)',
                            'rgb(169, 63, 191)',
                            'rgb(217, 87, 6)',
                            'rgb(217, 203, 6)',
                            'rgb(226, 130, 136)',
                            'rgb(209, 5, 223)',
                            'rgb(121, 235, 170)',
                            'rgb(5, 129, 223)',
                            'rgb(191, 121, 63)',
                            'rgb(176, 191, 63)',
                            'rgb(114, 191, 63)',
                            'rgb(63, 191, 131)',
                            'rgb(63, 178, 191)',
                            'rgb(63, 155, 191)',
                            'rgb(76, 63, 191)',
                            'rgb(142, 63, 191)',
                            'rgb(63, 99, 191)',
                            'rgb(191, 63, 178)',
                            'rgb(191, 63, 65)',
                            'rgb(165, 146, 235)',
                            'rgb(146, 226, 235)',
                            'rgb(146, 235, 164)'
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
                        text: 'Republic Ireland cases by county'
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
                        text: 'Republic Ireland cases by county'
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

export default ChartsAll;