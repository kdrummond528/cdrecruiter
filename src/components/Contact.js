import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { TbPhone } from "react-icons/tb";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Contact = ({showSurvey}) => {
  return (
    <div>

      <p className='pgheader'>Contact Me</p>

      <div className='body-div'>
        <p className='body'>

          <div className='icon-row'>
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
          </div>

          <p className='name'>Christopher Drummond</p>
          <p className='title'>Navy Talent Acquisition Scout</p>

          U.S. Navy Talent Acquisition Station Lynnwood<br />
          <a target="_blank" title='Visit our location.' href="http://maps.google.com/?q=18415 33rd Ave W. Ste. D, Lynnwood, WA 98037">18415 33rd Ave W. Ste. D<br />
            Lynnwood, WA 98037</a>

          <br />

          Set up an introductory phone call, zoom meeting, or in person meeting with me via <a title='Book an appointment.' target="_blank" href="https://calendly.com/chrisdrummond">Calendly</a>.

          <br /><br />

          Fill out an <a href=''>Interest Survey</a> and I will contact you within 1-2 business days.


        </p>
      </div>

    </div>
  )
}

export default Contact