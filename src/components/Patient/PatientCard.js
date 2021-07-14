import React from 'react'

import classes from './PatientCard.module.css'

function PatientCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.profile}>
      <img src={props.picture}/>
      <h3>{props.name}</h3>
      </div>
      <div className={classes.infos}>
        <small>Idade</small>
        <p>{props.age}</p>
        <small>Peso</small>
        <p>{props.weight}</p>
        <small>Altura</small>
        <p>{props.height}</p>
      </div>
    </div>
  )


}

export default PatientCard
