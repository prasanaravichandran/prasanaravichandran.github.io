import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../utils/onScreen';
import './technologies.css';

const Technologies = () => {

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
            opacity: 1,
            transition: {
            duration: 1.5,
            ease: "easeOut"
            }
        });
        }
    }, [onScreen, titleControls, contentControls]);

    return (
        <section id="technology" className="technology">
            <div className="row">
                <div className='col-md-4'>
                    <div className='display-1 title'>
                        <motion.div
                            ref={rootRef}
                            initial={{ opacity: 0, x: -100 }}
                            animate={titleControls}
                        >
                            Tools &amp; Tech
                        </motion.div>
                    </div>
                </div>
                <div className='col-md-8 techName'>
                    <motion.div
                        ref={rootRef}
                        initial={{ opacity: 0}}
                        animate={contentControls}
                    >
                        <ul className="cloud" aria-label="Webdev word cloud">
                            <li><a href="https://airflow.apache.org/" rel="noreferrer" target="_blank" data-weight="4">Airflow</a></li>
                            <li><a href="https://www.terraform.io/" rel="noreferrer" target="_blank" data-weight="1">Terraform</a></li>
                            <li><a href="https://azure.microsoft.com/en-in/" rel="noreferrer" target="_blank" data-weight="5">Azure</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/HTML" rel="noreferrer" target="_blank" data-weight="8">HTML</a></li>
                            <li><a href="https://www.python.org/" rel="noreferrer" target="_blank" data-weight="9">Python</a></li>
                            <li><a href="https://www.mulesoft.com/resources/api/what-is-an-api" rel="noreferrer" target="_blank" data-weight="4">API</a></li>
                            <li><a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank" data-weight="5">VScode</a></li>
                            <li><a href="https://git-scm.com/" rel="noreferrer" target="_blank" data-weight="6">Git</a></li>
                            <li><a href="https://restfulapi.net/" rel="noreferrer" target="_blank" data-weight="2">Rest</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noreferrer" target="_blank" data-weight="9">JavaScript</a></li>
                            <li><a href="https://cloud.google.com/apigee" rel="noreferrer" target="_blank" data-weight="3">Apigee</a></li>
                            <li><a href="https://reactjs.org/" rel="noreferrer" target="_blank" data-weight="7">ReactJS</a></li>
                            <li><a href="https://www.w3schools.com/css/" rel="noreferrer" target="_blank" data-weight="8">CSS</a></li>
                            <li><a href="https://nodejs.org/en/" rel="noreferrer" target="_blank" data-weight="7">NodeJS</a></li>
                            <li><a href="https://www.jenkins.io/" rel="noreferrer" target="_blank" data-weight="3">Jenkins</a></li>
                            <li><a href="https://about.gitlab.com/topics/ci-cd/" rel="noreferrer" target="_blank" data-weight="5">CI/CD</a></li>
                            <li><a href="https://www.w3schools.com/sql/" rel="noreferrer" target="_blank" data-weight="3">SQL</a></li>
                            <li><a href="https://www.mongodb.com/nosql-explained" rel="noreferrer" target="_blank" data-weight="5">NoSQL</a></li>
                            <li><a href="https://www.jetbrains.com/pycharm/" rel="noreferrer" target="_blank" data-weight="3">Pycharm</a></li>
                            <li><a href="https://aws.amazon.com/" rel="noreferrer" target="_blank" data-weight="9">AWS</a></li>
                            <li><a href="https://www.tutorialspoint.com/unix/shell_scripting.htm" rel="noreferrer" target="_blank" data-weight="3">Shell</a></li>
                            <li><a href="https://sass-lang.com/" rel="noreferrer" target="_blank" data-weight="3">SCSS</a></li>
                            <li><a href="https://www.w3schools.com/html/html_responsive.asp" rel="noreferrer" target="_blank" data-weight="5">Responsive</a></li>
                            <li><a href="https://graphql.org/" rel="noreferrer" target="_blank" data-weight="3">GraphQL</a></li>
                            <li><a href="https://www.docker.com/" rel="noreferrer" target="_blank" data-weight="8">Docker</a></li>
                            <li><a href="https://www.heroku.com/" rel="noreferrer" target="_blank" data-weight="3">Heroku</a></li>
                            <li><a href="https://regexr.com/" rel="noreferrer" target="_blank" data-weight="3">Regex</a></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;