import React from 'react';
import Overall from '../../components/overall-stats/overall-stats.component';
import RegStats from '../../components/regional-stats/regional-stats.component';

import './stats.style.css';

const Stats = () => {
    return (
        <React.Fragment>
        <Overall />
        <div className="regions">
        <RegStats />
        <RegStats />
        </div>
        </React.Fragment>
    )
}
export default Stats;