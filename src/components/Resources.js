import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Accordion, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const Resources = () => {
    return (
        <div>
            <p className='resources-pgheader'>Resources</p>

            <Accordion allowToggle className='card'
                marginBottom={'20%'}>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'
                                className='title'>
                                Practice ASVAB
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign={'left'}>
                        Resources on practice asvab go here...
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'
                                className='title'>
                                Physical Fitness
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign={'left'}>
                        Resources and info about physical fitness before and after joining goes here...
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'
                                className='title'>
                                Preparing for Bootcamp
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign={'left'}>
                        Resources and info on Pre-bootcamp study guide goes here...
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'
                                className='title'>
                                Bootcamp Expectations
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign={'left'}>
                        Resources and info on bootcamp expectations goes here...
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>

        </div>
    )
}

export default Resources