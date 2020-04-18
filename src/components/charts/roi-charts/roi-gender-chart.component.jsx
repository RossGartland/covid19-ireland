import React from 'react';
import { Bar } from 'react-chartjs-2';

class ROIGender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Male', 'Female','Unknown'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            6048,
                            7568,
                            130                                           
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
                    text: 'Gender characteristics for positive cases (16/04/2020)'
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

export default ROIGender;