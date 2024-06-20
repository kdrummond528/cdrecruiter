import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <div>

            <footer>

                <div>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/nrslynnwood?igsh=MTJ1OTB4Z3RpZ3N5bw==' title='Check out our Instagram.'>
                        <div><SlSocialInstagram className='ig-icon' size={'1.7rem'} /></div>
                    </a>
                </div>

                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/cdrummond2/' title='Connect with me on LinkedIn.'>
                    <SlSocialLinkedin className='linkedin-icon' size={'1.9rem'} />
                </a>

                <p>
                    &copy; 2024 Christopher Drummond
                </p>

            </footer>

        </div>
    )
}

export default Footer;