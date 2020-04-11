import React, { useState } from 'react';
import HeadingCommon from '../../components/heading-common/heading-common.component';
import Accordion from '../../components/accordion/accordion.component';
import imageRoi from '../../assets/temple_bar.jpg';
const WorkInfoRoi = () => {

    return (
        <div>
            <HeadingCommon title={"Advice For Republic of Ireland Employees"} bgImage={imageRoi} />
            <Accordion
                q1={'Am I Eligible? '} 
                a1={'If you are a worker affected by COVID-19 (Coronavirus) there are various payments that you can claim from the department. '+
                ' As well as this, you do not need to sign on or attend back to work courses for as long as the Coronavirus pandemic lasts. Weekly dockets must still be signed, however.  '}
                q2={'Cross Border( Frontier) Workers '} 
                a2={<a href="https://www.gov.ie/en/publication/97e2d6-cross-border-workers/">For more information on cross border workers, visit the Irish Governments website.</a>}
                q3={'COVID-19 Enhanced Illness Benefit '} 
                a3={'If you have been diagnosed with COVID-19, or are medically certified to self-isolate as a result of COVID-19, you can apply for Illness Benefit for COVID-19 absences which is higher than the standard rate. '+
                'You can apply for this whether you are an employee or if you are self-employed. '}
                q4={'COVID-19 Pandemic Unemployment Payment'} 
                a4={'If you have lost your job due to COVID-19 you can apply for the COVID-19 Pandemic Unemployment Payment.'+
                ' You can apply for this whether you are an employee or if you are self-employed. '}
                q5={'More Information'} 
                a5={<a href="https://www.gov.ie/en/publication/97e2d6-cross-border-workers/">Full information here.</a>}
            />
        </div>
    )
}

export default WorkInfoRoi;