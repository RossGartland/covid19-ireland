import React, {useState} from 'react'
import ChooseRegion from '../../components/work/choose-region/choose-region.component';
import Info from '../../components/work/job-information/job-information.component';

import './out-of-work.style.css';

const Work = () => {

    const [region, text, link] = useState("");
    
    return (
        <div>
        <div id="region-container">
            <ChooseRegion className="ChooseRegion" region={"Northern Ireland"} text={"Go here if you work in Northern Ireland"} link={"#/workni"}/>
            <ChooseRegion region={"Republic Of Ireland"} text={"Go here if you work in the Republic of Ireland"} link={"#/workroi"}/>
        </div>
        </div>
    )
}
export default Work;