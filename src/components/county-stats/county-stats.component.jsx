import React, { useState, useEffect } from 'react';
import './county-stats.style.css';

const CountyStats = () => {

    
    const [counties] = useState(
        [
            {
                name: 'Armagh',
                cases: 90,
                deaths: 5,
                tested: 192
            },
            {
                name: 'Derry',
                cases: 262,
                deaths: 90,
                tested: 401
            }
        ]
    )

    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center" id="county-stats-headings">
                    County <span>Cases</span><span>Deaths</span><span>Tested</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Down <span>1</span><span>2</span><span>3</span>
                </li>
                {
                    counties.map(county => <li class="list-group-item d-flex justify-content-between align-items-center">
                    {county.name}<span>{county.cases}</span><span>{county.deaths}</span><span>{county.tested}</span>
                </li>)
                }
            </ul>
        </div>
    )
}
export default CountyStats;