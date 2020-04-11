import React, {useState} from 'react'
import ChooseRegion from '../../components/work/choose-region/choose-region.component';


import './out-of-work.style.css';

const Work = () => {

    const [region, text, link] = useState("");
    
    return (
        <div>
            <h1 class="display-4">Advice For Employees</h1>
            <p class="lead">We have sourced information from both the Northern Irish Governement and the Irish Governement</p>
            <hr class="my-4" />
        <div id="region-container">
            <ChooseRegion className="ChooseRegion" region={"Northern Ireland"} text={"Go here if you work in Northern Ireland"} link={"#/workni"}/>
            <ChooseRegion region={"Republic Of Ireland"} text={"Go here if you work in the Republic of Ireland"} link={"#/workroi"}/>
        </div>
        </div>
    )
}
export default Work;