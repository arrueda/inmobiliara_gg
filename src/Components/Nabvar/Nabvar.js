import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import inmobiliariaLogo from '../Image/gg inmobiliaria logo.jpg';
import avatar from '../Image/avatar.png'
import './Navbar.css';




const Navbar = () => (
  <nav className='nav pb-1 mb-2'>
    <div className='logo-inmobiliariagg'>
      <Link to="/">
        <img
          className='logo-inmobiliariagg-logo'
          src={inmobiliariaLogo}
          alt='Logo de Inmobiliaria Gustavo Garzino'
        />
      </Link>
      <p className='logo-inmobiliariagg-texto'>Inmobiliaria <br /> Gustavo Garzino</p>
    </div>
    <React.Fragment>
      <ul className='navbar-menu mx-auto'>
        <li>
          <NavLink to='/' className='nave-item nav-link' >Home</NavLink>
        </li>
        <li>
          <NavLink to='/productos' className='nave-item nav-link' >Ventas</NavLink>
        </li>
        <li>
          <NavLink to='/alquiler' className='nave-item nav-link' >Alquiler</NavLink>
        </li>
      </ul>
    </React.Fragment>
    <div>
      <img className='avatar' src={avatar} alt='Avatar de casa' />
    </div>
  </nav>
);

export default Navbar;