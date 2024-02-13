import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Resources = () => {
    return (
        <div>

            <Tabs variant='enclosed' className='card'>
                <p className='pgheader'>Resources</p>

                <TabList>
                    <Tab>Practice ASVAB</Tab>
                    <Tab>Physical Fitness</Tab>
                    <Tab>Preparing for Bootcamp</Tab>
                    <Tab>Bootcamp Expectations</Tab>
                </TabList>

                <TabPanels>

                    <TabPanel>
                        <p>
                            Resources on practice asvab go here...
                        </p>
                    </TabPanel>

                    <TabPanel>
                        <p>
                            Resources and info about physical fitness before and after joining goes here...
                        </p>
                    </TabPanel>

                    <TabPanel>
                        <p>
                            Resources and info on Pre-bootcamp study guide goes here...
                        </p>
                    </TabPanel>

                    <TabPanel>
                        <p>
                            Resources and info on bootcamp expectations goes here...
                        </p>
                    </TabPanel>

                </TabPanels>
            </Tabs>

        </div>
    )
}

export default Resources