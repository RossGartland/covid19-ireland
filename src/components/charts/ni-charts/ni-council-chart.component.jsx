import React from 'react';
import { Bar } from 'react-chartjs-2';

class NICouncil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Antrim and Newtownabbey', 'Ards and North Down', 'Armagh, Banbridge and Craigavon', 'Belfast', 'Causeway Coast and Glens',
                    'Derry and Strabane', 'Fermanagh and Omagh', 'Lisburn and Castlereagh', 'Mid Ulster',
                    'Mid and East Antrim', 'Newry, Mourne and Down', 'OtherNI'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            174,
                            161,
                            269,
                            719,
                            116,
                            146,
                            61,
                            241,
                            160,
                            119,
                            140,
                            32
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
            <div className="chart">
            <Bar data={this.state.chartData} width={50} height={400} options={{
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Northern Ireland cases by council district (17/04/2020)'
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

export default NICouncil;