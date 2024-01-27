import React from 'react'
// import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
  return (
    <div>

      <p className='contact-p'>
        Ways to contact me
      </p>

      <a className='email' href="mailto: christopher.e.drummond2.mil@us.navy.mil"
        title='Email me'>
        {/* <TfiEmail className='icon' size={'2rem'} /> */}
        Email
      </a>

      <br /><br />

      <a className='call' href="tel:425-977-9361"
        title='Call or text me'>
        Call/Text
      </a>

      <br /><br />
      Or<br /><br />


      <p>
        Set up a visit with me.<br /><br />
        U.S. Navy Talent Acquisition Station Lynnwood<br />
        18415 33rd Ave W. Ste. D<br />
        Lynnwood, WA 98037
      </p>

    </div>
  )
}

export default Contact