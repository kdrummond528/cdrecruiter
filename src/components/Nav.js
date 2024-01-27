import React from 'react';
// import { FaLinkedinIn } from 'react-icons/fa';

const Nav = ({ showHome, showAbout, showContact, showProcess, active }) => {
    return (
        <div>

            <nav>
                <ul>
                    <li className='navlink'>
                        <p onClick={showHome} className={active === 0 ? 'navlink active' : 'navlink'} >
                            Home</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showAbout} className={active === 1 ? 'navlink active' : 'navlink'} >
                            About</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showContact} className={active === 2 ? 'navlink active' : 'navlink'}>
                            Contact</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showProcess} className={active === 2 ? 'navlink active' : 'navlink'}>
                            Process of Enlisting</p>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Nav;