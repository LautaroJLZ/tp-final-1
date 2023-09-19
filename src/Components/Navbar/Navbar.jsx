import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <div className='c-navbar' id='home'>
          <a href="#home"><img src="src/views/img/logo-page.png" alt="Logo" /></a>  
          <div className='c-list-navbar'>
            <ul className='list-navbar'>
                <li><a href="#about">A CERCA DE</a></li>
                <li><a href="#experience">EXPERIENCIAS</a></li>
                <li><a href="#projects">PROJECTOS</a></li>
                <li><a href="#contacts">CANTACTO</a></li>
            </ul>
          </div>
        </div>
    )
}

export { Navbar }