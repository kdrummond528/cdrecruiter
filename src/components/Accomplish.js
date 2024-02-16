import React from 'react';
import { Card, CardHeader, CardFooter, Button, Heading, Stack, StackDivider, Box, Text, CardBody, SimpleGrid } from '@chakra-ui/react';


const Accomplish = () => {
    return (
        <div>
            <Card className='accomp-card'>
                <p className='pgheader'>
                    My Accomplishments as a Sailor
                </p>
                <p className='text'>The Navy offers multitunidous opportunities for on-the-job training, including certifications through thr Department of Labor. Here are a few of which I've obtained throughtout the years which will multiply career opportunities upon transitioning to the Civilian workforce.
                </p>

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className='accomp-grid'>

                    <Card>
                        <CardHeader>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Qualifications
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text pt='2' fontSize='sm' className='left-text'>
                                Detail your quals...<br />
                                <li>Work Center Supervisor</li>
                                <li>3MA</li>
                                <li>Fire Marshall</li>
                            </Text>
                        </CardBody>
                        {/* <CardFooter>
                            <Button>View here</Button>
                        </CardFooter> */}
                    </Card>

                    <Card>
                        <CardHeader>
                            <Text size='xs' textTransform='uppercase'
                                className='title'>
                                Certifications
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text pt='2' fontSize='sm' className='left-text'>
                                Detail your quals...<br />
                                <li>Work Center Supervisor</li>
                                <li>3MA</li>
                                <li>Fire Marshall</li>
                            </Text>
                        </CardBody>
                        {/* <CardFooter>
                            <Button>View here</Button>
                        </CardFooter> */}
                    </Card>

                    <Card>
                        <CardHeader>
                            <Text textTransform='uppercase' className='title'>Awards
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text pt='2' fontSize='sm' className='left-text'>
                                Detail your awards...<br />
                                <b>SOQ</b> (<i>Sailor of the Quarter</i>)
                                <li>(month/year), (month/year).</li>
                                <b>NAM</b> (<i>Navy and Marine Achievement Medal</i>)
                                <li>(month/year), (month/year).</li>
                            </Text>
                        </CardBody>
                        {/* <CardFooter>
                            <Button>View here</Button>
                        </CardFooter> */}
                    </Card>

                </SimpleGrid>
            </Card>
        </div>
    )
}

export default Accomplish
