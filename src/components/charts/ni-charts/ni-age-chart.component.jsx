import React from 'react';
import {Pie} from 'react-chartjs-2';

class NIAge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

        componentDidMount() {
            this.setState({
                chartDataCapital: {//Test data for chart
                    labels: ['0 to 44','45 to 69', '70+'],
                    datasets: [
                        {
                            label: 'Cases',
                            data: [
                               33,
                               37,
                               31
                            ],
                            backgroundColor: [
                                'rgb(193, 66, 66)',                      
                                'rgb(146, 235, 164)',
                                'rgb(49, 199, 199)'
                            ]
                        }
                    ]
                }
            })         
    }

    render() {
        return (
            <div className="chart">
                <Pie data={this.state.chartDataCapital} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Age characteristics for positive cases % (18/04/2020)'
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

export default NIAge;