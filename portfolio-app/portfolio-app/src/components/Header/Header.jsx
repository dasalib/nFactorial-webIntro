import './header.css'

const Header = () => {
    return (
        <>
        <header>
        <div className="header">
        <div className='nameTitle'>
        <h1 >Dastan Alibekov</h1>
        </div>
        <nav className='menu'>
            <ul>
                <li><a href="#about">About</a></li> 
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