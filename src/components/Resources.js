import React from 'react';
import { Accordion, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import PRT from './doc/FutureSailor/PRT.pdf';
import BasicTraining from './doc/FutureSailor/BasicTrainingInfo.pdf';
import SailorsCreed from './doc/FutureSailor/SailorsCreed.pdf';
import FutureSailorStudyGuide from './doc/FutureSailor/FutureSailorStudyGuide.pdf';
import StartGuide from './doc/FutureSailor/StartGuide.pdf';

const Resources = () => {
    return (
        <div className='pgcard'>
            <p className='resources-pgheader'>Resources</p>
            <p className='pg-subheading'>
                Explore this resource library for documents, guides, and more information to help you make your decision and/or prepare for your life in the Navy.
            </p>

            <Accordion allowToggle className='card'>

                {/* Practice ASVAB */}
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
                        There are many different resources available to help you prepare for the ASVAB. We offer a practice Armed Services Vocational Aptitude Battery (<i>ASVAB</i>) at the <a className='link' target="_blank" rel="noreferrer" title='Visit our location.' href="http://maps.google.com/?q=18415 33rd Ave W. Ste. D, Lynnwood, WA 98037">Lynnwood Acquitision Station</a>.
                        We also have ASVAB practice books available to you to borrow to help you prepare. You may also be able to check out the ASVAB practice book online or at your local library, and even take the practice ASVAB online in the comfort of your own home.
                    </AccordionPanel>
                </AccordionItem>

                {/* Physical Fitness */}
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
                        In your first week of bootcamp, you will perform a Physical Readiness Test (<i>PRT</i>). The PRT consists of:
                        <br /><br />
                        <li>1.5 mile run</li>
                        <li>Curl-ups</li>
                        <li>Push-ups</li>
                        <br />
                        Being prepared for the PRT is essential to continue in bootcamp. Use this <a target='_blank' className='link' href={PRT}>PRT</a> document for more information to help you physically prepare for bootcamp.
                    </AccordionPanel>
                </AccordionItem>

                {/* Preparing for Bootcamp */}
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
                        Before bootcamp you should learn basic information about being a Sailor and about the U.S. Navy, including the following:
                        <br /><br />
                        <li>
                            <a target='_blank' className='link' href={SailorsCreed}>Sailor's Creed
                            </a>
                        </li>
                        <li>Navy Ranks & Recognition</li>
                        <li>Chain of Command</li>
                        <li>
                            <a target='_blank' className='link' href={PRT}>Physical Requirements</a>
                        </li>
                        <li>Phonetic Alphabet</li>
                        <li>11 General Orders</li>
                        <li>Navy Core Values</li>
                        <li>Blue Jacket Manual</li>
                        <br />
                        Use this <a target='_blank' className='link' href={FutureSailorStudyGuide}>Future Sailor Study Guide</a> to help you prepare for bootcamp.
                        <br /><br />
                        To learn about what to expect during bootcamp, requirements, what to bring, your pay, the physical requirements, and a checklist of what you need to learn before bootcamp, use this document on <a target='_blank' className='link' href={BasicTraining}>Basic Training</a>.
                        <br /><br />
                        You may also use the <a target='_blank' className='link' href={StartGuide}>START Guide</a> (<i>Standards, Transitions, Acknowledgement, Requirements, Training</i>), a comprehensive guide for Future Sailors for more in-depth information about the Navy and preparing for your new life as a Future Sailor.
                    </AccordionPanel>
                </AccordionItem>

                {/* Bootcamp Expectations  */}
                {/* <AccordionItem>
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
                </AccordionItem> */}

            </Accordion>

        </div>
    )
}

export default Resources