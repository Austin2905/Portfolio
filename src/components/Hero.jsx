import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const renderHTML = (html) => {
        return { __html: html };
    };

    const suggestions = [
        "Could you tell me a bit about yourself?",
        "What do you like to do in your free time?",
        "How can I contact you?",
        "What's your experience with AI and ML?"
    ];


    const responses = {
        hobbies: [
            "I enjoy playing the piano, baking, reading, watching movies and series, and listening to music.",
            "My hobbies include playing the piano, cooking, reading books, and enjoying movies and series from different genres.",
            "In my free time, I love playing the piano, trying out new recipes in the kitchen, and getting lost in captivating books and films."
        ],
        googleDSC: [
            "I'm the Cloud Lead at Google DSC, where I lead initiatives and projects related to cloud computing.",
            "At Google DSC, I head the Cloud team, driving forward cloud-related projects and events.",
            "As the Cloud Lead at Google DSC, I oversee various cloud computing projects and mentor students in cloud technologies."
        ],
        favoriteBook: [
            "I love diving into captivating fictional books, but I don't have a single favorite.",
            "There are so many great books, it's hard to pick just one, but I enjoy a good fiction read.",
            "Fictional books are my favorite, but it's tough to choose just one."
        ],
        piano: [
            "Yes, I've completed Grade 5 in piano and enjoy playing my favorite songs.",
            "I can play the piano and have achieved Grade 5 certification.",
            "Absolutely, I love playing the piano and have reached Grade 5 proficiency."
        ],
        freelance: [
            "I specialize in freelance projects centered around AI/ML and frontend design and development. Feel free to reach out!",
            "I'm focused on freelance work in AI/ML projects and frontend design and development. Let's connect!",
            "My freelance work revolves around AI/ML projects and frontend design and development. Feel free to get in touch!"
        ],
        currentListening: [
            "Currently, I'm listening to some of <a href='https://music.apple.com/in/playlist/get-up-mix/pl.pm-7cd15d345a6ed1ef55ac02c6af9589da?ls' target='_blank' rel='noopener noreferrer'>These</a>.",
            "I'm enjoying a mix of music right now, depending on my mood. But for now its <a href='https://music.apple.com/in/playlist/heavy-rotation-mix/pl.pm-7cd15d345a6ed1ef20c1f53a80100951?ls' target='_blank' rel='noopener noreferrer'>These songs</a>.",
            "Right now, I'm listening to some of my <a href='https://music.apple.com/in/playlist/get-up-mix/pl.pm-7cd15d345a6ed1ef55ac02c6af9589da?ls' target='_blank' rel='noopener noreferrer'>top tracks</a> while working."
        ],
        currentWatching: [
            "I'm currently watching Better call saul and Windbreaker along with Kaiju no.8 and Demon Slayer. If you want to recommend something feel free to <a href='https://wa.me/9043702223' target='_blank' rel='noopener noreferrer'>reach out</a>!",
            "I'm Just watching some very old tamil movies these days. Have anything to recommend? feel free to <a href='https://wa.me/9043702223' target='_blank' rel='noopener noreferrer'>reach out</a>.",
            "I'm watching an anime called Windbreaker these days."
        ],
        projects: [
            "You can check out my projects on my <a href='https://github.com/Austin2905' target='_blank' rel='noopener noreferrer'>GitHub</a>. For more details, refer to my Works page below.",
            "My projects are listed on my <a href='https://github.com/Austin2905' target='_blank' rel='noopener noreferrer'>GitHub</a>. Feel free to explore them and visit the Works page for more insights.",
            "To see my projects, visit my <a href='https://github.com/Austin2905' target='_blank' rel='noopener noreferrer'>GitHub</a>. The Works page has detailed descriptions of each project."
        ],
        greeting: [
            "Hi there! How can I help you today?",
            "Hello! Feel free to ask me anything about myself.",
            "Hey! What would you like to know about me?"
        ],
        contact: [
            "You can contact me via <a href='mailto:demeaustin316@gmail.com' target='_blank' rel='noopener noreferrer'>Email</a> or through my <a href='https://www.linkedin.com/in/demetrius-asir/' target='_blank' rel='noopener noreferrer'> LinkedIn</a> profile. Refer to the contact page below for more details.",
            "Feel free to reach out to me through <a href='mailto:demeaustin316@gmail.com' target='_blank' rel='noopener noreferrer'>Email</a> or my <a href='https://www.linkedin.com/in/demetrius-asir/' target='_blank' rel='noopener noreferrer'> LinkedIn</a> profile for any inquiries. Refer to the contact page below for more details.",
            "You can get in touch with me via <a href='https://www.linkedin.com/in/demetrius-asir/' target='_blank' rel='noopener noreferrer'> LinkedIn</a> or <a href='mailto:demeaustin316@gmail.com' target='_blank' rel='noopener noreferrer'>Email</a>. Refer to the contact page below for more information."
        ],
        aiMLExperience: [
            "I have extensive experience in AI and Machine Learning, working on various projects involving Neural Networks, NLP, Computer Vision, and MLOps.",
            "My experience in AI and Machine Learning includes hands-on projects with Neural Networks, Natural Language Processing, and Computer Vision.",
            "I've worked on several AI and Machine Learning projects, specializing in Neural Networks, NLP, and Computer Vision."
        ],
        skills: [
            "You can check out my skills on the skills section.",
            "To know about my skills, please visit the skills section.",
            "You can find detailed information about my skills on the skills section."
        ],
        experience: [
            "I've worked on various projects, including developing object detection models, customized chatbots, and web development.",
            "My experience includes internships in AI and ML, creating practical applications, and leading cloud projects at Google DSC.",
            "I have hands-on experience in AI and ML, including building object detection models and AI-powered web applications."
        ],
        internships: [
            "I've interned at companies like Karnataka Hybrid Micro Devices Ltd and RGB.AI, working on object detection and deep learning models.",
            "My internships include roles at KHMDL and RGB.AI, where I created object detection models, and at Smart India Hackathon, building a mental health application.",
            "I've completed internships at various companies focusing on AI, machine learning, and web development projects."
        ],
        education: [
            "I'm in my final year of BTech in Artificial Intelligence and Machine Learning at Anna University.",
            "I am pursuing my BTech in Artificial Intelligence and Machine Learning at Anna University, Tamil Nadu.",
            "Currently, I'm a final year BTech student at Anna University, specializing in Artificial Intelligence and Machine Learning."
        ],
        achievements: [
            "I have advanced as a finalist in SIH '23 and reached the finals at Toycathon hosted by the Indian government. Additionally, I am actively engaged in Toastmasters International and IEEE, and also serve as the Cloud Lead at Google DSC @ SJCE.",
            "I've had the privilege of reaching the finals in SIH '23 and Toycathon hosted by the Indian government. Moreover, I actively participate in Toastmasters International and IEEE. I currently hold the role of Cloud Lead at Google DSC @ SJCE.",
            "I have reached the finals in SIH '23 and Toycathon organized by the Indian government. I'm actively engaged with Toastmasters International and IEEE, and currently serve as the Cloud Lead at Google DSC @ SJCE.",
            "My biggest achievement so far is leading a team to develop a mental health app that reached the finals in the Smart India Hackathon.",
            "Deploying a customized chatbot on my portfolio website, which boosted user engagement, is one of my proudest achievements.",
            "Being the Cloud Lead at Google DSC and mentoring students while driving successful cloud projects is a major achievement in my career."
        ],
        about: [
            "Hey there! I'm in my final year of BTech, studying Artificial Intelligence and Machine Learning. I'm all about diving deep into the cutting-edge stuff like Neural Networks, NLP, Computer Vision, and MLOps. I'm also a frontend developer and a freelancer. Feel free to connect.",
            "Hey there! I'm currently in my final year of BTech, specializing in Artificial Intelligence and Machine Learning. My passion lies in exploring advanced domains like Neural Networks, NLP, and Computer Vision. I'm deeply interested in MLOps as well. Alongside my studies, I also work as a frontend developer and freelance on various projects. Feel free to connect!",
            "Hello! I'm pursuing my final year of BTech with a focus on Artificial Intelligence and Machine Learning. My academic journey revolves around delving into cutting-edge fields such as Neural Networks, NLP, and Computer Vision, where I'm passionate about pushing boundaries. Beyond academics, I actively develop frontend solutions and freelance on diverse projects. Don't hesitate to reach out!"
        ],
        Misc: [
            "You can call me Demetrius. It's pronounced like (De-met-tree-us).",
            "I'm Demetrius. Pronounced as (De-met-tree-us)."
        ],
        strengths: [
            "I'm really good at AI and ML, especially with Neural Networks, NLP, and Computer Vision. I'm also strong in frontend development and project management.",
            "I excel at solving problems and thinking critically. I learn quickly and adapt well to new challenges.",
            "My main strengths are my technical skills in AI and ML, my ability to lead projects, and my commitment to always learning and improving."
        ],
        weaknesses: [
            "I'm working on getting better at backend development with Node.js. I'm taking steps to improve in this area.",
            "Sometimes, I focus too much on details, which can slow me down. I'm learning to balance perfection with efficiency.",
            "I sometimes take on too many responsibilities. I'm working on setting better boundaries."
        ],
        challenges: [
            "One tough project I worked on was creating an object detection model with not much training data. I used data augmentation and optimized the model to solve it.",
            "During my internship at RGB.AI, integrating a deep learning model with a web app was challenging. We succeeded through lots of testing and team collaboration.",
            "Building a customized chatbot with natural language understanding was tough. I researched NLP techniques deeply and kept refining the model based on feedback."
        ],
        teamwork: [
            "I believe in teamwork and open communication. For example, as Cloud Lead at Google DSC, I organize meetings, encourage knowledge sharing, and create a supportive environment.",
            "I believe in teamwork and clear communication. For example, in my AI projects, I listen to my team’s ideas and give helpful feedback. At Google DSC, I lead by organizing meetings, sharing knowledge, and supporting my team.",
            "Teamwork and open communication are crucial to me. When developing Frontend projects, I collaborate closely with my team, embracing different viewpoints to achieve our goals. As Cloud Lead at Google DSC, I ensure we meet, share knowledge, and create a supportive environment."
        ],
        stayingUpdated: [
            "I stay updated with the latest in AI and ML by following top blogs, taking online courses, and attending webinars and conferences.",
            "To keep my knowledge current, I subscribe to AI and ML journals, engage with the community on forums like Stack Overflow, and work on personal projects.",
            "I read research papers, follow AI and ML influencers on social media, and participate in hackathons to stay on top of new developments."
        ],
        motivation: [
            "I'm motivated by solving tough problems and creating innovative solutions that make a real impact.",
            "I love learning new things and pushing the limits of technology. Seeing the positive impact of my work keeps me motivated.",
            "I'm passionate about AI and ML because they can change industries. The chance to be part of this change motivates me."
        ],
        greatestAchievement: [
            "My biggest achievement so far is leading a team to develop a mental health app that reached the finals in the Smart India Hackathon.",
            "Deploying a customized chatbot on my portfolio website, which boosted user engagement, is one of my proudest achievements.",
            "Being the Cloud Lead at Google DSC and mentoring students while driving successful cloud projects is a major achievement in my career."
        ],
        default: [
            "I can only answer questions related to me. Feel free to ask about my hobbies, projects, or anything else specific.",
            "I'm sorry, I can only answer questions you have about me. Please ask something specific.",
            "I can only help with questions about myself.",
            "I'm sorry, can you please try saying that again?"
        ]
    };


    const allSkills = [
        "Computer Vision", "Natural Language Processing"," Transformers", "Deep Learning"," Neural Networks","NLP","cv","cnn",
        "Probability", "Statistics", "Tensorflow", "Pytorch", "Keras", "Python", "C", "SQL and MySql",
        "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-learn","scikit", "HTML", "CSS", "JavaScript",
        "React JS", "React Native", "Flask"," Fast API","fastapi", "Node JS"," Express JS", "Firebase", "fire base", "sql","mysql",
        "MongoDB", "Streamlit", "Github", "UIPath", "Adobe Photoshop", "Docker", "Anaconda","react","node","nodejs","express","expressjs"
    ];

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: 'user', text: input }]);
            getBotResponse(input);
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const getBotResponse = (message) => {
        const lowerCaseMessage = message.toLowerCase();
        const possibleQuestions = lowerCaseMessage.split(/[\?\.,\!]/).map(q => q.trim());
        const individualResponses = [];
        let responseGenerated = false;

        possibleQuestions.forEach(question => {
            if (question.includes('about yourself') || question.includes('about you') || question.includes('what do you do')) {
                individualResponses.push(responses.about[Math.floor(Math.random() * responses.about.length)]);
                responseGenerated = true;
            } else if (question.includes('achievements') || question.includes('achievement') || question.includes('achieved') || question.includes('accomplishments')) {
                individualResponses.push(responses.achievements[Math.floor(Math.random() * responses.achievements.length)]);
                responseGenerated = true;
            } else if (question.includes('internships') || question.includes('internship experience')) {
                individualResponses.push(responses.internships[Math.floor(Math.random() * responses.internships.length)]);
                responseGenerated = true;
            } else if(question.includes('hobbies') || question.includes('interests') || question.includes('do for fun') || question.includes('free time')) {
                individualResponses.push(responses.hobbies[Math.floor(Math.random() * responses.hobbies.length)]);
                responseGenerated = true;
            } else if (question.includes('google dsc') || question.includes('cloud lead') || question.includes('dsc')) {
                individualResponses.push(responses.googleDSC[Math.floor(Math.random() * responses.googleDSC.length)]);
                responseGenerated = true;
            } else if (question.includes('favorite book') || question.includes('book you like') || question.includes('books') || question.includes('book')) {
                individualResponses.push(responses.favoriteBook[Math.floor(Math.random() * responses.favoriteBook.length)]);
                responseGenerated = true;
            } else if (question.includes('play the piano') || question.includes('piano')) {
                individualResponses.push(responses.piano[Math.floor(Math.random() * responses.piano.length)]);
                responseGenerated = true;
            } else if (question.includes('freelance project') || question.includes('freelance projects') || question.includes('freelance') || question.includes('freelancer')) {
                individualResponses.push(responses.freelance[Math.floor(Math.random() * responses.freelance.length)]);
                responseGenerated = true;
            } else if (question.includes('currently listening') || question.includes('listening to') || question.includes('music')) {
                individualResponses.push(responses.currentListening[Math.floor(Math.random() * responses.currentListening.length)]);
                responseGenerated = true;
            } else if (question.includes('currently watching') || question.includes('watching') || question.includes('movie') || question.includes('movies') || question.includes('series')) {
                individualResponses.push(responses.currentWatching[Math.floor(Math.random() * responses.currentWatching.length)]);
                responseGenerated = true;
            } else if (question.includes('projects') || question.includes('project') || question.includes('works')) {
                individualResponses.push(responses.projects[Math.floor(Math.random() * responses.projects.length)]);
                responseGenerated = true;
            } else if (question.includes('hi') || question.includes('hello') || question.includes('hey')) {
                individualResponses.push(responses.greeting[Math.floor(Math.random() * responses.greeting.length)]);
                responseGenerated = true;
            } else if (question.includes('contact') || question.includes('get in touch') || question.includes('reach you') || question.includes('connect')) {
                individualResponses.push(responses.contact[Math.floor(Math.random() * responses.contact.length)]);
                responseGenerated = true;
            } else if (question.includes('ai') || question.includes('ai/ml experience') || question.includes('ml') || question.includes('machine learning') || question.includes('aiml') || question.includes('ai and ml')) {
                individualResponses.push(responses.aiMLExperience[Math.floor(Math.random() * responses.aiMLExperience.length)]);
                responseGenerated = true;
            } else if (question.includes('skills') || question.includes('programming') || question.includes('abilities')) {
                individualResponses.push(responses.skills[Math.floor(Math.random() * responses.skills.length)]);
                responseGenerated = true;
            } else if (question.includes('experience') || question.includes('experiance') || question.includes('work experience')) {
                individualResponses.push(responses.experience[Math.floor(Math.random() * responses.experience.length)]);
                responseGenerated = true;
            } else if (question.includes('greatest achievement') || question.includes('biggest achievement')) {
                individualResponses.push(responses.greatestAchievement[Math.floor(Math.random() * responses.greatestAchievement.length)]);
                responseGenerated = true;
            } else if (question.includes('study') || question.includes('education') || question.includes('studying') || question.includes('university')) {
                individualResponses.push(responses.education[Math.floor(Math.random() * responses.education.length)]);
                responseGenerated = true;
            } else if (question.includes('your name') || question.includes('who are you')) {
                individualResponses.push(responses.Misc[Math.floor(Math.random() * responses.Misc.length)]);
                responseGenerated = true;
            } else if (question.includes('strengths')) {
                individualResponses.push(responses.strengths[Math.floor(Math.random() * responses.strengths.length)]);
                responseGenerated = true;
            } else if (question.includes('weaknesses')) {
                individualResponses.push(responses.weaknesses[Math.floor(Math.random() * responses.weaknesses.length)]);
                responseGenerated = true;
            } else if (question.includes('challenge') || question.includes('challenging project')) {
                individualResponses.push(responses.challenges[Math.floor(Math.random() * responses.challenges.length)]);
                responseGenerated = true;
            } else if (question.includes('teamwork') || question.includes('team') || question.includes('collaboration')) {
                individualResponses.push(responses.teamwork[Math.floor(Math.random() * responses.teamwork.length)]);
                responseGenerated = true;
            } else if (question.includes('staying updated') || question.includes('updated') || question.includes('latest trends')) {
                individualResponses.push(responses.stayingUpdated[Math.floor(Math.random() * responses.stayingUpdated.length)]);
                responseGenerated = true;
            } else if (question.includes('motivation') || question.includes('motivate') || question.includes('motivates')) {
                individualResponses.push(responses.motivation[Math.floor(Math.random() * responses.motivation.length)]);
                responseGenerated = true;
            } else if (allSkills.some(skill => question.toLowerCase().includes(skill.toLowerCase()))) {
                individualResponses.push(responses.skills[Math.floor(Math.random() * responses.skills.length)]);
                responseGenerated = true;
            }
        });

        // If no response was generated for any question, provide the default response
        if (!responseGenerated) {
            individualResponses.push(responses.default[Math.floor(Math.random() * responses.default.length)]);
        }

        const response = individualResponses.join(' ');

        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: response }]);
    };




    useEffect(() => {
        const container = document.querySelector('.chatbot-messages');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [messages]);
    const [scrolled, setScrolled] = useState(false);

    return (
        <div className="about">
            <div className="chat-title">
                <h1>Want to know more about me?
                    Just ask away<br/>
                Here are a few ideas to get you started...</h1>
            </div>
            <div className="chatbot-container">
                <div className="chatbot-suggestions">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="suggestion" onClick={() => setInput(suggestion)}>
                            {suggestion}
                        </div>
                    ))}
                </div>
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                            <span dangerouslySetInnerHTML={renderHTML(message.text)} />
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chatbot-input-container">
                    <input
                        type="text"
                        className="chatbot-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Feel free to ask anything you want to know about me!"
                    />
                    <button className="chatbot-button" onClick={handleSend}>▶</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
