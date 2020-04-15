import React from 'react';
import { Bar,Pie } from 'react-chartjs-2';


class ChartsNI extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Antrim and Newtownabbey', 'Ards and North Down', 'Armagh, Banbridge and Craigavon','Belfast', 'Causeway Coast and Glens',
                 'Derry and Strabane', 'Fermanagh and Omagh' , 'Lisburn and Castlereagh','Mid Ulster',
                 'Mid and East Antrim','Newry, Mourne and Down','OtherNI'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            149,
                            154,
                            220,
                            649,
                            98,
                            133,
                            61,
                            221,
                            106,
                            136,
                            127,
                            34
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
                            'rgb(5, 129, 223)'
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
                        text: 'Northern Ireland cases by council district'
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
                        text: 'Northern Ireland cases by council district'
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

export default ChartsNI;