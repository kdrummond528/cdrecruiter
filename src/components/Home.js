import React from 'react';
// import Ntag from '../img/ntag_logo.PNG';
// import { Image } from '@chakra-ui/react';

const Home = () => {
    return (
        <div>

            {/* <Image borderRadius='full'
                boxSize='300px' className='ntag-logo' src={Ntag} align='left' /> */}

            <div className='home-div'>
                <p className='pgheader'>Home</p>
                <div className='body-div'>

                    <p className='body'>
                        This is the home page.<br />
                        <br />
                        Enter some intro content here.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home