import React from 'react';
import { Image, Stack, Card, CardFooter, CardBody, Text } from '@chakra-ui/react';
import { Divider } from 'rsuite';
import EngineRoom from "../img/engineroompic.jpg";
import FleetWk from "../img/fleetwk.jpg";
import NoruGrad from "../img/norugrad.jpg";
import OceanView from "../img/oceanview1.jpg";
import OceanView2 from "../img/oceanview2.jpg";
import Promotion from "../img/promotion.jpg";
import RibPic from '../img/ribpic.jpg'
import BoatPic from '../img/boatpic.jpg';
import Aschool from '../img/aschool.jpg';
import Fire from '../img/fire.jpg';
import Helo from '../img/helo.jpg';
import Soq from '../img/soq.jpg';
import Sunset from '../img/sunset.jpg';

const Gallery = () => {

    // const toggleFullScreen = () => {
    //     const element = document.getElementById('gallery-img');

    //     const isFullScreen = document.fullscreenElement;

    //     if (isFullScreen) {
    //         document.exitFullscreen();
    //     } else {
    //         element.requestFullscreen();
    //     }
    // };


    return (
        <div>

            <p className='pgheader'>Gallery</p>
            <p className='pg-subheading'>
                My name rings bells through these P-ways.
            </p>
            <br />

            <Stack direction='gallery'>

                {/* boat ops */}
                <Card>
                    <Image
                        // onClick={toggleFullScreen}
                        // id='gallery-img'
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={RibPic}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Boat Ops
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2023
                    </Text>
                </Card >

                {/* noru */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={NoruGrad}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Recruiting Graduation
                    </Text>
                    <Text className='gallery-text'>
                        NAS Pensacola<br />
                        <b>Pensacola, Florida</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2023
                    </Text>
                </Card>

                {/* first class promotion */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={Promotion}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        First Class Promotion
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2023
                    </Text>
                </Card>

                {/* fleet week */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={FleetWk}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Fleet Week L.A.
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>Los Angeles, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2023
                    </Text>
                </Card >

                {/* engine room pic */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={EngineRoom}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Engine Maintenance
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2022
                    </Text>
                </Card>

                {/* boat ops with flag */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={BoatPic}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Boat Ops
                    </Text>
                    <Text className='gallery-text'>
                        USS Manchester<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2022
                    </Text>
                </Card >

                {/* a school */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={Aschool}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        A School Graduation
                    </Text>
                    <Text className='gallery-text'>
                        Enginemen A School<br />
                        <b>Chicago, Illinois</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2012
                    </Text>
                </Card >

                {/* fire marshall drills */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={Fire}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Fire Marshall Drill
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2023
                    </Text>
                </Card >

                {/* fdff */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={Helo}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Flight Deck Firefighting
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2023
                    </Text>
                </Card >

                {/* eot */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={Soq}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        End of Tour
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2022
                    </Text>
                </Card >

                {/* sunset with ship in bg */}
                <Card>
                    <Image
                        className='galleryimg'
                        boxSize='200px'
                        objectFit='cover'
                        src={Sunset}
                        alt='Chris Drummond' />
                    <Text className='gallery-name'>
                        Sunset Views
                    </Text>
                    <Text className='gallery-text'>
                        USS Cincinnati<br />
                        <b>San Diego, California</b>
                    </Text>
                    <Divider />
                    <Text className='gallery-year'>
                        2021
                    </Text>
                </Card >

            </Stack >

        </div >
    )
}

export default Gallery
