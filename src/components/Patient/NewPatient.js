import { ClassNames } from '@emotion/react'
import React, { useState } from 'react'

import Modal from '../UI/Modal'
import classes from './NewPatient.module.css'


function NewPatient(props) {

  const basicInfoForm = () => {
    
  }
  
  const [inputForm, setInputForm] = useState()

  const BasicInfoHandler = () => {
    console.log('BasicInfo')
  }

  const AddressHandler = () => {
    console.log('Address Handler')
  }

  const NeedsHandler = () => {
    console.log('Needs Handler')
  }

  const DelegationHandler = () => {
    console.log('Delegation Handler')
  }

  const SubmitHandler = () => {
    console.log('Submit Handler')
  }



  return (
    <Modal onClose={props.onClose}>
      <div className={classes.card}>
        <div className={classes.menu}>
          <h3>Novo Paciente</h3>
          <button onClick={BasicInfoHandler}>Informações Básicas</button>
          <button onClick={AddressHandler}>Endereço</button>
          <button onClick={NeedsHandler}n>Necessidades</button>
          <button onClick={DelegationHandler}>Responsáveis</button>
          <button onClick={SubmitHandler}>Confirmar</button>
        </div>
        <div className={classes.details}>
          <form>
            <label>Input 1</label>
            <input />
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default NewPatient
