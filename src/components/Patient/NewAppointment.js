import React from 'react'
import Modal from '../UI/Modal'

import classes from './NewAppointment.module.css'

function NewAppointment(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.card}>
        <div className={classes.menu}>
          <h3>Novo Atendimento</h3>
          
        </div>
      </div>
    </Modal>
  )
}

export default NewAppointment
