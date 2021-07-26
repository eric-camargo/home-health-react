import React from 'react'

import classes from './BackgroundBoard.module.css'

function BackgroundBoard(props) {
  return (
    <div className={classes.board}>
      {props.children}
    </div>
  )
}

export default BackgroundBoard