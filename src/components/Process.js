import React from 'react';
import { Card, Stack, StackDivider, Box, Text, CardBody } from '@chakra-ui/react';
import Steps from './Steps'

const Process = () => {
    return (
        <div>

            <Card className='card' marginBottom={'8%'}>
                {/* <CardHeader> */}
                <p className='pgheader'>Process of Enlisting</p>
                {/* </CardHeader> */}

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            {/* <Text size='xs' textTransform='uppercase'
                                className='title'>
                                The First Steps
                            </Text> */}

                            <div className='steps'>
                                <Steps />
                            </div>

                            <Text pt='2' fontSize='sm'>
                                <p className='title'>
                                    1. Initial Contact</p>
                                <p className='left-text'>
                                    <li><b>Phone call:</b></li>
                                    At first contact we would discuss your background, interests, opportunities and benefits that would be available to you in the Navy, as well as well as go over any possible disqualifiers.
                                </p>
                                <br />

                                <p className='title'>
                                    2. Initial Appointment</p>
                                <p className='left-text'>
                                    <li><b>In-person office visit:</b></li>
                                    We would conduct an in-depth screening interview collecting more background and personal information, and you would take a practice Armed Services Vocational Aptitude Battery (<i>ASVAB</i>).
                                </p>
                                <br />

                                <p className='title'>
                                    3. MEPs</p>
                                <p className='left-text'>
                                    <li><b>Entrance testing and evaluation:</b></li>
                                    You would take the ASVAB and receive a medical evaluation at the nearest <a className='link' href="https://www.google.com/maps/place/Seattle+MEPS/@47.5583621,-122.342933,17z/data=!3m1!4b1!4m6!3m5!1s0x549041b7a4bae249:0x8e4ed5e3d10e6dc9!8m2!3d47.5583621!4d-122.3403581!16s%2Fg%2F11b75l4rgc?entry=ttu">Military Entrance Processing Station</a> (<i>MEPS</i>) located in Seattle, Washington. Pending results, you will choose a job and take your oath.
                                </p>

                                {/* After discussing your background, interests, as well as the opportunities and benefits that would be available to you, the next step would be to take a practice Armed Services Vocational Aptitude Battery (<i>ASVAB</i>).  Following this, we would conduct a screening interview collecting more background and personal information, and then schedule you for the ASVAB and medical evaluation at the nearest <a className='link' href="https://www.google.com/maps/place/Seattle+MEPS/@47.5583621,-122.342933,17z/data=!3m1!4b1!4m6!3m5!1s0x549041b7a4bae249:0x8e4ed5e3d10e6dc9!8m2!3d47.5583621!4d-122.3403581!16s%2Fg%2F11b75l4rgc?entry=ttu">Military Entrance Processing Station</a> (<i>MEPS</i>) located in Seattle, Washington. */}
                            </Text>
                        </Box>

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                What to Expect at MEPS
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                When you arrive at MEPS the first step is the aptitude testing. The ASVAB, which takes on average 3.5 hours to complete. Depending on results, the second step will consist of a medical and physical evaluation. Contingent upon any findings, after completing all necessary evaluations, the third step will be speaking with a counselor for job selection. The fourth step consists of an in-depth background screening. The final step is the oath of enlistment.
                            </Text>
                        </Box>

                    </Stack>
                </CardBody>
            </Card>

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

        </div>
    )
}

export default Process