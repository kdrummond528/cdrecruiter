import React from 'react';
import Ntag from '../img/ntag_logo.PNG';
import { Card, Image, Stack, Text, CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Card className='card'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >

                <Image className='ntag-logo'
                    objectFit='contain'
                    maxW={{ base: '100%', sm: '350px' }}
                    src={Ntag} alt='ntag logo' />

                <Stack>
                    <CardBody>
                        <p className='pgheader'>
                            Welcome Aboard!
                        </p>

                        <Text textAlign='left'>
                            Congratulations on taking the first step of learning about what your new life could be with a future in the United States Navy, and exploring options that are available to you as a potential Future Sailor.
                            <br /><br />
                            Think of me as your guide and all things Navy connoisseur while you begin this journey to change your life and build on your future.
                            <br /><br />
                            Use this website to get to learn a bit more about the Navy, and to contact me for more information by completing the <Link to='/survey' className='link'>interest survey</Link> and <Link to='/appt' className='link'>schedule an appointment</Link>.
                            <br /><br />
                            <i>"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek."
                                {/* — Barack Obama */}
                            </i>
                        </Text>
                    </CardBody>

                </Stack>
            </Card>

        </div>
    )
}

export default Home