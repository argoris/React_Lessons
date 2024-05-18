import React from 'react';
import './ButtonDetails.css';

const ButtonDetails = ({children}) => {
  return (
    <button className={'details-button'}>
      {children}
    </button>
  )
}

export default ButtonDetails
