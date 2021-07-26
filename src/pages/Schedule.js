import React from 'react'
import { useHistory } from 'react-router-dom'

import BackgroundBoard from '../components/UI/BackgroundBoard'
import PatientCard from '../components/Patient/PatientCard'
import InfoCard from '../components/UI/InfoCard'
import Dashboard from '../components/Patient/Dashboard'
import classes from './Schedules.module.css'


function AppointmentsSchedule(props) {

  return (
    <div className={classes.layout}>
      <div className={classes.buttons}>
        <button onClick={goBack}>Voltar</button>
      </div>
      <BackgroundBoard>
        <div className={classes.mainBoard}>
          <div className={classes.leftCards}>
            <PatientCard name={data.name} age={data.age} weigth={data.weigth} height={data.height} />
            <InfoCard type="critical"/>
            <InfoCard type="sumary"/>
          </div>
          <div className={classes.dashboard}>
            <Dashboard data={DUMMYPATIENTDATA}/>
          </div>
        </div>
        
      </BackgroundBoard>
    </div>
  )
}

export default AppointmentsSchedule
