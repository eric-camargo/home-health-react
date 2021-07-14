import React from 'react'

import BounceLoader from 'react-spinners/BounceLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function Spinner(props) {
  let color = "#FFF"
  if (props.color) {
    color = props.color
  }

  return (
    <BounceLoader color={color} loading={true} css={override} size={90} />
  )
};

export default Spinner
