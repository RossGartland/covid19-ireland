import React from 'react';
import Fade from 'react-reveal/Fade';
import './home-banner.style.css';

const HomeBanner = () => {
    return (
        <React.Fragment>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 className="display-5 lock-down-title" >Lockdown Announcement</h1>
                    <Fade>
                    <p class="lead">Northern Ireland to be in lockdown until <span className="lockdown-dates">9th May.</span></p>
                    <p class="lead">Republic of Ireland to be in lockdown until <span className="lockdown-dates">5th May.</span></p>
                    </Fade>
                </div>
            </div>
            <hr />
        </React.Fragment>
    )
}
export default HomeBanner;