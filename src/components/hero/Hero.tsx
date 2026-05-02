import "./Hero.css";
import { FaFacebook, FaGithub, FaLaravel, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="hero">

            <div className="about-me">
                <div className="avatar">
                    <img src="./assets/prog.mp4" alt="avatar" />
                    <FaLaravel color="red" />
                </div>

                
                <div className="info">
                    <h1>web full stack developer, systems & networking (CCNA)</h1>
                    <h3>Hi I am samer Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita animi ipsa sunt magnam unde aspernatur molestiae dolorem cum distinctio obcaecati!</h3>
                    <div className="social-media">
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/h-samer97" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X Twitter">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/h-samer97/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                        <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            <div className="about-img">
                <img src="./assets/images.png" alt="" />
            </div>

        </section>
    );
}

export default Hero;