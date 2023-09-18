import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <div className='c-navbar'>
          <img src="src/views/img/logo-page.png" alt="Logo" />  
          <div className='c-list-navbar'>
            <ul className='list-navbar'>
                <li>A CERCA DE MI</li>
                <li>EXPERIENCIAS</li>
                <li>PROJECTOS</li>
                <li>CANTACTO</li>
                <li>Soy Martino</li>
            </ul>
          </div>
        </div>
    )
}

export { Navbar }