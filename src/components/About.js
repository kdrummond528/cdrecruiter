import React from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../img/profilepic.jpg';
import { Card, CardHeader, StackDivider, Box, Image, Stack, Text, CardBody, Divider, SimpleGrid, CardFooter } from '@chakra-ui/react';
import Gallery from './Gallery';

const About = () => {
    return (
        <div className='pgcard'>

            <Card className='card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                marginBottom={'2%'}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    src={Profilepic}
                    alt='Chris Drummond'
                />

                <Stack>
                    <CardBody>
                        <p className='pgheader'>About Me</p>

                        <Text py='2' className='text'>
                            My name is Christopher Drummond, and I am a local Acquisition Talent Scout for the United States Navy currently located in Lynnwood, Washington.
                            I have been in the Navy since 2012, and served on Expeditionary and Ships as well as Reserve Duty.
                            <br /><br />
                            I would love to share my personal experiences with you, get to know you and your goals, answer your questions, and discuss the various opportunities that are available to you by joining the Navy.
                        </Text>
                        <br />
                        <Divider />
                        <br />
                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Let's talk.
                            </Text>

                            <Text pt='2' fontSize='sm'>
                                Set up an introductory phone call with me via <a title='Book an appointment.' className='link' target="_blank" rel="noreferrer" href="https://calendar.app.google/M3dqL4s62eQPidVL7">Google Calendar</a>.
                            </Text>
                        </Box>
                        <br />
                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Share your contact info.
                            </Text>

                            <Text pt='2' fontSize='sm'>
                                Fill out an <Link to='/survey' className='link'>Interest Survey</Link> and I will contact you within 1-2 business days.
                            </Text>
                        </Box>

                    </CardBody>
                </Stack>
            </Card>

            {/* experience as a sailor */}
            {/* <Card className='subcard'>
                <CardHeader>
                    <p className='pgheader'>
                        My Experience as a Sailor</p>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Expeditionary
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                My first command was an Expeditionary Command (enter command name here). I was on missions doing (enter brief mission descriptions here).
                            </Text>
                        </Box>

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Reserve
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                I became a reservist after completing 2 years on active-duty orders. I was attached to (enter command name and information here). We would work one weekend a month, and go to Annual Training (AT) once a year. Some of the bases I went on AT were NAS Jax (Jacksonville, FL), MacDill AFB (Tampa, FL), NS Norfolk (Norfolk, VA) and NS San Diego (San Diego, CA).
                            </Text>
                        </Box>

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Ship Life
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                I re-enlisted active duty and served on the LCS community. I was attached to USS Kansas City, USS Manchester, USS Cincinnati.
                            </Text>
                        </Box>

                    </Stack>
                </CardBody>

                <p className='texttolink'>Check out my <Link className='link' to='/gallery'>
                    Career at a Glance Gallery</Link> and <Link className='link' to='/accomplish'>Accomplishments</Link> while in the Navy.
                </p>
            </Card> */}

            {/* <p className='texttolink'>Check out my <Link className='link' to='/gallery'>
                Career at a Glance Gallery</Link> and <Link className='link' to='/accomplish'>Accomplishments</Link> while in the Navy.
            </p> */}


            <Gallery/>

        </div >
    )
}

export default About