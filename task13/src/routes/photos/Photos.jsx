import React from 'react'
import { useEffect, useState } from 'react'
import './Photos.css'
export default function Photos() {
  const [Photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json))
  }, [])
  return (
    <div className='PhotosContainer'>
      <h1 className='Title'>Galleria de imagenes</h1>
      <div className='Gallery'>
        {Photos.map(photo => (
            <img key={photo.id} className='ImagesPhotos' src={photo.thumbnailUrl} alt="" />
        ))}
      </div>
    </div>
  )
}
//<img src={photo.thumbnailUrl} alt="" />
/*
          <div key={photo.id} className={"ImageContainer"}>
            <img className='ImagesPhotos' src={photo.thumbnailUrl} alt="" />
          </div>
*/