import React from 'react'
import { NavLink } from 'react-router-dom'

// import LOGO from '../../assets/HomeHealthLogo.png';
import classes from './Navbar.module.css'

function Navbar() {
  

  return (
    <header id="navbar">
      {/* <NavLink to='/'>
        <img src={LOGO} alt='Logo Home-Health'/>
      </NavLink> */}
      <div className={classes.rightLinks}>
        <NavLink activeClassName={classes.activeLink} className={classes.link} to='/agenda'>AGENDA</NavLink>
        <NavLink activeClassName={classes.activeLink} className={classes.link} to='/atendimentos'>ATENDIMENTOS</NavLink>
        <NavLink activeClassName={classes.activeLink} className={classes.link} to='/pacientes'>PACIENTES</NavLink>
        <NavLink activeClassName={classes.activeLink} className={classes.link} to='/conta'>CONTA</NavLink>
      </div>
    </header>  
  )
}

export default Navbar;
