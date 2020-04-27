import React from 'react';
import Hero from '../../components/hero/hero-home/hero-home.component';
import LockdownBanner from '../../components/banner/home-banner/home-banner.component';
import Overall from '../../components/overall-stats/overall-stats.component';
import RegStats from '../../components/regional-stats/regional-stats.component';
import CountyStats from '../../components/county-stats/county-stats.component';
import CouncilStats from '../../components/county-stats/council-stats.component';
import * as firebase from 'firebase';
import fb from '../../firebase';
import Charts from '../../components/charts/charts.component';
import Sources from '../../components/sources/sources.component';
import './stats.style.css';

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            regValue: "",
            niCases: "",
            roiCases: "",
            niDeaths: "",
            roiDeaths: "",
            niTested: "",
            roiTested: ""
        }
    }

    getNIStats() {
        //Creates a reference to a location in the DB
        const niRef = fb.database().ref('ni');

        niRef.on('value', snapshot => {

            let ni = snapshot.val();//Holds the snapshot

            this.setState({
                niCases: ni.cases,
                niNewCases: ni.newCases,
                niDeaths: ni.deaths,
                niNewDeaths: ni.newDeaths,
                niTested: ni.tested,
                lastUpdated: ni.lastUpdated
            })
        })
    }

    getROIStats() {
        //Creates a reference to a location in the DB
        const roiRef = fb.database().ref('roi');

        roiRef.on('value', snapshot => {

            let roi = snapshot.val();//Holds the snapshot

            this.setState({
                roiCases: roi.cases,
                roiNewCases: roi.newCases,
                roiDeaths: roi.deaths,
                roiNewDeaths: roi.newDeaths,
                roiTested: roi.tested,
            })
        })
    }

    getCouncilStats() {
        //Creates a reference to a location in the DB
        const councilsRef = fb.database().ref('councils');

        //Gets data from reference.
        councilsRef.on('value', snapshot => {

            let councils = snapshot.val();//Holds the snapshot
            let councilsList = [];//Holds council.

            //Loops through each county and pushes them into councilist array.
            for (let item in councils) {
                councilsList.push({
                    councilName: councils[item].name,
                    councilCases: councils[item].cases,
                    councilDeaths: councils[item].deaths,
                    councilTested: councils[item].tested
                })
            }

            this.setState({
                councils: councilsList
            })
        })

    }

    getCountyStats() {
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

    componentDidMount() {
        this.getNIStats();
        this.getROIStats();
        this.getCouncilStats();
        this.getCountyStats();
    }

    render() {
        return (
            <React.Fragment>
                <div class="parallax">
                    <Hero />
                </div>
                <LockdownBanner />
                <Overall niCases={this.state.niCases} roiCases={this.state.roiCases}
                    newTotalCases={this.state.niNewCases + this.state.roiNewCases} niDeaths={this.state.niDeaths} 
                    roiDeaths={this.state.roiDeaths} newTotalDeaths={this.state.roiNewDeaths + this.state.niNewDeaths}
                    niTested={this.state.niTested} roiTested={this.state.roiTested} lastUpdated={this.state.lastUpdated} />
                <div className="regions">
                    <RegStats population={"1.882 million"} regValue={"Northern Ireland"} Cases={this.state.niCases} 
                    newCases={this.state.niNewCases} Deaths={this.state.niDeaths} newDeaths={this.state.niNewDeaths} Tested={this.state.niTested} />
                    <RegStats population={"4.904 million"} regValue={"Republic of Ireland"} Cases={this.state.roiCases} 
                    newCases={this.state.roiNewCases} Deaths={this.state.roiDeaths} newDeaths={this.state.roiNewDeaths} Tested={this.state.roiTested} />
                </div>
                <CouncilStats council={this.state.councils} />
                <CountyStats counties={this.state.counties} />
                <Charts />
                <Sources />
            </React.Fragment>
        )
    }
}
export default Stats;