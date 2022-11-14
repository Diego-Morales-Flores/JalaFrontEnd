import React from 'react'
import './Dashboard.css'
import dino1 from '../../assets/foto1.jpg'
import dino2 from '../../assets/foto2.jpg'
import dino3 from '../../assets/foto3.jpg'
import jurasick from '../../assets/Jurasic Park.jfif'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Dashboard() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(jurasick);
  const photoDino1 = () => {
    setPhoto(dino1)
  }
  const photoDino2 = () => {
    setPhoto(dino2)
  }
  const photoDino3 = () => {
    setPhoto(dino3)
  }
  const toPhotos = () => {
    navigate("/Photos")
  }

  return (
    <div className='ContainerDashboard'>
      <h1 className='Title'>Dinosaurios del Mundo</h1>
      <div className='DashBoard'>
        <div className='Side'>
          <button className='Link' onClick={photoDino1} >Link 1</button>
          <button className='Link' onClick={photoDino2}>Link 2 </button>
          <button className='Link' onClick={photoDino3}>Link 3 </button>
          <button className='Link' onClick={toPhotos}>Gallery</button>
        </div>
        <div className='Main'>
          <img className='ImageDino' src={photo} alt="JurasicPark" />
        </div>
      </div>
    </div>
  )
}
