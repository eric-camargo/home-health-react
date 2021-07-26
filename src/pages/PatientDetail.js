import React, { Fragment } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import PatientCard from '../components/Patient/PatientCard';
import BackgroundBoard from '../components/UI/BackgroundBoard'
import InfoCard from '../components/UI/InfoCard'
import Dashboard from '../components/Patient/Dashboard';

import classes from './PatientDetail.module.css'

function PatientDetail(props) {
  const params = useParams();
  const history = useHistory();

  const DUMMYPATIENTDATA = {
    name: 'Maria Andaluzia',
    age: 90,
    weigth: 98,
    height: 182,
  }  


  const goBack = () => {
    history.replace('/pacientes');
  }

  let data = DUMMYPATIENTDATA

  async function retrievePatientData() {

    fetch(
      'endpoint/url',
      {
        params
      }
    ).then( resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        return resp.json().then((data) => {
          let errorMessage = data.error.message
          throw new Error(errorMessage);
        })
      }
    }
    ).then((data) => {
      const patientData = data
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className={classes.layout}>
      <div className={classes.buttons}>
        <button onClick={goBack} class={classes.goBack}>VOLTAR</button>
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

export default PatientDetail
