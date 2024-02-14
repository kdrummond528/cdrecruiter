import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
    return (
        <div>

            <footer>

                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/cdrummond2/' title='Connect with me on LinkedIn.'>
                    <SlSocialLinkedin className='footer-icon' size={'1.7rem'} />
                </a>

                <p>
                    &copy; 2024 Christopher Drummond
                </p>

            </footer>

        </div>
    )
}

export default Footer;