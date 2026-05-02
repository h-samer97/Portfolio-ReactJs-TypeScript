import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import './Header.css';
import { MdCancel } from 'react-icons/md';
import { BiMoon, BiSun } from 'react-icons/bi';

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <header>

            <div className="menu">
                <FaHamburger onClick={() => {
                    setShowModal(true);
                }} size={26} />
            </div>
        
            <nav>
                <ul className='flex'>
                    <li>
                        <a href="">about for me</a>
                    </li>

                    <li>
                        <a href="">front-end projects</a>
                    </li>

                    <li>
                        <a href="">backend-end projects</a>
                    </li>

                    <li>
                        <a href="">CCNA Repository Labs (.pkt)</a>
                    </li>
                </ul>
            </nav>

            <button className="theme-toggle" type="button" onClick={toggleTheme}>
              {theme === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
              <span>{theme === 'light' ? 'Dark' : 'Light'} mode</span>
            </button>

            {showModal && (
                <div className="fixed">
                    
                    <ul className='modal'>

                         <li className='dir-btn'>
                            <MdCancel onClick={() => {
                            setShowModal(false);
                            }} size={26} color='#999'  />
                        </li>
                        <li>
                        <a href="">about for me</a>
                        </li>

                        <li>
                            <a href="">front-end projects</a>
                        </li>

                        <li>
                            <a href="">backend-end projects</a>
                        </li>

                        <li>
                            <a href="">CCNA Repository Labs (.pkt)</a>
                        </li>

                    </ul>
                </div>
            )}
        
        </header>
    );

};

export default Header;