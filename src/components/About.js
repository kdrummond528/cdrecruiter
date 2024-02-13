import React from 'react';
import Profilepic from '../img/profilepic.jpg';
import { Card, CardHeader, Heading, StackDivider, Box, Image, Stack, Text, Button, CardBody, CardFooter } from '@chakra-ui/react';

const About = () => {
    return (
        <div>

            <Card className='card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={Profilepic}
                    alt='Chris Drummond'
                />

                <Stack>
                    <CardBody>
                        <p className='pgheader'>About Me</p>

                        <Text py='2'>
                            My name is Christopher Drummond, and I am a local Acquisition Talent Scout for the United States Navy currently located in Lynnwood, Washington.
                            <br />
                            <br />
                            Talk about yourself hobbies, getting degrees while active duty, previous experience as a cop, whatever you want...
                        </Text>
                    </CardBody>

                </Stack>
            </Card>

            <Card className='subcard'>
                <CardHeader>
                    <p className='pgheader'>
                        My Experience as a Sailor</p>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>

                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Ship Life
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Detail your personal experiences on a ship...
                            </Text>
                        </Box>

                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Expeditionary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Detail your personal experiences on an expeditionary command...
                            </Text>
                        </Box>

                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Reserve
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Detail your personal experiences as a reservist...
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>

            {/* <div className='body-div'>

                <p className='body'>
                    My name is Christopher Drummond, and I am a local Acquisition Talent Scout for the United States Navy currently located in Lynnwood, Washington.
                    <br />
                    <br />
                    Talk about yourself hobbies, getting degrees while active duty, previous experience as a cop, whatever you want...
                    <br />
                    <br />
                    <p className='body-label'>My Career and Experience as a Sailor</p>
                    Detail your personal experience...
                    <li>As a reservist</li>
                    <li>Expeditionary</li>
                    <li>On a ship</li>
                </p>

            </div> */}
        </div >
    )
}

export default About