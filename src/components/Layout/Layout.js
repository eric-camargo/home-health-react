import React, { Fragment, useContext } from 'react'
import AuthContext from '../../store/auth-context'

import Navbar from './Navbar'

function Layout(props) {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      {authCtx.isLoggedIn && <Navbar/>}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
