import { useTheme } from '../ThemeContext';
import './header.css'

const Header = () => {
    const {theme, toggleTheme} = useTheme;
    return (
        <>
        <header>
        <div className={`header ${theme === 'dark' ? 'header-dark' : 'header-light'}`}>
        <div className='nameTitle'>
        <h1 >Dastan Alibekov</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <nav className='menu'>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li> 
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
        </nav>
        </div>
        </header>
        </>
    )
}

export default Header;