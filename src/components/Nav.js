import React from 'react';

const Nav = ({ showHome, showAbout, showBenefits, showContact, showProcess, showResources, showBlog, showSurvey, active }) => {
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
                        <p onClick={showBenefits} className={active === 2 ? 'navlink active' : 'navlink'}>
                            Benefits</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showProcess} className={active === 3 ? 'navlink active' : 'navlink'}>
                            Process of Enlisting</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showResources} className={active === 4 ? 'navlink active' : 'navlink'}>
                            Resources</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showBlog} className={active === 5 ? 'navlink active' : 'navlink'}>
                            Blog</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showContact} className={active === 6 ? 'navlink active' : 'navlink'}>
                            Contact</p>
                    </li>

                    <li className='navlink'>
                        <p onClick={showSurvey} className={active === 7 ? 'navlink active' : 'navlink'}>
                            Interest Survey</p>
                    </li>


                </ul>
            </nav>

        </div>
    )
}

export default Nav;