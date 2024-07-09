import { motion } from 'framer-motion';
import React from 'react';
import './Home.css';
import {TypeAnimation} from "react-type-animation";
import { Link } from 'react-scroll';

function Home() {
    return (
        <motion.div initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 1}}>
            <div className="home-title">
            <h1>Demetrius Asir</h1>
                <TypeAnimation
                    sequence={[
                        2000,
                        'Final year BTech Student',
                        2000,
                        'Artificial Intelligence and Machine Learning',
                        2000,
                        'Frontend Developer',
                        2000,
                        'Cloud Lead @ Google DSC',
                        2000,
                        'Freelancer',
                        2000,
                        'SIH 23 Finalist',
                        2000,
                        'Toastmasters International Member',
                        1000,
                        'IEEE Member',
                        2000,
                    ]}
                    wrapper="h2"
                    className="subhead"
                    repeat={Infinity}
                />

            </div>
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 1}}
                    style={{marginTop: '100px'}}
                >
                    <Link to="hero" smooth={true}>
                        <button
                            className="home-button"
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#ffffff";
                                e.target.style.color = "#000000";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#ffffff";
                            }}
                        >
                            Chat &darr;
                        </button>
                    </Link>
                    <Link to="contact" smooth={true}>
                        <button
                            className="home-button2"
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#ffffff";
                                e.target.style.color = "#000000";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#ffffff";
                            }}
                        >
                            Lets Connect !
                        </button>
                    </Link>
                </motion.div>
        </motion.div>

    );
}

export default Home;
