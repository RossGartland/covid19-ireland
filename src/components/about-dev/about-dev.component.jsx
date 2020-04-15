import React from 'react';
import './about-dev.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const AboutDev = (props) => {

    return (
        <div class="col-xl-3 col-md-6 mb-4 about-box">
            <div class="card border-0 shadow">
                <img src={props.image} class="card-img-top" alt="Image of dev" />
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">{props.name}</h5>
                    <div class="card-text text-black-50">{props.title}</div>
                    <a class="about-icon" href={props.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a class="about-icon" href={props.github}><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>
    )
}
export default AboutDev;