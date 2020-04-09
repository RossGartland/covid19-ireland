import React, {useState} from 'react';
import RossImage from '../../assets/ross_g.jpg'
import JordanImage from '../../assets/jordan_S.jpg';
import AboutDev from '../../components/about-dev/about-dev.component';
import './about.style.css';

const About = () => {

    const [image, name, title, linkedin, github] = useState("");

    return (
        <div className="about-container">
            <h1 class="display-4">Who are we?</h1>
            <p class="lead">Cras eu mi eu leo tincidunt dapibus ac quis sapien. Nam interdum tempor nisl, et varius turpis pellentesque vel.
            Quisque venenatis odio et ex dignissim, at sodales odio egestas.
            Integer ornare auctor tellus ut fringilla. Sed tempus orci nec consequat euismod. Praesent ac pellentesque libero.
            Curabitur ante leo, vehicula ac velit vel, convallis placerat erat.
            Phasellus malesuada, ipsum vel feugiat venenatis, urna ligula convallis neque, vel vehicula nunc tortor tempus ex. Aliquam id nunc nunc. </p>
            <hr class="my-4" />
            <div class="container">
            <div class="row">
            <AboutDev image={RossImage} name={"Ross Gartland"} title={"Developer"} linkedin={"https://www.linkedin.com/in/rossgartland/"} github={"https://github.com/RossGartland"}/>
            <AboutDev image={JordanImage} name={"Jordan Stevenson"} title={"Developer"} linkedin={"https://www.linkedin.com/in/jordan-stevenson-44479b1a0/"} github={"https://github.com/jordanwsm"}/>
            </div>
            </div>
        </div>
    )
}
export default About;