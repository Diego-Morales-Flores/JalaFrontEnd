import React from 'react'
import './Dashboard.css'
import dino1 from '../../assets/foto1.jpg'
import dino2 from '../../assets/foto2.jpg'
import dino3 from '../../assets/foto3.jpg'
import jurasick from '../../assets/Jurasic Park.jfif'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Input from '../../components/input/Input'

export default function Dashboard() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(jurasick);
  const [errorMessage, setErrorMessage] = useState('');
  const [album, setAlbum] = useState('')
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const photoDino = (dino) => {
    setPhoto(dino)
  }
  const toPhotos = () => {
    navigate("/Photos")
  }

  const getPhotoDino = (id) => {
    var value = id
    if (value == "") {
      value = "asdf"
    }
    fetch('https://jsonplaceholder.typicode.com/photos/' + value)
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        console.log(data);
        setPhoto(data.url)
        setTitle(data.title)
        setAlbum(data.albumId)
      })
      .catch(error => {
        setErrorMessage(error);
        alert('There was an error!', error)
        console.error('There was an error!', error);
      });
  }

  const deletePhotoDino = (id) => {
    fetch('https://jsonplaceholder.typicode.com/photos/' + id, { method: 'DELETE' })
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        alert('Deleted' || response.status || data.message)
      })
      .catch(error => {
        setErrorMessage(error);
        alert('There was an error!', error)
        console.error('There was an error!', error);
      });
  }

  const createPhotoDino = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        albumId: album,
        title: title,
        url: photo,
        thumbnailUrl: photo
      })
    };
    fetch('https://jsonplaceholder.typicode.com/photos', requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setPhoto(data.url)
        setTitle(data.title)
        setAlbum(data.albumId)
        //setPhoto(jurasick)
        console.log(data);
        alert('Created with id: ' + data.id)
      })
      .catch(error => {
        setErrorMessage(error);
        alert('There was an error!', error)
        console.error('There was an error!', error);
      })
  }

  const UpdateDino = (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        albumId: album,
        title: title,
        url: photo,
        thumbnailUrl: photo
      })
    };
    fetch('https://jsonplaceholder.typicode.com/photos/' + id, requestOptions)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setPhoto(data.url)
        setTitle(data.title)
        setAlbum(data.albumId)
        //setPhoto(jurasick)
        console.log(data);
        alert('Update with id: ' + data.id)
      })
      .catch(error => {
        setErrorMessage(error);
        console.error('There was an error!', error);
      });

  }

  return (
    <div className='ContainerDashboard'>
      <div className='Header'>
        <h1 className='Title'>Dinosaurios del Mundo</h1>
        <div className='Form'>
        <Input set={setId} value={id} label="Id"></Input>
        <Input set={setTitle} value={title} label="Title"></Input>
        <Input set={setAlbum} value={album} label="Album"></Input>
        </div>
      </div>
      <div className='DashBoard'>
        <div className='Side'>
          <button className='Link' onClick={() => photoDino(dino1)} >Link 1</button>
          <button className='Link' onClick={() => photoDino(dino2)}>Link 2 </button>
          <button className='Link' onClick={() => photoDino(dino3)}>Link 3 </button>
          <button className='Link' onClick={() => getPhotoDino(id)}>Get One By Id </button>
          <button className='Link' onClick={() => deletePhotoDino(id)}>Delete</button>
          <button className='Link' onClick={() => createPhotoDino()}>Create</button>
          <button className='Link' onClick={() => UpdateDino(id)}>Update</button>
          <button className='Link' onClick={toPhotos}>Gallery</button>
        </div>
        <div className='Main'>
          <img className='ImageDino' src={photo} alt="JurasicPark" />
        </div>
      </div>
    </div>
  )
}
