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
                    <h3 class="lead">To view Northern Irelands pathway to recovery <span className="lockdown-dates">CLICK HERE</span></h3>
                    <p class="lead">Republic of Ireland Roadmap <span className="lockdown-dates">5th May.</span></p>
                    </Fade>
                </div>
            </div>
            <hr />
        </React.Fragment>
    )
}
export default HomeBanner;