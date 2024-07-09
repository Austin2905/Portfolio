import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Works from './components/Works';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';


const App = () => {
    return (
        <div>
            <Header/>
            <div className="home">
                <Home/>
            </div>
            <div className="hero">
                <Hero/>
            </div>
            <div className="works">
                <Works/>
            </div>
            <div className="skills">
            <Skills/>
            </div>
            <div className="timeline">
                <Timeline/>
            </div>
            <div className="contact">
                <Contact/>
            </div>
            <BackToTop/>
        </div>
    );
};

export default App;
