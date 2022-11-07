import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Nav navbarScroll className='Navbar'>
      <div className='n-wrapper'>
        <Link
          className='n-name'
          to='../Home'
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link style={{ all: 'unset' }} to='../Destino'>
              Destinos
            </Link>
          </li>
          <li>
            <Link style={{ all: 'unset' }} to='../User'>
              Minha Conta
            </Link>
          </li>
          <li>
            <Link
              style={{ all: 'unset' }}
              to='../Promocoes'
              offset={-70}
              duration={500}
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              style={{ all: 'unset' }}
              to='experience-section'
              offset={-70}
              duration={500}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
