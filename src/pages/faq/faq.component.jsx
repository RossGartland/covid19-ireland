import React from 'react';
import HeadingCommon from '../../components/heading-common/heading-common.component';
import FAQImage from '../../assets/belfast_city_hall.jpg'
import Accordion from '../../components/accordion/accordion.component';
import './faq.style.css';

const Advice = () => {
    return (
        <div>
            <HeadingCommon title={"Frequently Asked Questions"} bgImage={FAQImage} />
            <Accordion q1={'What is Social Distancing?'}
                a1={'Social distancing measures are steps you can take to reduce social interaction between people.' +
                    ' This will help reduce the transmission of coronavirus (COVID-19).' +
                    ' They are to: Avoid contact with someone who is displaying symptoms of coronavirus (COVID-19).' +
                    ' These symptoms include high temperature and/or new and continuous cough Avoid non-essential use of public transport when possible Work from home, where possible. Your employer should support you to do this. Please refer to employer guidance for more information Avoid large and small gatherings in public spaces, noting that pubs, restaurants, leisure centres and similar venues are currently shut as infections spread easily in closed spaces where people gather together.'+ 
                    <br/> + ' Avoid gatherings with friends and family. Keep in touch using remote technology such as phone, internet, and social media Use telephone or online services to contact your GP or other essential services Everyone should be trying to follow these measures as much as is practicable. We strongly advise you to follow the above measures as much as you can and to significantly limit your face-to-face interaction with friends and family if possible, particularly if you: are over 70 have an underlying health condition are pregnant. ' +
                    'This advice is likely to be in place for some weeks. '}
                q2={'What should you do if you have hospital and GP appointments during this period?'}
                a2={'We advise everyone to access medical assistance remotely, wherever possible.' +
                'However, if you have a scheduled hospital or other medical appointment during this period, talk to your GP or clinician to ensure you continue to receive the care you need and consider whether appointments can be postponed.'}
                q3={'What is the advice for visitors including those who are providing care for you?'}
                a3={'You should contact your regular social visitors such as friends and family to let them know that you are reducing social contacts and that they should not visit you during this time unless they are providing essential care for you.'+
                ' Essential care includes things like help with washing, dressing or preparing meals.'+
                ' If you receive regular health or social care from an organisation, either through your local authority or paid for by yourself, inform your care providers that you are reducing social contacts and agree on a plan for continuing your care.'+
                ' If you receive essential care from friends or family members, speak to your carers about extra precautions they can take to keep you safe. '+
                'You may find this guidance on Home care provision useful. It is also a good idea to speak to your carers about what happens if one of them becomes unwell. '+
                'If you need help with care but you’re not sure who to contact, or if you do not have family or friends who can help you, you can contact your local council who should be able to help you.'}
                q4={'What If I Develop Symptoms?'}
                a4={'The same guidance applies to the general population and those at increased risk of severe illness from coronavirus (COVID-19). '
                +'If you develop symptoms of COVID-19 (high temperature and/or new and continuous cough), self-isolate at home for 7 days. '}
                q5={'Am I in the High Risk Group?'}
                a5={'This group includes those who are: aged 70 or older (regardless of medical conditions) under 70 with an underlying health condition listed below (ie anyone instructed to get a flu jab as an adult each year on medical grounds):'+ 
                <br/> + ' chronic (long-term) respiratory diseases, such as asthma, chronic obstructive pulmonary disease (COPD), emphysema or bronchitis chronic heart disease, such as heart failure chronic kidney disease chronic liver disease, such as hepatitis chronic neurological conditions, such as Parkinson’s disease, motor neurone disease, multiple sclerosis (MS), a learning disability or cerebral palsy diabetes problems with your spleen –'+ 
                <br/> + ' for example, sickle cell disease or if you have had your spleen removed a weakened immune system as the result of conditions such as HIV and AIDS, or medicines such as steroid tablets or chemotherapy being seriously overweight (a body mass index (BMI) of 40 or above) those who are pregnant '+ 
                <br/> + 'Note: there are some clinical conditions which put people at even higher risk of severe illness from COVID-19.'+
                 <br/> + ' If you are in this category, next week the NHS in England will directly contact you with advice about the more stringent measures you should take in order to keep yourself and others safe. For now, you should rigorously follow the social distancing advice in full, outlined below. People falling into this group are those who may be at particular risk due to complex health problems such as:'+ 
                 <br/> + ' people who have received an organ transplant and remain on ongoing immunosuppression medication people with cancer who are undergoing active chemotherapy or radiotherapy people with cancers of the blood or bone marrow such as leukaemia who are at any stage of treatment people with severe chest conditions such as cystic fibrosis or severe asthma (requiring hospital admissions or courses of steroid tablets) people with severe diseases of body systems, such as severe kidney disease (dialysis)'} />
            <div>
            </div>
        </div>
    )
}
export default Advice;