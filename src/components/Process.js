import React from 'react';
import { Link } from 'react-router-dom';
import { Card, SimpleGrid, Stack, StackDivider, Box, Text, CardBody, Divider } from '@chakra-ui/react';
import Steps from './Steps';
import StepsMobile from './StepsMobile';
import Embark from './doc/Prospect/EmbarkFlyer.pdf';
import EOV from './doc/Prospect/EOVFlyer.pdf';
import WAInfo from './doc/Prospect/WashingtonInfographics.jpg';
import Join from './doc/Prospect/HowYouCanJoin.pdf';

const Process = () => {
    return (
        <div>

            <Card className='card'>
                <p className='pgheader'>Process of Enlisting</p>

                <CardBody>

                    <div className='steps'>
                        <Steps />
                    </div>

                    <div className='steps-mobile'>
                        <StepsMobile />
                    </div>

                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        <Card>
                            <p className='process-title' padding='5px'>
                                1. Initial Contact</p>
                            <CardBody>
                                <p className='left-text'>
                                    <li><b>Phone call:</b></li>
                                    At first contact we would discuss your background, interests, opportunities and benefits that would be available to you in the Navy, as well as well as go over any possible disqualifiers.
                                </p>
                            </CardBody>
                        </Card>

                        <Card>
                            <p className='process-title'>
                                2. Initial Appointment</p>
                            <CardBody>
                                <p className='left-text'>
                                    <li><b>In-person office visit:</b></li>
                                    We would conduct an in-depth screening interview collecting more background and personal information, and you would take a practice Armed Services Vocational Aptitude Battery (<i>ASVAB</i>).
                                </p>
                            </CardBody>
                        </Card>

                        <Card>
                            <p className='process-title'>
                                3. MEPs Visit</p>
                            <CardBody>
                                <p className='left-text'>
                                    <li><b>Entrance testing and evaluation:</b></li>
                                    You would take the ASVAB and receive a medical evaluation at the nearest <a className='link' href="https://www.google.com/maps/place/Seattle+MEPS/@47.5583621,-122.342933,17z/data=!3m1!4b1!4m6!3m5!1s0x549041b7a4bae249:0x8e4ed5e3d10e6dc9!8m2!3d47.5583621!4d-122.3403581!16s%2Fg%2F11b75l4rgc?entry=ttu">Military Entrance Processing Station</a> (<i>MEPS</i>) located in Seattle, Washington.
                                </p>
                            </CardBody>
                        </Card>
                    </SimpleGrid>

                    {/* What to expect at meps p */}
                    <Box marginTop={'20px'}>
                        <Text size='xs' textTransform='uppercase'
                            className='title'>
                            What to Expect at MEPS
                        </Text>
                        <Text pt='2' fontSize='sm'>
                            When you arrive at MEPS the first step is the aptitude testing. The ASVAB, which takes on average 3.5 hours to complete. Depending on results, the second step will consist of a medical and physical evaluation. Contingent upon any findings, after completing all necessary evaluations, the third step will be speaking with a counselor for job selection. The fourth step consists of an in-depth background screening. The final step is the oath of enlistment.
                        </Text>
                        <br />

                        <Divider></Divider>
                        <br />

                        <Text pt='2' fontSize='sm'>
                            <b>Still unsure if you want to join?</b>
                            <br />
                            Learn about how to participate in an <a target='_blank' className='link' href={Embark}>Embark Tour</a>, which gives you the opportunity to participate in a multi-day ship experience of Navy operations first-hand. Or learn about how to participate in a three-day <a target='_blank' className='link' href={EOV}>Educator Orientation Visit</a> (<i>EOV</i>). For more information, review the <a target='_blank' className='link' href={Join}>How You Can Join</a> guide.
                            <br /><br />

                            {/* <a target='_blank' className='link' href={WAInfo}>Washington Infographics</a> */}
                            <b>Ready for the next step?</b>
                            <br />
                            Fill out an <Link to='/survey' className='link'>Interest Survey</Link> and I will contact you within 1-2 business days, or
                            set up an introductory phone call with me via <a title='Book an appointment.' className='link' target="_blank" rel="noreferrer" href="https://calendar.app.google/M3dqL4s62eQPidVL7">Google Calendar</a>.

                        </Text>
                    </Box>

                </CardBody >
            </Card >

        </div >
    )
}

export default Process