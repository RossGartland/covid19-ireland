import React from 'react';
import { Bar } from 'react-chartjs-2';

class ROIAge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['<1','1 to 4','5 to 14','15 to 24','25 to 34','35 to 44','45 to 54','55 to 64','65+'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            28,
                            48,
                            142,
                            892,
                            2329,
                            2522,
                            2659,
                            2010,
                            3094                          
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
                    text: 'Age characteristics for positive cases (16/04/2020)'
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

export default ROIAge;