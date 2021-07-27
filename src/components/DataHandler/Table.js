import React, { Fragment, useMemo } from 'react'
import BackgroundBoard from '../UI/BackgroundBoard'
import { useTable, useSortBy } from 'react-table'

import classes from './Table.module.css'

function Table(props) {

  const columns = React.useMemo(
    () => props.columns, [props.columns]
    )

  const data = React.useMemo(
    () => props.data, [props.data]
    )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    },
    useSortBy
  )

  return (
    <BackgroundBoard>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                  </th>
                  )
                })}
              </tr>
            )})}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
                {props.detailButton &&
                  <td>
                    <button id={row.original.id} onClick={props.onRowBtnClicked}>{props.detailButton}</button>
                  </td>}
              </tr>
            )
          })}
        </tbody>
      </table>
    </BackgroundBoard>
  )
}

export default Table
