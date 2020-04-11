import React from 'react';
import HeadingCommon from 'react';
import Hero from '../../components/hero/hero-home/hero-home.component';
import Overall from '../../components/overall-stats/overall-stats.component';
import RegStats from '../../components/regional-stats/regional-stats.component';
import CountyStats from '../../components/county-stats/county-stats.component';
import Banner from '../../components/banner/home-banner/home-banner.component';
import * as firebase from 'firebase';
import fb from '../../firebase';

import './stats.style.css';

class Stats extends React.Component{
    constructor() {
        super();
        this.state = {
            niCases:0,
            niDeaths: 0,
            niTested: 0,
            roiCases:0,
            roiDeaths: 0,
            roiTested: 0,
            regValue: "",
        }  
    }

    componentDidMount() {
        const rootRef = fb.database().ref();;
        const niCasesRef = rootRef.child('nicases'), niDeathsRef = rootRef.child('nideaths'), niTestedRef = rootRef.child('nitested');
        const roiCasesRef = rootRef.child('roicases'), roiDeathsRef = rootRef.child('roideaths'), roiTestedRef = rootRef.child('roitested');
        //Functions that get a snapshot from the database.
        niCasesRef.on('value', snap => {
            this.setState({
                niCases: snap.val(),
                })
        })
        niDeathsRef.on('value', snap => {
            this.setState({
                niDeaths: snap.val(),
                })
        })
        niTestedRef.on('value', snap => {
            this.setState({
                niTested: snap.val(),
                })
        })
        roiCasesRef.on('value', snap => {
            this.setState({
                roiCases: snap.val(),
                })
        })
        roiDeathsRef.on('value', snap => {
            this.setState({
                roiDeaths: snap.val(),
                })
        })
        roiTestedRef.on('value', snap => {
            this.setState({
                roiTested: snap.val(),
                })
        })//There must be a better way to do this...   
    }

    render() {
        return (
            <React.Fragment>
                
            <div class="parallax">
                <Hero/>
            </div>
            <Overall totalCases={this.state.niCases+this.state.roiCases} totalDeaths={this.state.niDeaths+this.state.roiDeaths} totalTested={this.state.niTested+this.state.roiTested}/>
            <div className="regions">         
                <RegStats regValue={"Northern Ireland"} Cases={this.state.niCases} Deaths={this.state.niDeaths} Tested={this.state.niTested} />
                <RegStats regValue={"Republic of Ireland"} Cases={this.state.roiCases} Deaths={this.state.roiDeaths} Tested={this.state.roiTested}/>
            </div>  
            <CountyStats/>    
            <Banner/>
        </React.Fragment>
        )
    }
}

export default Stats;