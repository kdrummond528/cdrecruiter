import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, IconButton } from '@chakra-ui/react';
// import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { RxHamburgerMenu } from "react-icons/rx";


const SideNav = () => {
    return (
        <div>
            <Menu>

                <MenuButton className='menu-btn'
                    as={IconButton}
                    aria-label='Options'
                    icon={<RxHamburgerMenu size={'2rem'} />}
                    variant='outline #022a3a'
                />

                <MenuList>

                    <MenuItem>
                        <Link to="/home" className='navlink'>
                            Home</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/about" className='navlink'>
                            About</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/contact" className='navlink'>
                            Contact</Link>
                    </MenuItem>

                    <MenuDivider></MenuDivider>

                    <MenuGroup color={'black'} title='Information'>

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
                    </MenuGroup>

                    <MenuDivider></MenuDivider>

                    <MenuGroup color={'black'} title='Learn More'>

                        <MenuItem>
                            <Link to="/survey" className='navlink'>
                                Interest Survey</Link>
                        </MenuItem>

                        <MenuItem>
                            <Link to="/appt" className='navlink'>
                                Schedule an Appointment</Link>
                        </MenuItem>

                    </MenuGroup>
                </MenuList>
            </Menu >
        </div >
    )
}

export default SideNav;
