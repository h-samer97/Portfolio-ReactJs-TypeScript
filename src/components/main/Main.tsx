import { DiGithubAlt } from "react-icons/di";
import "./Main.css";
import { useState } from "react";

const Main = () => {
    const [currentActive, setCurrentActive] = useState('all');
    const myProjects = [
        { 
            title: "School Management System", 
            description: "An academic & finance platform featuring multi-language support and polymorphic hierarchy.", 
            category: "laravel", 
            img: "./assets/school.jpg",
            link: "https://github.com/h-samer97" 
        },
        { 
            title: "Windows XP Simulator", 
            description: "A complex host environment for JS apps built with OOP/DOM/BOM.", 
            category: "javascript", 
            img: "./assets/xp.jpg",
            link: "https://github.com/h-samer97" 
        },
        { 
            title: "Invoices & Billing System", 
            description: "Automated invoicing lifecycle with PDF printing and Spatie-based ACL.", 
            category: "laravel", 
            img: "./assets/invoice.jpg",
            link: "https://github.com/h-samer97" 
        },
        { 
            title: "Custom eCommerce CMS", 
            description: "A secure MVC framework built from scratch with a Regex-based router.", 
            category: "php", 
            img: "./assets/ecommerce.jpg",
            link: "https://github.com/h-samer97" 
        },
        { 
            title: "Healthcare System", 
            description: "Multi-dashboard platform with real-time notifications and Livewire chat.", 
            category: "laravel", 
            img: "./assets/health.jpg",
            link: "https://github.com/h-samer97" 
        },
        { 
            title: "Web Templates", 
            description: "A series of modern, responsive business and agency templates.", 
            category: "html/css", 
            img: "./assets/template.jpg",
            link: "https://github.com/h-samer97" 
        },
        { 
            title: "CCNA .pkt", 
            description: "ccna", 
            category: "ccna", 
            img: "./assets/template.jpg",
            link: "https://github.com/h-samer97" 
        }
    ];

    const filteredProjects = myProjects.filter((item) => {
        return currentActive === 'all' ? true : item.category === currentActive;
    });

    return (
        <section className="flex">
            <div className="buttons">
                <button onClick={() => setCurrentActive('all')} className={currentActive === 'all' ? 'active' : undefined }>all project</button>
                <button onClick={() => setCurrentActive('laravel')} className={currentActive === 'laravel' ? 'active' : undefined}>laravel</button>
                <button onClick={() => setCurrentActive('html/css')} className={currentActive === 'html/css' ? 'active' : undefined}>html/css</button>
                <button onClick={() => setCurrentActive('javascript')} className={currentActive === 'javascript' ? 'active' : undefined}>javascript</button>
                <button onClick={() => setCurrentActive('php')} className={currentActive === 'php' ? 'active' : undefined}>php</button>
                <button onClick={() => setCurrentActive('ccna')} className={currentActive === 'ccna' ? 'active' : undefined}>ccna</button>
            </div>

            <div className="cards-projects">
                {filteredProjects.map((item, index) => {
                    return (
                        <div key={index} className="card">
                            <img src={item.img} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>

                            <div className="foot">
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <DiGithubAlt />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Main;