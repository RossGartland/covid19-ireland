import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import './charts.component.css';

class ChartsRoi extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.setState({
            chartData: {//Test data for chart
                labels: ['Carlow',' Cavan','Clare','Cork','Donegal','Dublin','Galway','Kerry','Kildare','Kilkenny','Laois',
                'Leitrim','Limerick','Longford','Louth','Mayo','Meath','Monaghan','Offaly','Roscommon','Sligo','Tipperary',
                'Waterford','Westmeath','Wexford','Wicklow','Antrim and Newtownabbey', 'Ards and North Down', 'Armagh, Banbridge and Craigavon','Belfast', 'Causeway Coast and Glens',
                'Derry and Strabane', 'Fermanagh and Omagh' , 'Lisburn and Castlereagh','Mid Ulster',
                'Mid and East Antrim','Newry, Mourne and Down','OtherNI'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                            38,
                            222,
                            98,
                            730,
                            225,
                            5006,
                            197,
                            200,
                            404,
                            136,
                            88,
                            32,
                            252,
                            56,
                            195,
                            194,
                            289,
                            95,
                            133,
                            39,
                            45,
                            200,
                            73,
                            213,
                            52,
                            272,
                            117,
                            129,
                            157,
                            514,
                            63,
                            77,
                            52,
                            181,
                            73,
                            102,
                            102,
                            22
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
                            'rgb(146, 235, 164)',
                            'rgb(207, 235, 146)',
                            'rgb(235, 203, 146)',
                            'rgb(235, 170, 146)',
                            'rgb(133, 55, 56)',
                            'rgb(91, 55, 133)',
                            'rgb(55, 64, 133)',
                            'rgb(55, 102, 133)',
                            'rgb(55, 133, 112)',
                            'rgb(56, 133, 55)',
                            'rgb(120, 133, 55)',
                            'rgb(133, 104, 55)',
                            'rgb(206, 237, 213)'
                        ]
                    }
                ]
            },
            chartDataCapital: {//Test data for chart
                labels: ['Belfast','Dublin'],
                datasets: [
                    {
                        label: 'Cases',
                        data: [
                           514,
                           5006
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
                <Bar data={this.state.chartData} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Island wide cases by county'
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }}
                />
            </div>
            <div className="chart">
                <Pie data={this.state.chartDataCapital} width={50} height={400} options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Belfast and Dublin comparison'
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

export default ChartsRoi;