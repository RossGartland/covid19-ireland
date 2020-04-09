import React, {useState} from 'react';
import Overall from '../../components/overall-stats/overall-stats.component';
import RegStats from '../../components/regional-stats/regional-stats.component';

import './stats.style.css';

const Stats = () => {

    const [regValue] = useState("");

    return (
        <React.Fragment>
        <Overall />
        <div className="regions">
        <RegStats regValue={"Northern Ireland"}/>
        <RegStats regValue={"Republic of Ireland"}/>
        </div>
        </React.Fragment>
    )
}
export default Stats;