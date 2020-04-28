import React from 'react';
import RossImage from '../../assets/ross_g.jpg'
import JordanImage from '../../assets/jordan_S.jpg';
import AboutDev from '../../components/about-dev/about-dev.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './about.style.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 class="display-4">Who are we?</h1>
            <p class="lead">We designed this website to make the information for COVID-19 very accessible. Many clicks were happening in order to find out the latest information.
            Whereas our website the data is there in front of you without having to navigate through other sources.
            Please consider that this website is in early stages and may contain bugs. We wanted to get it out to YOU as soon as possible.
            If you want to report an issue or suggest a future development - Please contact us on our Twitter, Email or LinkedIn profiles. </p>

            <FontAwesomeIcon icon={faTwitter} /> <a href="https://twitter.com/covid19ire_web">@covid19ire_web</a>
            <br />
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:covid19irelandwebsite@gmail.com<">covid19irelandwebsite@gmail.com</a>

            <hr class="my-4" />
            <div class="container">
                <div class="row">
                    <AboutDev image={RossImage} name={"Ross Gartland"} title={"Developer"} linkedin={"https://www.linkedin.com/in/rossgartland/"} github={"https://github.com/RossGartland"} />
                    <AboutDev image={JordanImage} name={"Jordan Stevenson"} title={"Developer"} linkedin={"https://www.linkedin.com/in/jordan-stevenson-44479b1a0/"} github={"https://github.com/jordanwsm"} />
                </div>
            </div>
        </div>
    )
}
export default About;