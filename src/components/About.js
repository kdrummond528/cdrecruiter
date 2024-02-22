import React from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../img/profilepic.jpg';
import { Card, CardHeader, StackDivider, Box, Image, Stack, Text, CardBody, Divider, SimpleGrid, CardFooter } from '@chakra-ui/react';
// import RibPic from '../img/ribpic1.jpg';
// import EngRoom from '../img/engineroompic.jpg';
// import FleetWk from '../img/fleetwk.jpg';
// import Promotion from '../img/promotion.jpg';
// import OceanView from '../img/oceanview1.jpg';
// import NoruGrad from '../img/norugrad.jpg';
// import Gallery from './Gallery';
// import Carousel from './Carousel';

const About = () => {
    return (
        <div>

            <Card className='card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                marginBottom={'2%'}
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

                        <Text py='2' className='text'>
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
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Expeditionary
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                Detail your personal experiences on an expeditionary command...<br /><br />
                                My first command was an Expeditionary Command (enter command name here). I was on missions doing (enter brief mission descriptions here).
                            </Text>
                        </Box>

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Reserve
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                Detail your personal experiences as a reservist...<br /><br />
                                I became a reservist after completing 2 years on active-duty orders. I was attached to (enter command name and information here). We would work one weekend a month, and go to Annual Training (AT) once a year. Some of the bases I went on AT were NAS Jax (Jacksonville, FL), MacDill AFB (Tampa, FL), NS Norfolk (Norfolk, VA) and NS San Diego (San Diego, CA).
                            </Text>
                        </Box>

                        <Box>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Ship Life
                            </Text>
                            <Text pt='2' fontSize='sm'>
                                Detail your personal experiences on a ship...<br /><br />
                                I re-enlisted active duty and served on the LCS community. I was attached to USS Kansas City, USS Manchester, USS Cincinnati.
                            </Text>
                        </Box>

                    </Stack>
                </CardBody>

                <Divider></Divider>
                <p className='texttolink'>Check out my <Link className='link' to='/gallery'>
                    Career at a Glance Gallery</Link> and <Link className='link' to='/accomplish'>Accomplishments</Link> while in the Navy.
                </p>
            </Card>

        </div >
    )
}

export default About