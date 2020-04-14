import React from 'react';
import Hero from '../../components/hero/hero-home/hero-home.component';
import Overall from '../../components/overall-stats/overall-stats.component';
import RegStats from '../../components/regional-stats/regional-stats.component';
import CountyStats from '../../components/county-stats/county-stats.component';
import Banner from '../../components/banner/home-banner/home-banner.component';
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
        }
    }

  
    componentDidMount() {
        

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
            })
        })

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

            let newCountiesNamesList = [];//Holds counties.

            for(let item in counties) {
                newCountiesNamesList.push({
                    name: counties[item].name,
                })
            }

            this.setState({
                counties: countiesList,
                countiesNamesList: newCountiesNamesList,
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
                <Overall totalCases={this.state.niCases + this.state.roiCases} newTotalCases={this.state.niNewCases + this.state.roiNewCases} totalDeaths={this.state.niDeaths + this.state.roiDeaths} newTotalDeaths={this.state.roiNewDeaths + this.state.niNewDeaths} totalTested={this.state.niTested + this.state.roiTested} />
                <div className="regions">
                    <RegStats regValue={"Northern Ireland"} Cases={this.state.niCases} newCases={this.state.niNewCases} Deaths={this.state.niDeaths} newDeaths={this.state.niNewDeaths} Tested={this.state.niTested} />
                    <RegStats regValue={"Republic of Ireland"} Cases={this.state.roiCases} newCases={this.state.roiNewCases} Deaths={this.state.roiDeaths} newDeaths={this.state.roiNewDeaths} Tested={this.state.roiTested} />
                </div>
                <CountyStats counties={this.state.counties} />
                <hr/>
                <Charts />
                <Sources/>
            </React.Fragment>
        )
    }
}

export default Stats;