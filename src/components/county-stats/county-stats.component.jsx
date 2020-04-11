import React from 'react';
import './county-stats.style.css';

const CountyStats = () => {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center" id="county-stats-headings">
                    County <span>Cases</span><span>Deaths</span><span>Tested</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Down <span>1</span><span>2</span><span>3</span>
                </li>
            </ul>
        </div>
    )
}
export default CountyStats;