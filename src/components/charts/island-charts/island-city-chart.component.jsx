import React from 'react';
import { Pie } from 'react-chartjs-2';


class CityComparison extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartDataCapital: {//Test data for chart
                labels: ['Belfast','Dublin'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                           719,
                           6934
                        ],
                        backgroundColor: [
                            'rgb(193, 66, 66)',                      
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
                <Pie data={this.state.chartDataCapital} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Belfast and Dublin Compared (17/04/2020)'
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

export default CityComparison;