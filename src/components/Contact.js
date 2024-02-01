import React from 'react'
import SurveyComponent from './SurveyComponent'
import { MdOutlineMail } from 'react-icons/md';
import { TbPhone } from "react-icons/tb";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Contact = () => {
  return (
    <div>

      <p className='pgheader'>Contact Me</p>

      <p className='contact-p'>

        <a href="mailto: christopher.e.drummond2.mil@us.navy.mil"
          title='Email me.'>
          <MdOutlineMail className='icon' size={'2rem'} />
        </a>

        <a href="tel:425-977-9361"
          title='Call me.'>
          <TbPhone className='icon' size={'2rem'} />
        </a>

        <a href="sms:425-977-9361"
          title='Text me.'>
          <TbMessageCircle2 className='icon' size={'2rem'} />
        </a>

        <a href="https://calendly.com/chrisdrummond/"
          title='Book an appointment with me.'>
          <MdOutlineCalendarMonth className='icon' size={'2rem'} />
        </a>

        <br /><br />

        <p className='name'>Christopher Drummond</p>
        <p className='title'>Navy Talent Acquisition Scout</p>

        U.S. Navy Talent Acquisition Station Lynnwood<br />
        <a href="http://maps.google.com/?q=18415 33rd Ave W. Ste. D, Lynnwood, WA 98037">18415 33rd Ave W. Ste. D<br />
          Lynnwood, WA 98037</a>

        <br /><br />

        Set up an introductory phone call, zoom meeting, or in person meeting with me via <a title='Book an appointment.' href="https://calendly.com/chrisdrummond/">Calendly</a>.
        <br /><br />

      </p>

      <SurveyComponent />


    </div>
  )
}

export default Contact