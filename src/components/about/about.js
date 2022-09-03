import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faPeopleArrows, faLightbulb, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import useOnScreen from '../../utils/onScreen';
import './about.css';

const About = () => {
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
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            });
            contentControls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            });
        }
    }, [onScreen, titleControls, contentControls]);
    
    return (
        <section id="about" className="about">
            <div className="container aboutCard">
                <div className="row contentCard">
                    <div className='col-md-4'>
                        <div className='row title'>
                            <div className='row display-1'>
                            <motion.div
                                ref={rootRef}
                                initial={{ opacity: 0, x: -100 }}
                                animate={titleControls}
                            >
                                <span className='aboutText'>Aboutt</span></motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 px-2 aboutContent">
                    <motion.div
                        ref={rootRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={contentControls}
                    >
                        I'm a Full Stack/Software Developer and a Data enthusiast with voracious appetite for new technologies and proven exemplary performance in AWS, Python, SQL/NoSQL, Node JS, React JS and Devops.</motion.div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-md-3 col-sm-3 col-lg-3 mt-5'>
                    <div className='row display-1'>
                        <div className='col-12'><FontAwesomeIcon icon={faPeopleArrows} /></div>
                    </div>
                    <div className='row mt-5 text-center'>
                        <div className='col-12'>Communication</div>
                    </div>
                </div>
                <div className='col-12 col-md-3 col-sm-3 col-lg-3 mt-5'>
                    <div className='row display-1'>
                        <div className='col-12'><FontAwesomeIcon icon={faLightbulb} /></div>
                    </div>
                    <div className='row mt-5 text-center'>
                        <div className='col-12'>Critical Thinking</div>
                    </div>
                </div>
                <div className='col-12 col-md-3 col-sm-3 col-lg-3 mt-5'>
                    <div className='row display-1'>
                        <div className='col-12'><FontAwesomeIcon icon={faGears} /></div>
                    </div>
                    <div className='row mt-5 text-center'>
                        <div className='col-12'>Problem Solving</div>
                    </div>
                </div>
                <div className='col-12 col-md-3 col-sm-3 col-lg-3 mt-5'>
                    <div className='row display-1'>
                        <div className='col-12'><FontAwesomeIcon className="fa-rotate-270" icon={faShuffle} /></div>
                    </div>
                    <div className='row mt-5 text-center'>
                        <div className='col-12'>Flexibility</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;