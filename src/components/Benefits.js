import React from 'react';
import { Accordion, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import EdForLife from './doc/Benefits/EdforLife.pdf';
import GI from './doc/Benefits/GIFAQ.pdf';
import ParentalLeave from './doc/Benefits/ParentalLeave.pdf';
import Childcare from './doc/Benefits/Childcare.pdf';

const Benefits = () => {
    return (
        <div>
            <p className='benefits-pgheader'>Benefits</p>
            <p className='pg-subheading'>
                Explore the various benefits that would become available to you by joining the United States Navy.
            </p>
            <Accordion allowToggle className='card'>

                {/* Medical */}
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

                {/* Education */}
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
                        Joining the Navy offers many opportunities to enhance your education.
                        Some of the education programs include: <br /><br />
                        <li>The United Services Military Apprenticeship Program (<i>USMAP</i>)</li>
                        <li>Tuition Assistance (<i>TA</i>)</li>
                        <li>Academic Credit for Navy Training and Work — Joint Service Transcript (<i>JST</i>)</li>
                        <li>Post 9/11 Forever GI Bill</li>
                        <li>College Entrance Testing Program</li>
                        <li>The Navy College Program</li>
                        <li>The College First Program</li>
                        <li>Loan Repayment</li>
                        {/* <li>Nuclear Propulsion Officer Candidate Program (<i>NUPOC</i>)</li>
                        <li> (<i></i>)</li> */}

                        <br />
                        View the <a target='_blank' className='link' href={EdForLife}>Education for Life</a> guide and the <a target='_blank' className='link' href={GI}>Forever GI Bill FAQ</a> sheet for more information on these programs.
                    </AccordionPanel>
                </AccordionItem>

                {/* OJT */}
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

                {/* Housing Allowance & VA Loan */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" className='title' flex='1' textAlign='left'>
                                Housing Allowance & VA Loan
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>
                        Enter housing benefits here...<br />
                        VA loan, BAH, etc...
                    </AccordionPanel>
                </AccordionItem>

                {/* Parental Leave & Childcare */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" className='title' flex='1' textAlign='left'>
                                Parental Leave & Childcare
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign='left'>

                        The Navy offers maternity convalescent leave, and the primary or secondary caregiver a non-chargeable leave period after the birth of a child. View the <a target='_blank' className='link' href={ParentalLeave}>Parental Leave FAQ</a> sheet for more information.
                        <br /><br />
                        Childcare through the Navy offers affordable parent fees based on total family income. For more information, view the  <a target='_blank' className='link' href={Childcare}>Childcare FAQ</a> sheet.
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>

        </div>
    )
}

export default Benefits