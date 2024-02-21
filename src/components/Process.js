import React from 'react';
import { Card, SimpleGrid, Stack, StackDivider, Box, Text, CardBody, Divider } from '@chakra-ui/react';
import Steps from './Steps';
import Embark from './doc/Prospect/EmbarkFlyer.pdf';
import EOV from './doc/Prospect/EOVFlyer.pdf';

const Process = () => {
    return (
        <div>

            <Card className='card' marginBottom={'8%'}>
                <p className='pgheader'>Process of Enlisting</p>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>

                        <div className='steps'>
                            <Steps />
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
                                    3. MEPs</p>
                                <CardBody>
                                    <p className='left-text'>
                                        <li><b>Entrance testing and evaluation:</b></li>
                                        You would take the ASVAB and receive a medical evaluation at the nearest <a className='link' href="https://www.google.com/maps/place/Seattle+MEPS/@47.5583621,-122.342933,17z/data=!3m1!4b1!4m6!3m5!1s0x549041b7a4bae249:0x8e4ed5e3d10e6dc9!8m2!3d47.5583621!4d-122.3403581!16s%2Fg%2F11b75l4rgc?entry=ttu">Military Entrance Processing Station</a> (<i>MEPS</i>) located in Seattle, Washington.
                                    </p>
                                </CardBody>
                            </Card>
                        </SimpleGrid>

                        {/* After discussing your background, interests, as well as the opportunities and benefits that would be available to you, the next step would be to take a practice Armed Services Vocational Aptitude Battery (<i>ASVAB</i>).  Following this, we would conduct a screening interview collecting more background and personal information, and then schedule you for the ASVAB and medical evaluation at the nearest <a className='link' href="https://www.google.com/maps/place/Seattle+MEPS/@47.5583621,-122.342933,17z/data=!3m1!4b1!4m6!3m5!1s0x549041b7a4bae249:0x8e4ed5e3d10e6dc9!8m2!3d47.5583621!4d-122.3403581!16s%2Fg%2F11b75l4rgc?entry=ttu">Military Entrance Processing Station</a> (<i>MEPS</i>) located in Seattle, Washington. */}
                        {/* </Text> */}
                        {/* </Box> */}

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                What to Expect at MEPS
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                When you arrive at MEPS the first step is the aptitude testing. The ASVAB, which takes on average 3.5 hours to complete. Depending on results, the second step will consist of a medical and physical evaluation. Contingent upon any findings, after completing all necessary evaluations, the third step will be speaking with a counselor for job selection. The fourth step consists of an in-depth background screening. The final step is the oath of enlistment.
                                <br /><br />
                                <Divider></Divider>
                                <br />
                                <b>Still unsure if you want to join?</b>
                                <br />
                                Learn about how to participate in an <a target='_blank' className='link' href={Embark}>Embark Tour</a>, which gives you the opportunity to participate in a multi-day ship experience of Navy operations first-hand. Or learn about how to participate in a three-day <a target='_blank' className='link' href={EOV}>Educator Orientation Visit</a> (<i>EOV</i>).
                            </Text>
                        </Box>

                    </Stack >
                </CardBody >
            </Card >

            {/* <br /><br />
                    For more information regarding the MEPS process, view this handout.
                    <br />
                    Additionally, you may also view this video detailing the process, <a href='https://www.mepcom.army.mil/Home/Applicants-and-Parents/Going-to-the-MEPS/'>A Day at the MEPS</a>. */}


            {/* <Collapsible trigger={["Enlisted Jobs", <IoIosArrowDown class="arrow" />]} className='collapsible'>
                    <p>
                        Enter enlisted job rates and info...
                        Download the <a target='_blank' href='https://www.cool.osd.mil/usn/resources_and_links/index.html?MobileApp'>Navy COOL Mobile Application</a> to view more information on enlisted job rates, <a target='_blank' href='https://www.cool.osd.mil/usn/resources_and_links/index.html?RatingInfoCards'>here's how</a>.

                    </p>
                </Collapsible> */}

        </div >
    )
}

export default Process