import React from 'react';
import { Image, Stack, Card, CardFooter, CardBody, Text } from '@chakra-ui/react'
import EngineRoom from "../img/engineroompic.jpg";
import FleetWk from "../img/fleetwk.jpg";
import NoruGrad from "../img/norugrad.jpg";
import OceanView from "../img/oceanview1.jpg";
import OceanView2 from "../img/oceanview2.jpg";
import Promotion from "../img/promotion.jpg";
import RibPic from '../img/ribpic1.jpg'
import { Divider } from 'rsuite';

const Gallery = () => {
    return (
        <div>

            <p className='pgheader'>Gallery</p>
            <p className='pg-subheading'>Some accomplishments and highlights of my career in the Navy.</p>
            <br />

            <div className='gallery'>
                {/* <Stack direction='row'> */}

                <Card className='gallery-card'>
                    <CardBody>
                        <Image className='gallery-img'
                            boxSize='200px'
                            objectFit='cover'
                            src={EngineRoom}
                            alt='Chris Drummond'
                        />
                        <p className='gallery-name'>
                            Emergent Repair
                        </p>
                        <Text className='gallery-text'>Summary of the story behind the picture.</Text>
                        <p className='gallery-year'>USS Cincinnati 2022</p>
                    </CardBody>
                </Card>

                <Card className='gallery-card'>
                    <CardBody>
                        <Image className='gallery-img'
                            boxSize='200px'
                            objectFit='cover'
                            src={NoruGrad}
                            alt='Chris Drummond'
                        />
                        <p className='gallery-name'>
                            NORU Graduation
                        </p>
                        <Text className='gallery-text'>Summary of the story behind the picture.</Text>
                        <p className='gallery-year'>NORU 2023</p>
                    </CardBody>
                </Card>

                <Card className='gallery-card'>
                    <CardBody>
                        <Image className='gallery-img'
                            boxSize='200px'
                            src={Promotion}
                            objectFit='cover'
                            alt='Chris Drummond' />
                        <p className='gallery-name'>
                            EN1 Promotion
                        </p>
                        <Text className='gallery-text'>Summary of the story behind the picture.</Text>
                        <p className='gallery-year'>USS Cincinnati 2023</p>
                    </CardBody>
                </Card>

                <Card className='gallery-card'>
                    <CardBody>
                        <Image className='gallery-img'
                            boxSize='200px'
                            src={FleetWk}
                            objectFit='cover'
                            alt='Chris Drummond' />
                        <p className='gallery-name'>
                            Fleet Week
                        </p>
                        <Text className='gallery-text'>Summary of the story behind the picture.</Text>
                        <p className='gallery-year'>USS Cincinnati 2023</p>
                    </CardBody>
                </Card>

                <Card className='gallery-card'>
                    <CardBody>
                        <Image className='gallery-img'
                            boxSize='200px'
                            src={RibPic}
                            objectFit='cover'
                            alt='Chris Drummond' />
                        <p className='gallery-name'>
                            Boat Ops</p>
                        <Text className='gallery-text'>Summary of the story behind the picture.</Text>
                        <p className='gallery-year'>USS Cincinnati 2023</p>
                    </CardBody>
                </Card>

                {/* </Stack> */}

            </div>
        </div>
    )
}

export default Gallery


