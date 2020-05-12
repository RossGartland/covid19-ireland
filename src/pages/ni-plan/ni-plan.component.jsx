import React from 'react';
import './ni-plan.style.css';
import DownArrow from '../../arrow/down-arrow.component';

const NIPlan = () => {
    return (
        <div className="roadmap-container">
            <h1>Northern Ireland's Pathway to Recovery</h1>
            <div class="card phase-card">
                <div class="card-body">
                    <h2>Step One</h2>
                    <hr/>
                    <ul>
                        <li>Encouragement to those unable to work from home to return to work on a phased basis</li>
                        <li>Large outdoor-based retail can open including garden centres, though associated cafes and restaurants can only offer takeaway or collection</li>
                        <li>Groups of four to six people who do not share a household can meet outdoors maintaining social distancing. With the exception of people who are shielding, visits to immediate family allowed indoors where social distancing is possible</li>
                        <li>Drive-through church services and churches open for private prayer, with appropriate social distancing and cleaning of shared contact hard surfaces</li>
                        <li>Outdoor spaces and public sport amenities to open. For example, walking, running, cycling, some water activities, golf, tennis</li>
                        <li>Drive-through cinemas can open</li>
                    </ul>
                </div>
            </div>
            <DownArrow/>
            <div class="card phase-card">
                <div class="card-body">
                    <h2>Step Two</h2>
                    <hr/>
                    <ul>
                        <li>Non-food retail can open where numbers are limited, with social distancing</li>
                        <li>Groups of up to 10 can meet outdoors</li>
                        <li>As demand increases on public transport within social distancing requirements, people encouraged to walk and cycle for short journeys where possible</li>
                        <li>Resumption of, for example, team sports training on a non-contact basis in small groups</li>
                        <li>Selected libraries reopen with restricted services</li>
                        <li>Open-air museums reopen</li>
                    </ul>
                </div>
            </div>
            <DownArrow/>
            <div class="card phase-card">
                <div class="card-body">
                    <h2>Step Three</h2>
                    <hr/>
                    <ul>
                        <li>Phased return to office and onsite working subject to risk assessment. Work that can be done from home should still be done from home</li>
                        <li>Schools expand provision for priority groups on a part-time basis, using a combination of in-school and remote learning</li>
                        <li>Gatherings can accommodate up to 30 people while maintaining social distancing</li>
                        <li>Resumption of, for example, team sports training on a non-contact basis</li>
                        <li>Museums and galleries open</li>
                        <li>Libraries open</li>
                        <li>Concert and theatre rehearsals resume</li>
                    </ul>
                </div>
            </div>
            <DownArrow/>
            <div class="card phase-card">
                <div class="card-body">
                    <h2>Step Four</h2>
                    <hr/>
                    <ul>
                        <li>Other "contact" retail (hairdressers, fitness studios, tattoo and piercing parlours) can open subject to mitigations following risk assessment</li>
                        <li>Schools expand provision to accommodate all pupils on part-time basis with combination of in-school and remote learning</li>
                        <li>Reducing and staggering demand for public transport at peak times through continued home working and staggered start times for businesses</li>
                        <li>Wider range of gatherings permitted including church services subject to social distancing and other suitable mitigations, such as cleaning of hard surfaces</li>
                        <li>Resumption of competitive sport "behind closed doors" or with limitations on the number of spectators</li>
                        <li>Leisure centres and other indoor leisure facilities open</li>
                        <li>Outdoor concerts on restricted basis</li>
                    </ul>
                </div>
            </div>
            <DownArrow/>
            <div class="card phase-card">
                <div class="card-body">
                    <h2>Step Five</h2>
                    <hr/>
                    <ul>
                        <li>All able to return to work subject to mitigations. Remote working still strongly encouraged</li>
                        <li>Hospitality retail (restaurants, cafes, pubs) can open subject to risk assessment, initially on a limited basis </li>
                        <li>Expand early-year school provision to full-time basis</li>
                        <li>Public transport operating full service but subject to ongoing risk assessment</li>
                        <li>People can meet in extended groups subject to social distancing</li>
                        <li>Resumption of close physical contact sports</li>
                        <li>Return to competitive sport and full use of sporting facilities</li>
                        <li>Spectators can attend live events on restricted basis</li>
                        <li>Nightclubs, concerts open on a limited basis</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <h4 onClick={() => window.scrollTo(0,0)}>BACK TO TOP</h4> 
        </div>
    )
}
export default NIPlan