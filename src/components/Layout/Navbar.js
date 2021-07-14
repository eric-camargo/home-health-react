import { classes } from 'istanbul-lib-coverage';
import React from 'react'
import { NavLink } from 'react-router-dom'

// import LOGO from '../../assets/HomeHealthLogo.png';

function Navbar() {
  

  return (
    <header id="navbar">
      {/* <NavLink to='/'>
        <img src={LOGO} alt='Logo Home-Health'/>
      </NavLink> */}
      <NavLink activeClassName={classes.activeLink} className={classes.link} to='/agenda'>AGENDA</NavLink>
      <NavLink activeClassName={classes.activeLink} className={classes.link} to='/atendimento'>ATENDIMENTO</NavLink>
      <NavLink activeClassName={classes.activeLink} className={classes.link} to='/pacientes'>PACIENTES</NavLink>
      <NavLink activeClassName={classes.activeLink} className={classes.link} to='/conta'>CONTA</NavLink>
    </header>  
  )
}

export default Navbar;
