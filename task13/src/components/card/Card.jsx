import React from 'react'
import './Card.css'
import { useState } from 'react';
import Modal from '@mui/base/ModalUnstyled'

export default function Card(props) {

    const { title, thumbnailUrl, url } = props.data;
    console.log(props.data.title);
    const [modal, setModal] = useState(false)
    const openCloseModal = (message) => {
        console.log(message);
        setModal(!modal);
    }

    const body = (
        <div>
            <img src={url} alt="" />
        </div>
    )

    return (
        <div className='Card'>
            <div className='Titlebox'>
                <p className='TitleCard'>{title}</p>
            </div>
            <div className='ImageContainer'>
                <img className='ImagesPhotos' src={thumbnailUrl} alt="" />
            </div>
            <Modal
                open={modal}
                onClose={openCloseModal}
            >
                <div>
                    <img src={url} alt="" onClick={(e)=>openCloseModal(e)}/>
                </div>
            </Modal>
        </div>
    )
}

