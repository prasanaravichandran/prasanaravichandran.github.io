import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHackerrank, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion, useAnimation } from 'framer-motion';
import useOnScreen from '../../utils/onScreen';
import './contact.css';

const Contact = () => {
    // For animation effect
    const titleControls = useAnimation();
    const contentControls = useAnimation();
    const rootRef = useRef();
    // Check screen is on active for this section
    const onScreen = useOnScreen(rootRef);

    // To initiate the animation
    useEffect(() => {
        if (onScreen) {
            titleControls.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeOut"
                }
            });
            contentControls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1.5,
                    ease: "easeOut"
                }
            });
        }
    }, [onScreen, titleControls, contentControls]);

    return(
        <section id="contact" className="contact">
            <motion.div
                ref={rootRef}
                initial={{ opacity: 0, y: -100 }}
                animate={titleControls}
            >
                <div className="row">
                    <div className='title display-1'>Catch Me On</div>
                </div>
                <div className="row icons">
                    <div className='col-12'>
                        <a className='col linkedIn' href="https://linkedin.com/in/prasana-r-1b9bb8b5" rel="noreferrer" target="_blank"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                        <a className='col instagram' href="https://www.instagram.com/prasana_ravi29/" rel="noreferrer" target="_blank"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                        <a className='col hackerrank' href="https://www.hackerrank.com/prasanacoolhear1?hr_r=1" rel="noreferrer" target="_blank"><FontAwesomeIcon className='icon' icon={faHackerrank} /></a>
                        <a className='col github' href="https://github.com/prasanaravichandran" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                    </div>
                </div>
                <div className='mail'>
                    <div className="row">
                        <div className='col-12'>
                            Say Hello on <span className='mailId'><a href="mailto:prasana.2908@gmail.com">prasana.2908@gmail.com</a></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact;