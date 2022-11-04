import React from 'react'
import './Table.css'
export default function Table(props) {
  return (
    <table className='Table'>
      <tbody className='Body'>
        <tr className='Row'>
          <th className='Title'>Name</th>
          <th className='Title'>Age</th>
        </tr>
        {props.list ? props.list.map((product, index)=>
        <tr key={index} className='Row'>
        <td className='Cage'>{product.name}</td>
        <td className='Cage'>{product.age}</td>
        </tr>
        ): null}
      </tbody>
    </table>
  )
}
