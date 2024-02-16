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

            {/* beginning of career photo gallery */}
            {/* <p className='pgheader'>My Career At a Glance</p>
            <SimpleGrid columns={3} spacing={10} className='gallery'>

                <Box>
                    <Card maxW='sm' className='gallery-cards'>
                        <CardBody>

                            <Image
                                src={EngRoom}
                                alt='In the engineroom'
                                borderRadius='lg'
                            />

                            <Stack mt='6' spacing='3'>
                                <p size='md' className='name'>                        Engine Work
                                </p>

                                <Text>
                                    I was working on ... in the engine spaces...
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <p size='md' className='title'>                              USS Cincinnati — 2022
                        </p>
                    </Card>
                </Box>

                <Box>
                    <Card maxW='sm' className='gallery-cards'>
                        <CardBody>

                            <Image
                                src={FleetWk}
                                alt='Fleet Week'
                                borderRadius='lg'
                            />

                            <Stack mt='6' spacing='3'>
                                <p size='md' className='name'>                                    Fleet Week in L.A.
                                </p>

                                <Text>
                                    I met Chauncey Leopardi (The Sandlot) while on Fleet Week in Los Angeles.
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <p size='md' className='title'>                              USS Cincinnati — 2023
                        </p>
                    </Card>
                </Box>

                <Box>
                    <Card maxW='sm' className='gallery-cards'>
                        <CardBody>

                            <Image
                                src={Promotion}
                                alt='Fleet Week'
                                borderRadius='lg'
                            />

                            <Stack mt='6' spacing='3'>
                                <p size='md' className='name'>
                                    EN1 Promotion
                                </p>

                                <Text>
                                    When I was promoted to First Class Petty Officer.
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <p size='md' className='title'>                              USS Cincinnati — 2023
                        </p>
                    </Card>
                </Box>

                <Box>
                    <Card maxW='sm' className='gallery-cards'>
                        <CardBody>

                            <Image
                                src={RibPic}
                                alt='On the rib'
                                borderRadius='lg'
                            />

                            <Stack mt='6' spacing='3'>
                                <p size='md' className='name'>                        On The Rib
                                </p>

                                <Text>
                                    During this underway I was on the rib doing such and such...
                                </Text>

                            </Stack>
                        </CardBody>

                        <Divider />

                        <p size='md' className='title'>                            USS Cincinnati — 2023
                        </p>


                    </Card>
                </Box>

                <Box>
                    <Card maxW='sm' className='gallery-cards'>
                        <CardBody>

                            <Image
                                src={OceanView}
                                alt='Ocean views'
                                borderRadius='lg'
                            />

                            <Stack mt='6' spacing='3'>
                                <p size='md' className='name'>                      Ocean Views
                                </p>

                                <Text>
                                    One of a kind ocean views during underways.
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <p size='md' className='title'>                              USS Cincinnati — 2022
                        </p>
                    </Card>
                </Box>

                <Box>
                    <Card maxW='sm' className='gallery-cards'>
                        <CardBody>

                            <Image
                                src={NoruGrad}
                                alt='NORU Graduation'
                                borderRadius='lg'
                            />

                            <Stack mt='6' spacing='3'>
                                <p size='md' className='name'>
                                    NORU Graduation
                                </p>

                                <Text>
                                    After completing recruiting school...
                                </Text>
                            </Stack>
                        </CardBody>

                        <Divider />

                        <p size='md' className='title'>                              NORU — 2023
                        </p>
                    </Card>
                </Box>

            </SimpleGrid> */}

        </div >
    )
}

export default About