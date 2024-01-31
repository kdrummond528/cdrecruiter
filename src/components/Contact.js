import React from 'react'
import SurveyComponent from './SurveyComponent'
import { MdOutlineMail } from 'react-icons/md';
import { TbPhone } from "react-icons/tb";
import { TbMessageCircle2 } from "react-icons/tb";

const Contact = () => {
  return (
    <div>

      <h2 className='pgheader'>Contact Me</h2>

      <p className='contact-p'>

        <a className='email' href="mailto: christopher.e.drummond2.mil@us.navy.mil"
          title='Email me.'>
          <MdOutlineMail className='icon' size={'2rem'} />
        </a>

        <a className='call' href="tel:425-977-9361"
          title='Call me.'>
          <TbPhone className='icon' size={'2rem'} />
        </a>

        <a className='call' href="sms:425-977-9361"
          title='Text me.'>
          <TbMessageCircle2 className='icon' size={'2rem'} />
        </a>

        <br /><br />

        Set up a visit with me.<br />
        <b>Set up a Calendly account</b>
        <br /><br />
        U.S. Navy Talent Acquisition Station Lynnwood<br />
        18415 33rd Ave W. Ste. D<br />
        Lynnwood, WA 98037

      </p>

      <SurveyComponent />


    </div>
  )
}

export default Contact