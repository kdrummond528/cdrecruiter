import React from 'react';
import Ntag from '../img/ntag_logo.PNG';
import { Card, Image, Stack, Heading, Text, Button, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

const Home = () => {
    return (
        <div>

            <Card className='card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Image className='ntag-logo'
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '350px' }}
                    src={Ntag} alt='ntag logo' />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Welcome Aboard!</Heading>

                        <Text py='2' textAlign='left'>
                            Congratulations on taking the first step of learning about what your new life could be with a future in the United States Navy, and exploring options that are available to you as a potential Future Sailor.<br /><br />
                            Think of me as your guide and all things Navy connoisseur while you begin this journey to change your life and build on your future.<br /><br />
                            Use the links in the navigation bar to learn about me, the Navy, send me your contact information and schedule an appointment.
                            <br /><br />
                            <i>"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek." — Barack Obama</i>
                        </Text>
                    </CardBody>

                    {/* <CardFooter>
                        <p>
                            <i>"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek." — Barack Obama</i>
                        </p>
                    </CardFooter> */}

                </Stack>
            </Card>

        </div>
    )
}

export default Home