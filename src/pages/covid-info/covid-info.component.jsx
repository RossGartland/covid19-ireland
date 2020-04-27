import React from 'react';
import HeadingCommon from '../../components/heading-common/heading-common.component'
import covidImage from '../../assets/covid_cleaning.jpg';
import Updates from '../../components/updates/updates.component';
import fb from '../../firebase';
import './covid-info.style.css';




class CovidInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    runScript = () => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }

    getUpdateText = () => {
        const updateRef = fb.database().ref('updates').orderByValue().limitToLast(10)

        //Gets data from reference.
        updateRef.on('value', snapshot => {

            let updates = snapshot.val();//Holds the snapshot
            let updatesList = [];

            for (let item in updates) {
                updatesList.push({
                    updateDate: updates[item].date,
                    updateText: updates[item].text
                })
            }

            this.setState({
                updates: updatesList.reverse()
            })
        })
    }

    componentDidMount() {
        this.runScript();
        this.getUpdateText();
    }

    render() {
        return (
            <div>
                <HeadingCommon title={"Latest Coronavirus Updates"} bgImage={covidImage} />
                <br />
                <Updates updates={this.state.updates} />
                <br />
                <a class="twitter-timeline" data-width="600" data-height="500" href="https://twitter.com/covid19ire_web?ref_src=twsrc%5Etfw">Tweets by covid19ire_web</a>
                <br />
                <a class="twitter-timeline" data-width="600" data-height="500" href="https://twitter.com/merrionstreet?ref_src=twsrc%5Etfw">Tweets by merrionstreet</a>
                <a class="twitter-timeline" data-width="600" data-height="500" data-theme="light" href="https://twitter.com/DHSCgovuk?ref_src=twsrc%5Etfw">Tweets by DHSCgovuk</a>
                <br />
                <a class="twitter-timeline" data-width="600" data-height="500" href="https://twitter.com/SkyNewsBreak?ref_src=twsrc%5Etfw">Tweets by SkyNewsBreak</a>
            </div>
        )
    }
}
export default CovidInfo;