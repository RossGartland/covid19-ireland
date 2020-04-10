import React from 'react'
import Accordion from '../../accordion/accordion.component'

const Info = ({ title, q1, a1 }) => {


    return (
        <div className="">
            <div className="title-container">
                <h1 id="faq-hero">{title}</h1>
            </div>
            <Accordion q1={q1} a1={a1} />
        </div>
    )
}
export default Info;