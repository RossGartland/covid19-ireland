import React, { useEffect } from 'react';
import HeadingCommon from '../../components/heading-common/heading-common.component'
import covidImage from '../../assets/covid_cleaning.jpg';

import './covid-info.style.css';




const CovidInfo = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        
        document.body.appendChild(script);
    }, [])//Loads script for Twitter API
    
    return (
        <div>
            <HeadingCommon title={"Latest Coronavirus Updates"} bgImage={covidImage} />
            <br />
            <a class="twitter-timeline" data-width="600" data-height="500" href="https://twitter.com/covid19ire_web?ref_src=twsrc%5Etfw">Tweets by covid19ire_web</a>
            <br />
            <a class="twitter-timeline" data-width="600" data-height="500" href="https://twitter.com/merrionstreet?ref_src=twsrc%5Etfw">Tweets by merrionstreet</a>
            <a class="twitter-timeline" data-width="600" data-height="500" data-theme="light" href="https://twitter.com/DHSCgovuk?ref_src=twsrc%5Etfw">Tweets by DHSCgovuk</a>
        </div>
    )
}
export default CovidInfo;