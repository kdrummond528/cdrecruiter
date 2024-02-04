import React from 'react';
import Collapsible from 'react-collapsible';
import { IoIosArrowDown } from "react-icons/io";

const Benefits = () => {
    return (
        <div>

            <p className='pgheader'>Benefits</p>

            <div className='body-div'>

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

            </div>
        </div>
    )
}

export default Benefits