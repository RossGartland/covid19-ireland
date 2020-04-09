import React from 'react';
import AdviceAcc from '../../components/faq-accordion/faq-accordion.component';
import './faq.style.css';

const Advice = () => {
    return (
        <div>
            <div className="title-container">
                <h1 id="faq-hero">Frequently Asked Questions</h1>
            </div>
            <AdviceAcc />
            <div>
            </div>
        </div>
    )
}
export default Advice;