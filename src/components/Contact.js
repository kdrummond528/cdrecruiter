import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { TbPhone } from "react-icons/tb";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Card, Stack, StackDivider, Box, Text, CardBody } from '@chakra-ui/react';
// import IGpost from './IGpost';

const Contact = () => {
  return (
    <div>

      <Card className='card'>

        <p className='contact-pgheader'>Contact Me</p>

        <div>
          <a href="mailto: christopher.e.drummond2.mil@us.navy.mil"
            title='Email me.'>
            <MdOutlineMail className='icon' size={'3.5rem'} />
          </a>

          <a href="tel:425-977-9361"
            title='Call me.'>
            <TbPhone className='icon' size={'3.5rem'} />
          </a>

          <a href="sms:425-977-9361"
            title='Text me.'>
            <TbMessageCircle2 className='icon' size={'3.5rem'} />
          </a>

          <a target="_blank" rel="noreferrer" href="https://calendar.app.google/M3dqL4s62eQPidVL7"
            title='Book an appointment with me.'>
            <MdOutlineCalendarMonth className='icon' size={'3.5rem'} />
          </a>

          <a target='_blank' rel="noreferrer" href='https://www.instagram.com/nrslynnwood?igsh=MTJ1OTB4Z3RpZ3N5bw==' title='Check out our Instagram.'>
            <GrInstagram className='icon' size={'3.2rem'} />
          </a>

          <p className='name'>Christopher Drummond</p>
          <p className='title'>Navy Talent Acquisition Scout</p>

          U.S. Navy Talent Acquisition Station Lynnwood<br />
          <a className='link' target="_blank" rel="noreferrer" title='Visit our location.' href="http://maps.google.com/?q=18415 33rd Ave W. Ste. D, Lynnwood, WA 98037">18415 33rd Ave W. Ste. D<br />
            Lynnwood, WA 98037</a>

        </div>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>

            <Box>
              <Text size='xs' textTransform='uppercase'
                className='title'>
                Let's talk.
              </Text>

              <Text pt='2' fontSize='sm'>
                Set up an introductory phone call with me via <a title='Book an appointment.' className='link' target="_blank" rel="noreferrer" href="https://calendar.app.google/M3dqL4s62eQPidVL7">Google Calendar</a>.
              </Text>
            </Box>

            <Box>
              <Text size='xs' textTransform='uppercase'
                className='title'>
                Share your contact information.
              </Text>

              <Text pt='2' fontSize='sm'>
                Fill out an <Link to='/survey' className='link'>Interest Survey</Link> and I will contact you within 1-2 business days.
              </Text>
            </Box>

            {/* <IGpost /> */}

          </Stack>

        </CardBody>
      </Card>

    </div>
  )
}

export default Contact