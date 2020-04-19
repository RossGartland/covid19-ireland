import React from 'react';
import {Line} from 'react-chartjs-2';

class NICases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

        componentDidMount() {
            this.setState({
                chartDataCapital: {
                    labels: ['24th March','25th March','26th March','27th March','28th March','29th March', '30th March','31st March', 
                    '1st April','2nd April','3rd April','4th April', '5th April','6th April','7th April','8th April', 
                    '9th April','10th April','11th April','12th April','13th April', '14th April','15th April','16th April',
                     '17th April', '18th April'],
                    datasets: [
                        {
                            label: 'New Cases',
                            data: [
                               24,
                               37,
                               32,
                               34,
                               49,
                               86,
                               123,
                               53,
                               103,
                               85,
                               130,
                               94,
                               91,
                               69,
                               97,
                               84,
                               138,
                               112,
                               128,
                               89,
                               76,
                               85,
                               121,
                               113,
                               137,
                               148
                            ]
                        }
                    ]
                }
            })         
    }

    render() {
        return (
            <div className="chart">
                <Line data={this.state.chartDataCapital} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Cases (18/04/2020)'
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

export default NICases;