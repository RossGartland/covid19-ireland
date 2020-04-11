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
                <h1 id="hero">{title}</h1>
            </div>
        </div>
    )
}
export default HeadingCommon;