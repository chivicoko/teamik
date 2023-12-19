import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center bg-dark' id={styles.navbar}>
      <div className="logo"><h1 className='text-light'><Link to='/teamik'>Teamik</Link></h1></div>
      <ul className='navbar-nav border d-flex justify-content-between align-items-center'>
          <li className='nav-item'>
              <Link className='nav-link text-light' to='/teamik'>Home</Link>
          </li>
          <span className="text-light">|</span>
          <li className='nav-item'>
              <Link className='nav-link text-light' to='/GroupedTeamMembers'>Teams</Link>
          </li>
      </ul>
      <div><h5 className="hello text-light"><a href='https://www.victorokoye.com' target='_blank' rel="noreferrer">Say Hi 💇‍♂️</a></h5></div>
    </nav>
  )
}

export default Nav;