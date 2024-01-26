import React from 'react';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTopBtn = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 200) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <FaArrowCircleUp size={'2.5em'} onClick={scrollToTop} className="backtotop-btn"
                style={{ display: visible ? 'inline' : 'none' }} />
        </div>
    );
}

export default BackToTopBtn;
