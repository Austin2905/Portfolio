import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d850hhl', 'template_093tujg', form.current, '2wqE-k8DdboMvuUBt')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }, (error) => {
                console.log(error.text);
                toast.error('Something went wrong. Please try again later.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            });
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="title">
                    "As iron sharpens iron, so one person sharpens another." <br />
                    -Proverbs 27:17
                </div>

                <p className="message">
                    Interested in hiring, collaborating, or need help with an AI or web development project?<br />
                    Feel free to reach out! I'm always happy to connect.
                </p>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <input type="submit" value="Send Message" />
                </form>

                <div className="social">
                    <a href="https://github.com/Austin2905" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/demetrius-asir" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://wa.me/9361126959" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <FaWhatsapp size={30} />
                    </a>
                    <a href="mailto:demeaustin316@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <MdEmail size={30} />
                    </a>
                </div>
            </div>
            <div className="location">
                <FaMapMarkerAlt size={30} />
                Chennai, India | Bangalore, India
            </div>
            <div className="footer">
                <p className="footer-text">© 2024 Demetrius Asir. All rights reserved.</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
