import React from 'react';
// import { FaLinkedinIn } from 'react-icons/fa';

const Nav = ({ showHome, showAbout, showContact, active }) => {
    return (
        <div>

            <nav align='right'>
                <ul>
                    <li className='navlink'>
                        <p onClick={showHome} className={active === 0 ? 'navlink active' : 'navlink'} >
                            home</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showAbout} className={active === 1 ? 'navlink active' : 'navlink'} >
                            about</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showContact} className={active === 2 ? 'navlink active' : 'navlink'}>
                            contact</p>
                    </li>

                    {/* <li className='navlink'>
                        <a href="https://www.linkedin.com/in/karinadrummond" target={'_blank'} rel="noreferrer" title="Connect with me on LinkedIn" className='naviconlink'>
                            <FaLinkedinIn className='navicon' size={"2em"} />
                        </a>
                    </li> */}

                </ul>
            </nav>

        </div>
    )
}

export default Nav;