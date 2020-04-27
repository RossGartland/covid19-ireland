import React from 'react';
import HeadingCommon from '../../components/heading-common/heading-common.component';
import Accordion from '../../components/accordion/accordion.component';
import imageNi from '../../assets/giants_causeway.jpg';

const WorkInfoNI = () => {

    return (
        <div>
            <HeadingCommon title={"Advice For Northern Ireland Employees"} bgImage={imageNi} />
            <Accordion q1={'Going to work'} a1={`You should work from home unless it is impossible for you to do so.
                Sometimes this will not be possible, as not everyone can work from home.
                Certain jobs require people to travel to their place of work for instance if you operate machinery, work in construction or manufacturing, or are delivering front line services.`}
                q2={'Staying at home'} a2={`If you have symptoms of coronavirus infection (COVID-19), however mild, stay at home and do not leave your house for 7 days from when your symptoms started.
                    If you live with others and you are the first in the household to have symptoms of coronavirus, then you must stay at home for 7 days, but all other household members who remain well must stay at home and not leave the house for 14 days. 
                    The 14-day period starts from the day when the first person in the house became ill.`}
                q3={'Sick pay'} a3={`You can get £94.25 per week Statutory Sick Pay (SSP) if you’re too ill to work. 
                    It’s paid by your employer for up to 28 weeks.
                    If you are staying at home because of COVID-19 you can now claim SSP. 
                    This includes individuals who are caring for people in the same household and therefore have been advised to do a household quarantine.`}
                q4={'Proof of sickness'} a4={`If you have COVID-19 or are advised to stay at home, you can get an ‘isolation note’ by visiting NHS 111 online, rather than visiting a doctor. 
                For COVID-19 cases this replaces the usual need to provide a ‘fit note’ (sometimes called a ‘sick note’) after 7 days of sickness absence.`}
                q5={'If you’re self-employed or not eligible for SSP'}
                a5={`If you are not eligible for SSP – for example if you are self-employed or earning below the Lower Earnings Limit of £118 per week – and you have COVID-19 or are advised to stay at home, 
                you can now more easily make a claim for Universal Credit or new style Employment and Support Allowance.
                    If you are eligible for new style Employment and Support Allowance, it will now be payable from day 1 of sickness, rather than day 8, if you have COVID-19 or are advised to stay at home.`} />
        </div>
    )
}

export default WorkInfoNI;