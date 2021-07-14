import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Table from '../components/DataHandler/Table'
import NewPatient from '../components/Patient/NewPatient';

function Patients(props) {
  const history = useHistory();
  const [showNewPatient, setShowNewPatient] = useState(false)

  const tableHeaders = [
    { name: 'name', title: 'Nome do Paciente', type: 'text' },
    { name: 'age', title: 'Idade', type: 'number' },
    { name: 'address', title: 'Endereço', type: 'text' },
    { name: 'city', title: 'Cidade', type: 'text'},
  ]

  // TODO: Criar Endpoint
  // TODO: Adicionar Paginação com auto update on scroll
  const DUMMYDATA = [
    {
      'id': 0,
      'name': 'Marcos Conde',
      'age': 70,
      'address': 'street and number',
      'city': 'Fortaleza/CE'
    },{
      'id': 1,
      'name': 'Joseph Maya',
      'age': 71,
      'address': 'street 2 and number 2',
      'city': 'Fortaleza 2/CE'
    },{
      'id': 2,
      'name': 'Captain Rogers',
      'age': 72,
      'address': 'street 3 and number 3 ',
      'city': 'Fortaleza 3/CE'
    },
  ]

  const viewDetailsHandler = (event) => {
    const id = event.target.id
    history.push(`/pacientes/${id}`)
    }
  
  const showNewPatientHandler = () => {
    setShowNewPatient(true)
  }

  const hideNewPatientHandler = () => {
    setShowNewPatient(false)
  }

  return (
    <Fragment>
      {showNewPatient && <NewPatient onClose={hideNewPatientHandler}/>}
      <Table 
        header={tableHeaders}
        data={DUMMYDATA}
        headerButton={'Novo Paciente'}
        detailButton={'Ver Mais'}
        onHeaderBtnClicked={showNewPatientHandler}
        onRowBtnClicked={viewDetailsHandler}
      />
    </Fragment>
  )
}

export default Patients;
