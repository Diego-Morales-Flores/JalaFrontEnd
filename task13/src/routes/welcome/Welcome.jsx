import React from 'react'
import { useNavigate } from 'react-router-dom'
import jurasick from '../../assets/Jurasic Park.jfif'
import './Welcome.css'

export default function Welcome() {
  const navigate = useNavigate();

  const toDashboard = () => {
    navigate("/Dashboard")
  }
  return (
    <div className='Container'>
      <div className='WelcomeContainer'>
        <p className='Welcome'>Welcome</p>
      </div>
      <div className='ToConteiner'>
        <p className='To'>to</p>
      </div>
      <img className='Image' src={jurasick} alt="JurasicPark" />
      <button className='Button' onClick={toDashboard}>Click me to Start</button>
    </div>
  )
}
