import React from 'react'

import classes from './Table.module.css'

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>

            {console.log(props.headerButton)}
            {props.header.map((col) => {
              return <th key={col.name} className={`classes.${col.name}`}>{col.title}</th>
            })}
            {props.headerButton && (
              <th>
                <button id='headerButton' onClick={props.onHeaderBtnClicked}>{props.headerButton}</button>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {props.data.map((patient) => {
            return(
              <tr key={patient.id}>
                {props.header.map((col) => {
                  return <td key={col.name} className={col.name}>{patient[col.name]}</td>
                })}
                {props.detailButton && (
                <td>
                  <button id={patient.id} onClick={props.onRowBtnClicked}>{props.detailButton}</button>
                </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
