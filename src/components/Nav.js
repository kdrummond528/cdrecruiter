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

                    <Menu>
                        <MenuButton className='navbutton'>
                            Information<ChevronDownIcon />
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
                        <MenuButton
                            rightIcon={<ChevronDownIcon />}>
                                Learn More<ChevronDownIcon />
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

                </li>
            </ul>

        </nav>
    )

}

export default Nav;
