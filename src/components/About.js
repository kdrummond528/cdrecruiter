import React from 'react';
// import Headshot from '../img/headshot.png';
import { Card, Image, Stack, Heading, Text, Button, CardBody, CardFooter } from '@chakra-ui/react';

const About = () => {
    return (
        <div>

            <p className='pgheader'>About Me</p>

            {/* <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
<Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={Headshot}
                    alt='Chris Drummond'


                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>

                </Stack>
            </Card> */}

            <div className='body-div'>

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

            </div>
        </div >
    )
}

export default About