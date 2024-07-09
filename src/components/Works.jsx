import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Works.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'transparent', borderRadius: '50%', padding: '1px', marginRight:300 }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'transparent', borderRadius: '50%', padding: '1px', marginLeft:300, zIndex:2 }}
            onClick={onClick}
        />
    );
};

const CardSlider = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const loadCards = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const loadedCards = [
                { title: 'PixelPhrase', description: 'An application that employs Vision Transformers, specifically the BLIP model, to analyze photos and produce detailed captions, offering precise descriptions customized for each image', image: await import('./images/icg.jpg'), github: 'https://github.com/Austin2905/Image-Captioning' },
                { title: 'MoodMic', description: 'An application that analyzes users emotions through their voice using state-of-the-art deep learning models', image: await import('./images/ser.jpg'), github: 'https://github.com/Austin2905/Speech-Emotion-Recognition' },
                { title: 'Baymax', description: 'A mental health chatbot named Baymax, built by fine-tuning a Llama2 model and utilizing LangChain', image: await import('./images/baymax.jpg'), github: 'https://github.com/Austin2905/Mental-Health-Chatbot' },
                { title: 'Project ECHO', description: 'Early Cancer Hunting & Oversight is an application for detecting, predicting, and classifying breast cancer with high accuracy, using state-of-the-art deep learning models', image: await import('./images/bcp.jpg'), github: 'https://github.com/Austin2905/Breast-Cancer-Prediction' },
                { title: 'StockSage', description: 'A simple stock bot that uses LSTM and RNN models to predict stock prices, helping you decide which stocks to buy and sell', image: await import('./images/sb.jpg'), github: 'https://github.com/Austin2905/Stock-Price-Prediction' },
                { title: 'FaceMood', description: 'A Deep Learning application to detect Emotions through Facial Expressions', image: await import('./images/fer.jpg'), github: 'https://github.com/Austin2905/Face-Emotion-Recognition' },
                { title: 'Argos', description: 'A Deep Learning application that automates the attendance-taking process using facial recognition technology', image: await import('./images/attendance.jpg'), github: 'https://github.com/Austin2905/Attendance-Management-System' },
                { title: 'ReboundX', description: 'A web application designed to diagnose and support students with their mental health', image: await import('./images/mha.jpg'), github: 'https://github.com/Austin2905/sih23-frontend' },
                { title: 'EmotiScope', description: 'An application that analyzes social media comments in real-time, extracting and categorizing emotions expressed in text to provide insightful emotional analysis', image: await import('./images/text.jpg'), github: 'https://github.com/Austin2905/Sentiment-Analysis' },
                { title: 'PlagirismChecker', description: 'A natural language processing (NLP) project that uses machine learning to detect plagiarism in text', image: await import('./images/plag.jpg'), github: 'https://github.com/Austin2905/PlagirismChecker' },
                { title: 'TaskMate', description: 'A simple Task Management Web Application', image: await import('./images/tma.jpg'), github: 'https://github.com/Austin2905/Task-Mate', live: 'https://taskmate316.netlify.app/' },
                { title: 'Ink-Digit Scan', description: ' An neural network model designed for handwritten digit recognition', image: await import('./images/ids.jpg'), github: 'https://github.com/Austin2905/Ink-Digit_Scan' },
                { title: 'Pixel Contrast', description: 'A precise image analysis tool for pinpointing and quantifying differences between two images, perfect for quality assurance and forensic investigations', image: await import('./images/imgdiff.jpg'), github: 'https://github.com/Austin2905/Img-Diff-Prototype', live: 'https://detectionprototype.streamlit.app' }
            ];

            setCards(loadedCards);
        };

        loadCards();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div className="works">
            <div className="card-slider">
                <h2 className="section-heading">My CookBook</h2>
                <h2 className="section-heading2">A Collection of my Projects and Works</h2>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card-content">
                                <div className="card-image-container">
                                    <img src={card.image.default} alt={card.title} className="card-image" />
                                </div>
                                <div className="card-description">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <div className="card-links">
                                        <a href={card.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                        {card.live && <a href={card.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardSlider;
