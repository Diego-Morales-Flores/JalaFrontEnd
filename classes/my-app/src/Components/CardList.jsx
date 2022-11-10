import React from 'react'
import './Card.css';
export default function CardList(props) {

  return (
    <div className='CardList'>
      {props.list ? props.list.map((product, index)=>
      <div key={index} className='Card'>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      </div>
      ): <p>empty</p>}
    </div>
  )
}
