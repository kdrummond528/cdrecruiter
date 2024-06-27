import React from 'react';
import Ntag from '../img/ntag_logo.PNG';
import { Card, Image, Stack, Text, CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='pgcard'>
            <Card className='card'
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'normal' }}
                overflow='hidden'
                variant='outline'
            >

                <Image className='ntag-logo'
                    objectFit='contain'
                    maxW={{ base: '350px' }}
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
                            Not sure where to start? Complete this <Link to='/survey' className='link'>interest form</Link> or <Link to='/appt' className='link'>schedule an appointment</Link> to start a conversation.
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
