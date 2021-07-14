import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
}

function ModalOverlay(props) {
  return(
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>  
    </div>
  )
}

// TODO: Find Out how to Fade Out before killing component
function Modal(props) {
  const portalEl = document.getElementById('overlays')

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </Fragment>
  )
}

export default Modal
