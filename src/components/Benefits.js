import React from 'react';
import Collapsible from 'react-collapsible';
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Benefits = () => {
    return (
        <div>

            <h2 className='pgheader'>Benefits</h2>

            <p className='benefits-p'>
                Benefits information goes here...

                <Collapsible trigger="Medical" className='collapsible'>
                    <p>
                        Enter medical benefits here...
                        <br />
                        Tricare for self and family, Medical/Dental, etc.
                    </p>
                </Collapsible>

                <Collapsible trigger="Education" className='collapsible'>
                    <p>
                        Enter education benefits here...
                        <br />
                        TA, GI, JST, Loan Repayment
                    </p>
                </Collapsible>

                <Collapsible trigger="Housing" className='collapsible'>
                    <p>
                        Enter housing benefits here...
                        <br />
                        VA loan, BAH, etc...
                    </p>
                </Collapsible>

                <Collapsible trigger="OJT" className='collapsible'>
                    <p>
                        Enter OJT benefits here...
                        <br />
                        OJT, Navy Cool, Certs through Dept. of Labor, etc...
                    </p>
                </Collapsible>

            </p>
        </div>
    )
}

export default Benefits