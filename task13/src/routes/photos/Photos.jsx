import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import './Photos.css'
export default function Photos() {
  const [PhotosData, setPhotosData] = useState([])
  const [Photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotosData(json))
  }, [])

  return (
    <div className='PhotosContainer'>
      <h1 className='Title'>Galleria de imagenes</h1>
      <div className='Gallery'>
        {PhotosData.map(photo => (
            <Card key={photo.id} data={photo}> </Card>
        ))}
      </div>
    </div>
  )
}
