import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
    const [selectedTimeline, setSelectedTimeline] = useState('professional');

    const professionalTimeline = [
        {
            role: 'Artificial Intelligence Intern',
            company: 'Karnataka Hybrid Micro Devices Ltd',
            description: 'Developed a practical application for an Object Detection Model using Detectron2 along with Resnet-50 as the backbone to detect defects in TFR Circuits.',
            date: '06/2024 - Present',
        },
        {
            role: 'Deep Learning Intern',
            company: 'RGB.AI',
            description: 'Created an Object Detection Model for identifying animal trap images using vision transformer and MAMBA Vision.',
            date: '01/2024 - 03/2024',
        },
        {
            role: 'Customized Chatbot Creator',
            company: 'Smart India Hackathon Finale',
            description: 'Built an AI-powered Smart Mental Health Web application for dealing Mental Health among Students.',
            date: '18/12/2023',
        },
        {
            role: 'Artificial Intelligence Intern',
            company: 'CodeClause',
            description: 'Completed developing two projects: Handwritten Digit Recognition and a Plagiarism Checker using image processing, deep learning, and natural language processing.',
            date: '08/2023 - 09/2023',
        },
        {
            role: 'Cloud Lead',
            company: 'Google Developer Student Club-SJCE',
            date: '08/2023 - present',
        },
        {
            role: 'Web Development Intern',
            company: 'Little England Bakery Cafe',
            description: 'Designed and developed the front-end website for Little England Bakery, using HTML, CSS, and JavaScript.',
            date: '07/2023 - 08/2023',
        },
        {
            role: 'Machine Learning Intern',
            company: 'Karnataka Hybrid Micro Devices Ltd.',
            description: 'Completed developing a Machine Learning Model to classify defective circuits from non-defective ones and created a web application using Flask for handling the classification task in a user-friendly manner.',
            date: '05/2023 - 06/2023',
        },
    ];

    const academicTimeline = [
        {
            degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning',
            institution: 'Anna University, TamilNadu, India',
            date: '2021 - Present',
        },
        {
            degree: 'CLASS XII (Central Board of Secondary Education)',
            institution: 'Asian Christian High School, TamilNadu, India',
            subjects: 'Maths, Physics, Chemistry, Computer Science',
            date: '2021',
        },
        {
            degree: 'CLASS X (Central Board of Secondary Education)',
            institution: 'The Titan School, TamilNadu, India',
            date: '2019',
        },
    ];

    const renderTimelineItems = (items) => {
        return items.map((item, index) => (
            <motion.div key={index} className="timeline-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="timeline-icon">
                    {selectedTimeline === 'professional' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                <div className="timeline-content">
                    <h3>{item.role || item.degree}</h3>
                    <h4>{item.company || item.institution}</h4>
                    <p>{item.description || item.subjects}</p>
                    <span>{item.date}</span>
                </div>
            </motion.div>
        ));
    };

    return (
        <div className="timeline-container">
            <h1>My Professional and Academic Journey</h1>
            <div className="timeline-buttons">
                <button
                    className={`timeline-button ${selectedTimeline === 'professional' ? 'active' : ''}`}
                    onClick={() => setSelectedTimeline('professional')}
                >
                    <FaBriefcase /> Professional
                </button>
                <button
                    className={`timeline-button ${selectedTimeline === 'academic' ? 'active' : ''}`}
                    onClick={() => setSelectedTimeline('academic')}
                >
                    <FaGraduationCap /> Academic
                </button>
            </div>
            <div className="timeline-content-container">
                {selectedTimeline === 'professional' ? renderTimelineItems(professionalTimeline) : renderTimelineItems(academicTimeline)}
            </div>
        </div>
    );
};

export default Timeline;
