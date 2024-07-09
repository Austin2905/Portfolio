import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'boxicons/css/boxicons.min.css';
import './Header.css';
import prof from './images/port.jpg';
import {motion} from "framer-motion";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}>
        <div className={`App ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="logo-details">
                    <img src={prof} alt="Profile" />
                    <div className="logo_name">Demetrius</div>
                    <i className='bx bx-menu' id="btn" onClick={toggleSidebar}></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to="home" spy={true} smooth={true} duration={1000} onClick={closeSidebar}>
                            <i className='bx bx-home'></i>
                            <span className="links_name">Home</span>
                        </Link>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <Link to="hero" spy={true} smooth={true} duration={1000} onClick={closeSidebar}>
                            <i className='bx bx-user'></i>
                            <span className="links_name">About</span>
                        </Link>
                        <span className="tooltip">About</span>
                    </li>
                    <li>
                        <Link to="works" spy={true} smooth={true} duration={1000} onClick={closeSidebar}>
                            <i className='bx bx-briefcase'></i>
                            <span className="links_name">Works</span>
                        </Link>
                        <span className="tooltip">Works</span>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} duration={1000} onClick={closeSidebar}>
                            <i className='bx bx-brain'></i>
                            <span className="links_name">Skills</span>
                        </Link>
                        <span className="tooltip">Skills</span>
                    </li>
                    <li>
                        <Link to="timeline" spy={true} smooth={true} duration={1000} onClick={closeSidebar}>
                            <i className='bx bx-time-five'></i>
                            <span className="links_name">Timeline</span>
                        </Link>
                        <span className="tooltip">Timeline</span>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} duration={1000} onClick={closeSidebar}>
                            <i className='bx bx-envelope'></i>
                            <span className="links_name">Contact</span>
                        </Link>
                        <span className="tooltip">Contact</span>
                    </li>
                    <li>
                        <a href="/Demetrius_Resume.pdf" target="_blank" rel="noopener noreferrer"
                           onClick={closeSidebar}>
                            <i className='bx bx-file'></i>
                            <span className="links_name">Resume</span>
                            <span className="tooltip">Resume</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </motion.div>
    );
};

export default App;
