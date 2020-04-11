import React from 'react';
import AdviceAcc from '../../components/faq-accordion/faq-accordion.component';
import HeadingCommon from '../../components/heading-common/heading-common.component';
import FAQImage from '../../assets/roi_landscape.jpg'
import './faq.style.css';

const Advice = () => {
    return (
        <div>
            <HeadingCommon title={"Frequently Asked Questions"} bgImage={FAQImage}/>
            <AdviceAcc />
            <div>
            </div>
        </div>
    )
}
export default Advice;