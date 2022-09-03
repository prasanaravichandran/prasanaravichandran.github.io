import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer , faCloud, faArrowsSpin, faChartLine} from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import useOnScreen from '../../utils/onScreen';
import './skills.css';


const Skills = () => {

    const titleControls = useAnimation();
    const contentControls = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);

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
        <section id="skills" className="skills">
            <div className="row">
                <div className='col-md-4'>
                    <div className='display-1 title'>
                        <motion.div

                            ref={rootRef}
                            initial={{ opacity: 0, x: -100 }}
                            animate={titleControls}
                        >
                            Skills
                            </motion.div></div>
                    
                </div>
                <div className='col-md-4'>
                    <div className='card skills-card mt-5'>
                        <div className='card-title'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </div>
                            <div className='head'>
                                FRONT END DEVELOPMENT
                            </div>
                        </div>
                        <div className='card-body'>
                            {/* Design and built Responsive web pages for an optimal user experience that are fast, easy to use and implemented with best practices to achieve business goals. */}
                            UI Design, User Experience, Fast, Reliable, Responsive, Router
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className='card skills-card mt-5'>
                        <div className='card-title'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faServer}/>
                            </div>
                            <div className='head'>
                                BACK END DEVELOPMENT
                            </div>
                        </div>
                        <div className='card-body'>
                            <div>
                                High Availability, Security, Data modeling, Handling Session, Database connectivity
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row second-row">
                <div className='col-md-4'>
                    <div className='card skills-card mt-5'>
                        <div className='card-title'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faArrowsSpin} />
                            </div>
                            <div className='head'>
                                SOFTWARE DEVELOPMENT
                            </div>
                        </div>
                        <div className='card-body'>
                            Architectural design, Security, Cost Analysis, Data modeling
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card skills-card mt-5'>
                        <div className='card-title'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faChartLine} />
                            </div>
                            <div className='head'>
                                DEVELOPMENT OPERATIONS
                            </div>
                        </div>
                        <div className='card-body'>
                            Scalability, Availability, Streamline deployment with pipeline, Low Maintainence, Handling Load
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card skills-card mt-5'>
                        <div className='card-title'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faCloud} />
                            </div>
                            <div className='head'>
                                CLOUD TECHNOLOGY
                            </div>
                        </div>
                        <div className='card-body'>
                            Architectural design, Choosing services for Business needs, Security, Private clouds
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Skills;