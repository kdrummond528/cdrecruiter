import React from 'react';
import { Image, Stack, Card, Text, CardBody } from '@chakra-ui/react';
import { Divider } from 'rsuite';
import EngineRoom from "../img/engineroompic.jpg";
import FleetWk from "../img/fleetwk.jpg";
import NoruGrad from "../img/norugrad.jpg";
import Noru from "../img/noru.jpg"
import OceanViews1 from "../img/oceanview1.jpg";
import OceanViews2 from "../img/oceanview2.jpg";
import Promotion from "../img/promotion.jpg";
import RibPic from '../img/ribpic.jpg'
import BoatPic from '../img/boatpic.jpg';
import Aschool from '../img/aschool.jpg';
import Fire from '../img/fire.jpg';
import Helo from '../img/helo.jpg';
import Firefighting from '../img/ffdrill.jpg';
import Eot from '../img/eot.jpg';
import Sunset from '../img/sunset.jpg';
import BoatOps2 from '../img/boatops2.jpg';
import BoatOps3 from '../img/boatops3.jpg';
import BoatOps4 from '../img/boatops4.jpg';
import BoatOps5 from '../img/boatops5.jpg';
import BoatOps6 from '../img/boatops6.jpg';
import BoatOps7 from '../img/boatops7.png';
import BoatOps8 from '../img/boatops8.jpg';
import Jax from '../img/jax.jpg';
import Jax2 from '../img/jax2.jpg';
import Soq from '../img/soq.jpg';
import Firerange from '../img/firerange.jpg';
import FleetWeek2 from "../img/fleetweek2.jpg";
import Promotion2 from '../img/promotion2.jpg';
import Security from '../img/security.jpg';
import Fsgrad from '../img/fsgrad.jpg';
import Fsgrad2 from '../img/fsgrad2.JPG';
import Fsgrad3 from '../img/fsgrad3.JPG';
import Ship from '../img/ship.jpg';

// dont know what to post as a title for this picture or when it happened
// import JsPromotion from '../img/jspromotion.jpg';

const Gallery = () => {

    return (
        <div>
            <Card className='gallerycard'>
                <p className='pgheader'>Gallery</p>
                <p className='pg-subheading'>
                    My name rings bells through these P-ways.
                </p>
                {/* <br /> */}

                <CardBody>
                    <Stack direction='gallery'>

                        {/* future sailor graduation */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Fsgrad}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Future Sailor graduation
                            </Text>
                            <Text className='gallery-text'>
                                {/* Edmonds-Woodway High School<br /> */}
                                {/* <b>Edmonds, Washington</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2024
                            </Text> */}
                        </Card>

                        {/* future sailor graduation 2 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Fsgrad2}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Future Sailor graduation
                            </Text>
                            <Text className='gallery-text'>
                                {/* Meadowdale High School<br /> */}
                                {/* <b>Lynnwood, Washington</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2024
                            </Text> */}
                        </Card>

                        {/* future sailor graduation 3 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Fsgrad3}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Future Sailor graduation
                            </Text>
                            <Text className='gallery-text'>
                                {/* Meadowdale High School<br /> */}
                                {/* <b>Lynnwood, Washington</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2024
                            </Text> */}
                        </Card>

                        {/* noru */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>Pensacola, Florida</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card>

                        {/* noru indiv pic */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Noru}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Recruiting
                            </Text>
                            <Text className='gallery-text'>
                                NAS Pensacola<br />
                                {/* <b>Pensacola, Florida</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card>

                        {/* eot */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Eot}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                End of Tour
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* boat ops */}
                        <Card className='galleryimgcard'>
                            <Image
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* first class promotion */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card>

                        {/* fleet week */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>Los Angeles, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* fleet week 2 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={FleetWeek2}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Fleet Week L.A.
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>Los Angeles, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* boat ops 2 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={BoatOps2}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* fire marshall drills */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* boat ops 6 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={BoatOps6}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* boat ops 3 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={BoatOps3}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* fdff */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* ffdrill */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Firefighting}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Flight Deck Firefighting
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* boat ops 8 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={BoatOps8}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2023
                            </Text> */}
                        </Card >

                        {/* ocean views */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={OceanViews2}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Ocean Views
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card >

                        {/* engine room pic */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card>

                        {/* fire range */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Firerange}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Fire Arms Training
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card>

                        {/* security forces */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Security}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Security Forces
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card>

                        {/* ship */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Ship}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Ship Views
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card>
                        {/* soq */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Soq}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Sailor of the Quarter
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card>

                        {/* ocean views */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={OceanViews1}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Ocean Views
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card >

                        {/* boat ops with flag */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card >

                        {/* boat ops 4 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='contain'
                                src={BoatOps4}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card >

                        {/* boat ops 5 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='contain'
                                src={BoatOps5}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2022
                            </Text> */}
                        </Card >

                        {/* sunset with ship in bg */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2021
                            </Text> */}
                        </Card >

                        {/* boat ops 7 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='fit'
                                src={BoatOps7}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Boat Ops
                            </Text>
                            <Text className='gallery-text'>
                                USS Cincinnati<br />
                                {/* <b>San Diego, California</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2021
                            </Text> */}
                        </Card >

                        {/* jax */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Jax}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Reservist Annual Training
                            </Text>
                            <Text className='gallery-text'>
                                NAS Jax<br />
                                {/* <b>Jacksonville, Florida</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2018
                            </Text> */}
                        </Card>

                        {/* jax 2 */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Jax2}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Reservist Annual Training
                            </Text>
                            <Text className='gallery-text'>
                                NAS Jax<br />
                                {/* <b>Jacksonville, Florida</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2018
                            </Text> */}
                        </Card>

                        {/* promotion 2nd class */}
                        <Card className='galleryimgcard'>
                            <Image
                                className='galleryimg'
                                boxSize='200px'
                                objectFit='cover'
                                src={Promotion2}
                                alt='Chris Drummond' />
                            <Text className='gallery-name'>
                                Second Class Promotion
                            </Text>
                            <Text className='gallery-text'>
                                Navy Reserve Center<br />
                                {/* <b>Orlando, Florida</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2015
                            </Text> */}
                        </Card>

                        {/* a school */}
                        <Card className='galleryimgcard'>
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
                                {/* <b>Chicago, Illinois</b> */}
                            </Text>
                            <Divider />
                            {/* <Text className='gallery-year'>
                                2012
                            </Text> */}
                        </Card >

                    </Stack >
                </CardBody>
            </Card>

        </div >
    )
}

export default Gallery
