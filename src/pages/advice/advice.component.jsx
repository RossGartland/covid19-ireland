import React from 'react';
import AdviceAcc from '../../components/advice-accordion/advice-accordion.component';
import './advice.style.css';

const Advice = () => {
    return (
        <div>
            <div className="title-container">
                <h1>Advice</h1>
                <h2>How you stop the impact of coronavirus!</h2>
            </div>
            <AdviceAcc />
        </div>
    )
}
export default Advice;