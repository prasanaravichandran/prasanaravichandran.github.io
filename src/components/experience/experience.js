import React, { useEffect, useRef} from 'react';
import { motion, useAnimation } from 'framer-motion';
import useOnScreen from '../../utils/onScreen';
import './experience.css';

const Experience = () => {
    // For animation effect
    const experienceTitle = useAnimation();
    const rootRef = useRef();
    // Check screen is on active for this section
    const onScreen = useOnScreen(rootRef);

    // To initiate the animation
    useEffect(() => {
        if (onScreen) {
            experienceTitle.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            });
        }
    }, [onScreen, experienceTitle]);

    // To set the active class for the element
    const setActive = (el, id) => {
        let removeActiveEle = document.getElementsByClassName('list-group-item');
        Array.from(removeActiveEle).forEach((sib) => {
            sib.classList.remove('active');
        });
        el.target.classList.add('active');
        document.getElementById(id).scrollIntoView({behavior: 'smooth', block: "nearest", inline: "nearest"});
    }

    return (
        <section id="experience" className='experience'>
            <div className='row'>
                <div className='col-md-4 mb-md-2 mb-5 mb-sm-5'>
                    <motion.div
                        ref={rootRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={experienceTitle}
                    >
                        <div className='row'>
                            <div className='title display-3'>Experience</div>
                        </div>
                        <div className='row mt-5 mt-sm-5 mt-md-3 px-md-4 px-sm-0 px-0'>
                            <div className='company-list'>
                                <ul className="list-group d-flex flex-sm-row flex-row flex-md-column">
                                    <li className="list-group-item active text-center text-sm-center text-md-end" aria-current="true" onClick={(event) => setActive(event, 'lv')}>LatentView Analytics</li>
                                    <li className="list-group-item text-sm-center text-md-end" onClick={(event) => setActive(event, 'exeter')}>Exeter Premedia Services</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='col-md-8 pt-2 cmpy-desc'>
                    <div id="lv">
                        <div className='row'>
                            <div className='cmpy-name display-6'><a href='https://www.latentview.com/' rel="noreferrer" target="_blank">LatentView Analytics</a></div>
                            <div className='cmpy-duration mt-2'>Aug 2019 - Present</div>
                        </div>
                        <div className='row mt-3'>
                            <div className='designation'><ul><li><b>SENIOR ANALYST</b></li></ul></div>
                            <div className='desig-duration'>Apr 2021 - Present</div>
                        </div>
                        <div className='row mt-3'>
                        <ul>
                                <li>Recognized by Client that made an impact on Team's Growth and LV's Revenue.</li>
                                <li>Designed and Built CI/CD Architecture in the AWS from Github.</li>
                                <li>Managed a team for CI/CD process.</li>
                                <li>Attending Client Meetings and understanding their requirements using Agile Methodology.</li>
                                <li>Building dashboards for LV's Internal project using Angular/React and NodeJS/Python.</li>
                            </ul>
                        </div>
                        <hr/>
                        <div className='row mt-3'>
                            <div className='designation'><ul><li><b>ANALYST</b></li></ul></div>
                            <div className='desig-duration'>Aug 2019 - Mar 2021</div>
                        </div>
                        <div className='row mt-3'>
                        <ul>
                                <li>Got Handful of experience in AWS and Azure Cloud Technologies.</li>
                                <li>Analyzing the Cost of the service and efficiently make using of it.</li>
                                <li>Got <b>"SPOT AWARD"</b> for Team Work.</li>
                                <li>Developed and deployed APIs using Python in Cloud Technology and testing the endpoints.</li>
                                <li>APIGEE Endpoint Migration for APIs.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="exeter" className='mt-5'>
                        <div className='row'>
                            <div className='cmpy-name display-6'><a href='https://www.exeterpremedia.com/' rel="noreferrer" target="_blank">Exeter Premedia Services</a></div>
                            <div className='cmpy-duration mt-2'>Feb 2018 - Jul 2019</div>
                        </div>
                        <div className='row mt-3'>
                            <div className='designation'><ul><li><b>SOFTWARE DEVELOPER</b></li></ul></div>
                            <div className='desig-duration'>Jun 2018 - Jul 2019</div>
                        </div>
                        <div className='row mt-3'>
                            <ul>
                                <li>Got a handful of experience in NodeJS.</li>
                                <li>Developed the dashboard of company's product using HTML, Bootstrap CSS, JavaScript, Jquery.</li>
                                <li>Integrated Responsive Charts (<b>Highcharts</b>) for Data visualization using JavaScript.</li>
                                <li>Developed backend and APIs in NodeJS(Express.js) to fetch the data from Elasticsearch DB.</li>
                            </ul>
                        </div>
                        <div className='row mt-3'>
                            <div className='designation'><ul><li><b>INTERN</b></li></ul></div>
                            <div className='desig-duration'>Feb 2018 - May 2018</div>
                        </div>
                        <div className='row mt-3'>
                            <ul>
                                <li>Built a small User Management Application.</li>
                                <li>Built Front and Back End for user login using HTML, CSS, JS and Node.js.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;