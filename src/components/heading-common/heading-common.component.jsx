import React from 'react';
import './heading-common.style.css';

const HeadingCommon = ({ title, bgImage }) => {
    const style = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: `cover`
    }
    return (
        <div>
            <div className="title-container" style={style}>
                <div class="hero-text">
                    <h1 id="heading-common-title">{title}</h1>
                </div>
            </div>
        </div>
    )
}
export default HeadingCommon;