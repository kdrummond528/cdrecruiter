import React from 'react';
// import Collapsible from 'react-collapsible';
// import { IoIosArrowDown } from "react-icons/io";

const Process = () => {
    return (
        <div>

            <p className='process-pgheader'>Process of Enlisting</p>

            <div className='body-div'>

                <p className='body'>
                    <p className='body-label'>The First Steps</p>
                    After discussing your background, interests, as well as the opportunities and benefits that would be available to you, the next step would be to take a practice Armed Services Vocational Aptitude Battery (<i>ASVAB</i>).  Following this, we would conduct a screening interview collecting more background and personal information, and then schedule you for the ASVAB and medical evaluation at the nearest <a href="https://www.google.com/maps/place/Seattle+MEPS/@47.5583621,-122.342933,17z/data=!3m1!4b1!4m6!3m5!1s0x549041b7a4bae249:0x8e4ed5e3d10e6dc9!8m2!3d47.5583621!4d-122.3403581!16s%2Fg%2F11b75l4rgc?entry=ttu">Military Entrance Processing Station</a> (<i>MEPS</i>) located in Seattle, Washington.
                </p>

                <p className='body'>
                    <p className='body-label'>What to expect at MEPS</p>
                    When you arrive at MEPS the first step is the aptitude testing. The ASVAB, which takes on average 3.5 hours to complete. The second step will consist of a medical and physical evaluation. After completing all necessary evaluations, the third step will be speaking with a counselor for job selection. The fourth step consists of an in-depth background screening. The final step is the oath of enlistment.

                    {/* <br /><br />
                    For more information regarding the MEPS process, view this handout.
                    <br />
                    Additionally, you may also view this video detailing the process, <a href='https://www.mepcom.army.mil/Home/Applicants-and-Parents/Going-to-the-MEPS/'>A Day at the MEPS</a>. */}
                </p>

                {/* <Collapsible trigger={["Enlisted Jobs", <IoIosArrowDown class="arrow" />]} className='collapsible'>
                    <p>
                        Enter enlisted job rates and info...
                        Download the <a target='_blank' href='https://www.cool.osd.mil/usn/resources_and_links/index.html?MobileApp'>Navy COOL Mobile Application</a> to view more information on enlisted job rates, <a target='_blank' href='https://www.cool.osd.mil/usn/resources_and_links/index.html?RatingInfoCards'>here's how</a>.

                    </p>
                </Collapsible> */}

            </div>

        </div>
    )
}

export default Process