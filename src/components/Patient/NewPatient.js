import React from 'react'

import Modal from '../UI/Modal'

function NewPatient(props) {
  return (
    <Modal onClose={props.onClose}>
      <h1>New Patient</h1>
    </Modal>
  )
}

export default NewPatient
