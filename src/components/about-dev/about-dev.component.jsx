import React from 'react';
import './about-dev.style.css';

const AboutDev = (props) => {

    function handleChange(event) {
        props.onChange(event.target.image);
        props.onChange(event.target.name);
        props.onChange(event.target.title);
        props.onChange(event.target.linkedin);
        props.onChange(event.target.github);
    }

    return (
        <div class="col-xl-3 col-md-6 mb-4 about-box">
            <div class="card border-0 shadow">
                <img src={props.image} class="card-img-top" alt="Image of dev" />
                <div class="card-body text-center">
                    <h5 class="card-title mb-0">{props.name}</h5>
                    <div class="card-text text-black-50">{props.title}</div>
                    <a href={props.linkedin}><i class="fa fa-linkedin"></i></a>
                    <a href={props.github}><i class="fa fa-github" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}
export default AboutDev;