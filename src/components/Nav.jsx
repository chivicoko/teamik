import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light px-5 bg-light d-flex justify-content-between align-items-center bg-dark' id={styles.navbar}>
      <div className="logo"><h1 className='text-light'>Teamik</h1></div>
      <ul className='navbar-nav border d-flex justify-content-center align-items-center'>
          <li className='nav-item'>
              <Link className='nav-link text-light' to='/'>Home</Link>
          </li>
          <span className="text-light">|</span>
          <li className='nav-item'>
              <Link className='nav-link text-light' to='/GroupedTeamMembers'>Teams</Link>
          </li>
      </ul>
      <div><h5 className="hello text-light">Say Hi 💇‍♂️</h5></div>
    </nav>
  )
}

export default Nav;