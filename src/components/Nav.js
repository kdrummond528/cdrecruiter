import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/home" className='navlink'>
                        Home</Link>
                </li>

                <li>
                    <Link to="/about" className='navlink'>
                        About</Link>
                </li>

                <li>
                    <Link to="/contact" className='navlink'>
                        Contact</Link>
                </li>
            </ul>

            <Menu>
                <MenuButton className='menu-btn'>
                    <p className='navlink'>
                        Information<ChevronDownIcon />
                    </p>
                </MenuButton>

                <MenuList>

                    <MenuItem>
                        <Link to="/benefits" className='dropdown-navlink'>
                            Benefits</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/process" className='dropdown-navlink'>
                            Process of Enlisting</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/resources" className='dropdown-navlink'>Resources</Link>
                    </MenuItem>

                </MenuList>
            </Menu>
            {/* </li> */}

            {/* <li> */}
            <Menu>
                <MenuButton className='menu-btn'>
                    <p className='navlink'>
                        Learn More<ChevronDownIcon />
                    </p>
                </MenuButton>

                <MenuList>

                    <MenuItem>
                        <Link to="/survey" className='dropdown-navlink'>
                            Interest Survey</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/appt" className='dropdown-navlink'>
                            Schedule an Appointment</Link>
                    </MenuItem>

                </MenuList>
            </Menu>

            {/* </li> */}
            {/* </ul> */}

        </nav >
    )

}

export default Nav;
