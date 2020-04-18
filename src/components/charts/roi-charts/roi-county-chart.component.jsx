import React from 'react';
import { Bar } from 'react-chartjs-2';

class ROICounty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Carlow',' Cavan','Clare','Cork','Donegal','Galway','Kerry','Kildare','Kilkenny','Laois',
                'Leitrim','Limerick','Longford','Louth','Mayo','Meath','Monaghan','Offaly','Roscommon','Sligo','Tipperary',
                'Waterford','Westmeath','Wexford','Wicklow'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            69,
                            353,
                            151,
                            979,
                            369,
                            273,
                            256,
                            684,
                            188,
                            147,
                            46,
                            382,
                            83,
                            406,
                            273,
                            461,
                            170,
                            177,
                            74,
                            70,
                            283,
                            110,
                            332,
                            85,
                            391
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
            <div className="chart">
            <Bar data={this.state.chartData} width={50} height={400} options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Republic Ireland cases by county excluding Dublin (16/04/2020)'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }}
            />
        </div>
        )
    }
}

export default ROICounty;