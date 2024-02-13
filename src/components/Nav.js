import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Nav = () => {
    return (
        <nav className='nav'>

            <Menu>
                <MenuButton as={Button} className='navbutton'
                    rightIcon={<ChevronDownIcon />}>Information
                </MenuButton>

                <MenuList>

                    <MenuItem>
                        <Link to="/benefits" className='navlink'>
                            Benefits</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/process" className='navlink'>
                            Process of Enlisting</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/resources" className='navlink'>Resources</Link>
                    </MenuItem>

                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button}
                    rightIcon={<ChevronDownIcon />}>Learn More
                </MenuButton>

                <MenuList>

                    <MenuItem>
                        <Link to="/survey" className='navlink'>
                            Interest Survey</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/appt" className='navlink'>
                            Schedule an Appointment</Link>
                    </MenuItem>

                </MenuList>
            </Menu>

            <ul>
                <li>
                    <Link to="/home" className='navlink'>Home</Link>
                </li>

                <li>
                    <Link to="/about" className='navlink'>About</Link>
                </li>

                {/* <li>
                    <Link to="/info" className='navlink'>Info</Link>
                </li> */}

                {/* <li>
                    <Link to="/resources" className='navlink'>Resources</Link>
                </li> */}

                <li>
                    <Link to="/contact" className='navlink'>Contact</Link>
                </li>

                {/* <li>
                    <Link to="/survey" className='navlink'>Interest Survey</Link>
                </li> */}

                {/* <li>
                    <Link to="/appt" className='navlink'>Schedule an Appointment</Link>
                </li> */}

                {/* <li>
                    <Link to="/blog" className='navlink'>Blog</Link>
                </li> */}
            </ul>
        </nav>
    )

}

export default Nav;


// const Nav = ({ showHome, showAbout, showBenefits, showContact, showProcess, showResources, showBlog, showSurvey, showAppt, active }) => {
//     return (
//         <div>

//             <nav>
//                 <ul>
//                     <li className='navlink'>
//                         <p onClick={showHome} className={active === 0 ? 'navlink active' : 'navlink'} >
//                             Home</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showAbout} className={active === 1 ? 'navlink active' : 'navlink'} >
//                             About</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showBenefits} className={active === 2 ? 'navlink active' : 'navlink'}>
//                             Benefits</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showProcess} className={active === 3 ? 'navlink active' : 'navlink'}>
//                             Process of Enlisting</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showResources} className={active === 4 ? 'navlink active' : 'navlink'}>
//                             Resources</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showBlog} className={active === 5 ? 'navlink active' : 'navlink'}>
//                             Blog</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showContact} className={active === 6 ? 'navlink active' : 'navlink'}>
//                             Contact</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showSurvey} className={active === 7 ? 'navlink active' : 'navlink'}>
//                             Interest Survey</p>
//                     </li>

//                     <li className='navlink'>
//                         <p onClick={showAppt} className={active === 8 ? 'navlink active' : 'navlink'}>
//                             Schedule an Appointment</p>
//                     </li>


//                 </ul>
//             </nav>

//         </div>
//     )
// }

// export default Nav;