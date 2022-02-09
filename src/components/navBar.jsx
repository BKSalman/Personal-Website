import React from 'react';
import SwitchMenu from './switchMenu';


const NavBar =  () => {
    return (
        <header>
            <SwitchMenu></SwitchMenu>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                <li>
                    <a className='link' href="/">
                    <p>something</p>
                    </a> 
                </li>
                <li>
                    <a className='link' href="/">
                    <p>something else</p>
                    </a> 
                </li>
                <li>
                    <a className='link' href="/">
                    <p>contact</p>
                    </a>
                </li>
                </ul>
            </nav>
    </header>
    );
}
 
export default NavBar;