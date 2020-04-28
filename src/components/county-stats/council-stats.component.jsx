import React from 'react';
import './county-stats.style.css';

const CouncilStats = (props) => {
    return (
        <div>
            <hr />
            <h5 className="county-stats-title">Northern Ireland Figures By Council District</h5>
            <p>Figures represented by N/A are in place because there is currently no data avaible.</p>
            <table class="table table-striped county-table">
                <thead>
                    <tr>
                        <th scope="col">Council</th>
                        <th scope="col">Cases</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Tested</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.council && props.council.length ?
                            props.council.map(item =>
                                <tr key={item.councilName}>
                                    <td>{item.councilName}</td>
                                    <td>{item.councilCases}</td>
                                    <td>{item.councilDeaths}</td>
                                    <td>{item.councilTested}</td>
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
export default CouncilStats;