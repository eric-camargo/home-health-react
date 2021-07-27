import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import Table from '../components/DataHandler/Table'

import NewAppointment from '../components/Patient/NewAppointment'
import classes from './Appointments.module.css'

function Appointments() {
  const history = useHistory()
  const [showNewAppointment, setShowNewAppointment] = useState(false)

  const columns = [
    { accessor: 'name', Header: 'Nome do Paciente', type: 'text' },
    { accessor: 'date', Header: 'Data do Atendimento', type: 'date' },
    { accessor: 'specialty', Header: 'Especialidade', type: 'text'},
    { accessor: 'address', Header: 'Endereço', type: 'text' },
    { accessor: 'city', Header: 'Cidade', type: 'text'},
    // { accessor: 'detailsBtn', Header: 'Ver Detalhes', type:'button'}
  ]

  // const sub_columns = columns.slice(0)
  // console.log(sub_columns)
  // sub_columns.push({
  //   id: 'button',
  //   accessor: 'detailsBtn',
  //   Cell: ({value}) => (<button onClick={console.log('clicked Button', value)}>Button</button>)
  // })

  const DUMMYDATA = [
    {
      'id': 0,
      'name': 'Marcos Conde',
      'date': '2021-08-18 12:00:00',
      'specialty': 'Fisioterapia',
      'address': 'street and number',
      'city': 'Fortaleza/CE',
    },{
      'id': 1,
      'name': 'Joseph Maya',
      'date': '2021-08-18 12:00:00',
      'specialty': 'Fisioterapia',
      'address': 'street 2 and number 2',
      'city': 'Fortaleza 2/CE'
    },{
      'id': 2,
      'name': 'Captain Rogers',
      'date': '2021-08-18 12:00:00',
      'specialty': 'Nutrição',
      'address': 'street 3 and number 3 ',
      'city': 'Fortaleza 3/CE'
    },
  ]

  const viewDetailsHandler = (event) => {
    console.log("clicked old")
    const id = event.target.id
    history.push(`/atendimentos/${id}`)
  }

  const showNewAppointmentHandler = () => {
    setShowNewAppointment(true)
  }

  const hideNewAppointmentHandler = () => {
    setShowNewAppointment(false)
  }
  return (
    <Fragment>
      {showNewAppointment && <NewAppointment onClose={hideNewAppointmentHandler}/>}
      <Table
        columns={columns}
        data={DUMMYDATA}
        detailButton={'VER DETALHES'}
        onRowBtnClicked={viewDetailsHandler}
        onHeaderBtnClicked={showNewAppointmentHandler}
      />
    </Fragment>
  )
}

export default Appointments
