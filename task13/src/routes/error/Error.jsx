import React from 'react'
import { useRouteError } from 'react-router-dom'
import ErrorImage from '../../assets/error.jfif'
import './Error.css'

export default function Error() {
  const error = useRouteError();
  return (
    <div className='Error-Container'>
      <h4 className='ErrorTitle'>{error.status}{error.statusText}</h4>
      <div className='ImageContainer'>
        <img className='ErrorImage' src={ErrorImage} alt="error" />
      </div>
      <h4 className='ErrorLeyend'>There is something we are missing</h4>
    </div>
  )
}
