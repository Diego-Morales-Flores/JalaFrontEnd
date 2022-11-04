import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { eraseError } from '../../slices/errorSlice';
import './Errors.css'
export default function Errors(props) {
  const errorFromStore = useSelector(store=>store.error);

  const dispatch = useDispatch()
  const setError = ()=>{
    dispatch(eraseError())
}
  useEffect(() => {
    const timer = setTimeout(() => {
      setError()
    }, 5000)

    return () => clearTimeout(timer)
})

  return (
    <table className='Errors'>
      <tbody className='Body'>
        <tr className='Row'>
          <th className='Title'>Errors</th>
        </tr>
        {errorFromStore ? errorFromStore.map((error, index)=>
        <tr key={index} className='Row'>
        <td className='Cage'>{error.errorName}</td>
        <td className='Cage'>{error.errorAge}</td>
        </tr>
        ): <tr></tr>}
      </tbody>
    </table>
  )
}
