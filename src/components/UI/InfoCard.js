import React from 'react'

import classes from './InfoCard.module.css'

function InfoCard(props) {
  return (
    <div className={`${classes.card} ${props.type}`}>
      <div className={classes.header}>{props.header}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  )
}

export default InfoCard
