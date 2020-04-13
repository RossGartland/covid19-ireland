import React from 'react';
import Hero from '../../components/hero/hero-home/hero-home.component';
import Overall from '../../components/overall-stats/overall-stats.component';
import RegStats from '../../components/regional-stats/regional-stats.component';
import CountyStats from '../../components/county-stats/county-stats.component';
import Banner from '../../components/banner/home-banner/home-banner.component';
import * as firebase from 'firebase';
import fb from '../../firebase';
import Charts from '../../components/charts/charts.component';

import './stats.style.css';

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            regValue: "",
        }
    }

    componentDidMount() {

        //Creates a reference to a location in the DB
        const niRef = fb.database().ref('ni');

        niRef.on('value', snapshot => {

            let ni = snapshot.val();//Holds the snapshot

            this.setState({
                niCases: ni.cases,
                niDeaths: ni.deaths,
                niTested: ni.tested,
            })
        })

        //Creates a reference to a location in the DB
        const roiRef = fb.database().ref('roi');

        roiRef.on('value', snapshot => {

            let roi = snapshot.val();//Holds the snapshot

            this.setState({
                roiCases: roi.cases,
                roiDeaths: roi.deaths,
                roiTested: roi.tested,
            })
        })

        //Creates a reference to a location in the DB
        const countiesRef = fb.database().ref('counties');

        //Gets data from reference.
        countiesRef.on('value', snapshot => {

            let counties = snapshot.val();//Holds the snapshot
            let countiesList = [];//Holds counties.

            //Loops through each county and pushes them into countiesList array.
            for (let item in counties) {
                countiesList.push({
                    countyName: counties[item].name,
                    countyCases: counties[item].cases,
                    countyDeaths: counties[item].deaths,
                    countyTested: counties[item].tested
                })
            }

            this.setState({
                counties: countiesList,
                numCounties: countiesList.length
            })
        })
    }

    render() {
        return (
            <React.Fragment>

                <div class="parallax">
                    <Hero />
                </div>
                <Overall totalCases={this.state.niCases + this.state.roiCases} totalDeaths={this.state.niDeaths + this.state.roiDeaths} totalTested={this.state.niTested + this.state.roiTested} />
                <div className="regions">
                    <RegStats regValue={"Northern Ireland"} Cases={this.state.niCases} Deaths={this.state.niDeaths} Tested={this.state.niTested} />
                    <RegStats regValue={"Republic of Ireland"} Cases={this.state.roiCases} Deaths={this.state.roiDeaths} Tested={this.state.roiTested} />
                </div>
                <CountyStats counties={this.state.counties} />
                <Charts nicases={this.state.nicases} />
                <Banner />
            </React.Fragment>
        )
    }
}

export default Stats;