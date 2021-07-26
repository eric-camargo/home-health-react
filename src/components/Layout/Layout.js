import React, { Fragment, useContext } from 'react'
import AuthContext from '../../store/auth-context'

import Navbar from './Navbar'
import classes from './Layout.module.css'

function Layout(props) {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      {authCtx.isLoggedIn && <Navbar/>}
      <div className={classes.layout}>
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
