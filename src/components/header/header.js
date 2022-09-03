import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './header.css';

const Header = () => {

    // To show the header after scrolling
    useEffect(() => {
        let scrollYOffset = 200;
        let ele = document.getElementsByClassName('header')[0];
        const updateScroll = () => {
            if (scrollYOffset <  window.pageYOffset) {
                ele.classList.add('down');
            } else {
                ele.classList.remove('down');
            }
        }
        window.addEventListener("scroll", updateScroll);
    },[]);

    // Scroll to top of the page
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='header shadow-lg'>
            <div className='row h-100 p-3'>
                <div className='col-md-2'>
                    <div className='brand' onClick={() => scrollToTop()}>
                        <span className='logo1'>PR</span><span className='logo2'>.dev</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="navigation">   
                        <ul>
                        <li><a href="#about"><span>About</span></a></li>
                        <li><a href="#skills"><span>Skills</span></a></li>
                        <li><a href="#experience"><span>Experience</span></a></li>
                        <li><a href="#contact"><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='follow'>
                        <a className='col mx-md-4 linkedIn' href="https://linkedin.com/in/prasana-r-1b9bb8b5" target="_blank"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                        <a className='col mx-md-4 instagram' href="https://www.instagram.com/prasana_ravi29/" target="_blank"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                        <a className='col mx-md-4 hackerrank' href="https://www.hackerrank.com/prasanacoolhear1?hr_r=1" target="_blank"><FontAwesomeIcon className='icon' icon={faHackerrank} /></a>
                        <a className='col mx-md-4 github' href="https://github.com/prasanaravichandran" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;