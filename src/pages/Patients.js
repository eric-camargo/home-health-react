import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Table from '../components/DataHandler/Table'
import NewPatient from '../components/Patient/NewPatient';

function Patients(props) {
  const history = useHistory();
  const [showNewPatient, setShowNewPatient] = useState(false)

  const tableHeaders = [
    { accessor: 'name', Header: 'Nome do Paciente', type: 'text' },
    { accessor: 'age', Header: 'Idade', type: 'number' },
    { accessor: 'address', Header: 'Endereço', type: 'text' },
    { accessor: 'city', Header: 'Cidade', type: 'text'},
  ]

  // TODO: Criar Endpoint
  // TODO: Adicionar Paginação com auto update on scroll
  const DUMMYDATA = [
    {
      'id': 82,
      'name': 'Marcos Conde',
      'age': 70,
      'address': 'street and number',
      'city': 'Fortaleza/CE'
    },{
      'id': 102,
      'name': 'Joseph Maya',
      'age': 71,
      'address': 'street 2 and number 2',
      'city': 'Fortaleza 2/CE'
    },{
      'id': 202,
      'name': 'Captain Rogers',
      'age': 72,
      'address': 'street 3 and number 3 ',
      'city': 'Fortaleza 3/CE'
    },
  ]

  const viewDetailsHandler = (event) => {
    console.log(event.target.id)
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
        columns={tableHeaders}
        data={DUMMYDATA}
        detailButton={'VER DETALHES'}
        onHeaderBtnClicked={showNewPatientHandler}
        onRowBtnClicked={viewDetailsHandler}
      />
    </Fragment>
  )
}

export default Patients;
