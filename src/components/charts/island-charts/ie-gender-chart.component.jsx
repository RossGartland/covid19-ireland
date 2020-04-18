import React from 'react';
import { Bar } from 'react-chartjs-2';

class IEGender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {
                labels: ['Male', 'Female','Unknown'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            7028,
                            8925,
                            131                                           
                        ],
                        backgroundColor: [
                            'rgb(193, 66, 66)',
                            'rgb(127, 191, 63)',
                            'rgb(63, 191, 191)'                
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
                    text: 'Gender characteristics for positive cases across the island (17/04/2020)'
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

export default IEGender;