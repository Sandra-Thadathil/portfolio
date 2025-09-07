import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Contact.css'

export default function Contact() {
    return (
        <div>
            <h1 className="contact-title">Let's Connect</h1>
            <div className="contact-icons">
                <p className="contact-info">I’d love to hear from you. Whether it’s freelance, full-time, or a friendly chat, say hello!</p>
                <a href="https://www.linkedin.com/in/sandra-s-thadathil-41a7552a8/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={45} />
                </a>
                <a href="https://github.com/Sandra-Thadathil" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={45}  />
                </a>
                <a href="mailto:sandrasthadathil970@gmail.com">
                    <MdEmail size={45}  />
                </a>
            </div>
        </div>
    )
}

