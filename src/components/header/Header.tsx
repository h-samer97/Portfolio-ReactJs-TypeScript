import './Header.css';


const Header = () => {

    return (
        <header className='flex'>
        
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

            <button>light</button>
        
        </header>
    );

};

export default Header;