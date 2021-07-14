import React, { Fragment } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import PatientCard from '../components/Patient/PatientCard';
import InfoBoard from '../components/UI/InfoBoard'
import InfoCard from '../components/UI/InfoCard'
import Dashboard from '../components/Patient/Dashboard';

function PatientDetail() {
  const params = useParams();
  const history = useHistory();

  const DUMMYPATIENTDATA = {
    'name': 'Bob',
    'age': 90,
  }  


  const goBack = () => {
    history.replace('/pacientes');
  }

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
    <InfoBoard>
      <button onClick={goBack}>Voltar</button>
      <PatientCard name='' age='' weight='' height='' />
      <InfoCard type="critical"/>
      <InfoCard type="sumary"/>
      <Dashboard  data={DUMMYPATIENTDATA}/>
    </InfoBoard>
      
  )
}

export default PatientDetail
