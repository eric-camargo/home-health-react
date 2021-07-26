import React from 'react'

import classes from './PatientCard.module.css'

function PatientCard(props) {
  const profilePic = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'

  return (
    <div className={classes.card}>
      <div className={classes.profile}>
        <img src={profilePic}/>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.infos}>
        <div className={classes.info}>
          <small>Idade</small>
          <p>{props.age}<span> anos</span></p>
        </div>
        <div className={classes.info}>
          <small>Peso</small>
          <p>{props.weigth}<span> kg</span></p>
        </div>
        <div className={classes.info}>
          <small>Altura</small>
          <p>{props.height}<span> cm</span></p>
        </div>
      </div>
    </div>
  )


}

export default PatientCard
