import React from 'react';
import Collapsible from 'react-collapsible';
import { IoIosArrowDown } from "react-icons/io";
import { Accordion, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const Benefits = () => {
    return (
        <div>
            <p className='benefits-pgheader'>Benefits</p>
            <p>Explore the various benefits available to you by joining the Navy.</p>
            <Accordion defaultIndex={[0]} allowMultiple className='card'>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" className='title' flex='1' textAlign='left'>
                                Medical
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                        Enter medical benefits here...<br />
                        Tricare for self and family, Medical/Dental, etc.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" className='title' flex='1' textAlign='left'>
                                Education
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                        Enter education benefits here...<br />
                        TA, GI, JST, Loan Repayment
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" className='title' flex='1' textAlign='left'>
                                On-The-Job Training
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                        Enter OJT benefits here...<br />
                        OJT, Navy Cool, Certs through Dept. of Labor, etc...
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" className='title' flex='1' textAlign='left'>
                                Housing
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                        Enter housing benefits here...<br />
                        VA loan, BAH, etc...
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>

            {/* <div className='benefits-body-div'>

                <Collapsible trigger={["Medical", <IoIosArrowDown class="arrow" />]} className='collapsible'>
                    <p>
                        Enter medical benefits here...
                        <br />
                        Tricare for self and family, Medical/Dental, etc.
                    </p>
                </Collapsible>

                <Collapsible trigger={["Education", <IoIosArrowDown class="arrow" />]} className='collapsible'>
                    <p>
                        Enter education benefits here...
                        <br />
                        TA, GI, JST, Loan Repayment
                    </p>
                </Collapsible>

                <Collapsible trigger={["Housing", <IoIosArrowDown class="arrow" />]} className='collapsible'>
                    <p>
                        Enter housing benefits here...
                        <br />
                        VA loan, BAH, etc...
                    </p>
                </Collapsible>

                <Collapsible trigger={["OJT", <IoIosArrowDown class="arrow" />]} className='collapsible'>
                    <p>
                        Enter OJT benefits here...
                        <br />
                        OJT, Navy Cool, Certs through Dept. of Labor, etc...
                    </p>
                </Collapsible>

            </div> */}

        </div>
    )
}

export default Benefits