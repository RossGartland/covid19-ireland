import React from 'react';
import './county-stats.style.css';

class CountyStats extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <table class="table table-striped county-table">
                    <thead>
                        <tr>
                            <th scope="col">County</th>
                            <th scope="col">Cases</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Tested</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            this.props.counties && this.props.counties.length ?
                                this.props.counties.map(item =>
                                    <tr>
                                        <td>{item.countyName}</td>
                                        <td>{item.countyCases}</td>
                                        <td>{item.countyDeaths}</td>
                                        <td>{item.countyTested}</td>
                                    </tr>

                                )
                                :
                                null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CountyStats;