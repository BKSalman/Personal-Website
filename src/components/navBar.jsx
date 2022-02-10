import SwitchMenu from './SwitchMenu';


const NavBar =  () => {
    return (
        <header>
            <SwitchMenu></SwitchMenu>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                <li>
                    <a className='link' href="/">
                    <p>My projects</p>
                    </a> 
                </li>
                <li>
                    <a className='link' href="/">
                    <p>My skills</p>
                    </a> 
                </li>
                <li>
                    <a className='link' href="/">
                    <p>Contact</p>
                    </a>
                </li>
                </ul>
            </nav>
    </header>
    );
}
 
export default NavBar;