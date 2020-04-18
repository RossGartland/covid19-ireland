import React from 'react';
import { Pie } from 'react-chartjs-2';

class ROIHospital extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Hospitalised', 'Required ICU'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            2168,
                            296
                        ],
                        backgroundColor: [
                            'rgb(193, 66, 66)',
                            'rgb(127, 191, 63)'
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
            <Pie data={this.state.chartData} width={50} height={400} options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Hospitalisation (16/04/2020)'
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

export default ROIHospital;