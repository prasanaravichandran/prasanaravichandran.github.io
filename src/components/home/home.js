import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import homeBg from '../../asserts/about_bg.jpeg';
import homeBgMobile from '../../asserts/UQ7A5447-02-01.jpeg';
import useOnScreen from '../../utils/onScreen';
import './home.css';

const Home = () => {

    // For animation effect
    const nameAnim = useAnimation();
    const destAnim = useAnimation();
    const iconsAnim = useAnimation();
    const rootRef = useRef();
    // Check screen is on active for this section
    const onScreen = useOnScreen(rootRef);

    // To initiate the animation
    useEffect(() => {
        if (onScreen) {
            nameAnim.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            });
            destAnim.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.75,
                    ease: "easeOut"
                }
            });
            iconsAnim.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeOut"
                }
            });
        }
    }, [onScreen, nameAnim, destAnim, iconsAnim]);

    // Open dropdown in mobile view
    const openSectionDropDown = () => {
        document.getElementsByClassName('mobile-nav')[0].classList.add('active');
    }
    
    // Close dropdown in mobile view
    const closeSectionDropDown = () => {
        document.getElementsByClassName('mobile-nav')[0].classList.remove('active');
    }

    return (
        <section className="home">
            <div className="container-fluid">
                <div className='bg-image  img-responsive d-flex justify-content-center align-items-center'>
                    <picture>
                        <source media="(max-width: 768px)" srcset={homeBgMobile}/>
                        <img src={homeBg} alt=""/>
                    </picture>
                    <div className='logo'>
                        <div className='brand'>
                            <span className='logo1'>PR</span><span className='logo2'>.dev</span>
                        </div>
                        <div className="navigation">   
                            <ul>
                                <li><a href="#about"><span>About</span></a></li>
                                <span> , </span>
                                <li><a href="#skills"><span>Skills</span></a></li>
                                <span> , </span>
                                <li><a href="#experience"><span>Experience</span></a></li>
                                <span> , </span>
                                <li><a href="#contact"><span>Contact</span></a></li>
                            </ul>
                        </div>
                        <div className='hamburger float-right'>
                            <button onClick={openSectionDropDown} className="btn"><FontAwesomeIcon icon={faBars} className='icon'/></button>
                        </div>
                    </div>
                    <div className='intro'>
                        <div className='card'>
                            <div className='card-body text-start'>
                                <div className="greetings">
                                    Hello <span class="wave">&#128075;</span>
                                </div>
                                <motion.div
                                    ref={rootRef}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={nameAnim}
                                >
                                    <div className="name">
                                        I'm <span>Prasana.</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    ref={rootRef}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={destAnim}
                                >
                                    <div className="typewriter">
                                        <Typewriter
                                            options={{
                                                strings: ['Full Stack Developer', 'DevOps Engineer', 'Cloud Engineer'],
                                                autoStart: true,
                                                loop: true,
                                                cursorClassName: 'typewrite',
                                                delay: 1
                                            }}
                                        />    
                                    </div>
                                </motion.div>
                                <motion.div
                                    ref={rootRef}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={iconsAnim}
                                >
                                    <div className="row icons mt-5">
                                        <div className='col-12'>
                                            <a className='col mx-md-4 linkedIn' href="https://linkedin.com/in/prasana-r-1b9bb8b5" rel="noreferrer" target="_blank"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                            <a className='col mx-md-4 instagram' href="https://www.instagram.com/prasana_ravi29/" rel="noreferrer" target="_blank"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                                            <a className='col mx-md-4 hackerrank' href="https://www.hackerrank.com/prasanacoolhear1?hr_r=1" rel="noreferrer" target="_blank"><FontAwesomeIcon className='icon' icon={faHackerrank} /></a>
                                            <a className='col mx-md-4 github' href="https://github.com/prasanaravichandran" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-view'>
                <div className='mobile-nav'>
                    <button onClick={closeSectionDropDown} className="btn"><FontAwesomeIcon icon={faClose} className='icon'/></button>
                    <ul>
                        <li><a href="#about"><span>About</span></a></li>
                        <li><a href="#skills"><span>Skills</span></a></li>
                        <li><a href="#experience"><span>Experience</span></a></li>
                        <li><a href="#contact"><span>Contact</span></a></li>
                    </ul>
                </div>
            </div>
        </section>
        
    )
}

export default Home;