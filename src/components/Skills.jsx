import React, { useState } from 'react';
import './Skills.css';

const skills = {
    "AI & ML": {
        "Computer Vision": 92,
        "Natural Language Processing, Transformers": 90,
        "Deep Learning, Neural Networks": 90,
        "Probability & Statistics": 85,
        "Tensorflow": 95,
        "Pytorch, Keras": 90,
    },
    "Programming": {
        "Python": 95,
        "C": 80,
        "SQL and MySql": 95
    },
    "Data Analytics": {
        "Pandas": 90,
        "Numpy": 90,
        "Matplotlib": 90,
        "Seaborn": 80,
        "Scikit-learn": 90,
    },
    "Front End": {
        "HTML": 90,
        "CSS": 85,
        "JavaScript": 75,
        "React JS": 85,
        "React Native": 80
    },
    "Back End": {
        "Flask": 95,
        "Fast API": 95,
        "Firebase": 60,
        "MongoDB": 85,
        "Streamlit": 95
    },
    "Tools": {
        "Github": 90,
        "UIPath": 85,
        "Adobe Photoshop": 85,
        "Docker": 80,
        "Anaconda": 95
    }
};

const Skills = () => {
    const [openCategory, setOpenCategory] = useState("AI & ML");

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section__title">My Skill Toolbox</h2>
                <div className="skills__container">
                    <div className="skills__categories">
                        {Object.keys(skills).map(category => (
                            <div
                                key={category}
                                className={`skills__category ${openCategory === category ? 'active' : ''}`}
                                onClick={() => toggleCategory(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                    <div className="skills__details">
                        {openCategory && (
                            <div className="skills__content">
                                <div className="skills__list grid">
                                    {Object.entries(skills[openCategory]).map(([skill, percentage]) => (
                                        <div key={skill} className="skills__data">
                                            <div className="skills__titles">
                                                <h3 className="skills__name">{skill}</h3>
                                                <span className="skills__number">{percentage}%</span>
                                            </div>
                                            <div className="skills__bar">
                                                <span className="skills__percentage" style={{ width: `${percentage}%` }}></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
