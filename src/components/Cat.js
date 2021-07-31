import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const Cat = (props) => {
    const [openModal, setOpenModal] = useState(false)

    const handleChange = (e) => {
        e.preventDefault() 
        setOpenModal(true)
    }
    
    return (
        <div>
                <div className="col s12 m6 l3">
                        <div className="card">
                                <div className="card-image">
                                    {
                                        props.image ? <img src={props.image.url} alt={props.name} style={{width: '100%', height: 360 }}/> : 
                                        <img src={'https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg'} alt={props.name} style={{width: '100%', height: 360}}/>    
                                    }
                                    <span className="card-title grey darken-1">{props.name}</span>
                                </div>
                                <div className="card-content">
                                    <div style={{display: 'flex', flexDirection: 'row'}}><strong>Affection:</strong>{Array(props.affection).fill().map((_, i) => (<p key={i} style={{ padding: '3px' }}>⭐️</p>))}</div>
                                    <div><strong>Short Legs: {props.shortLegs ? 'Yes' : 'No'}</strong></div>
                                </div>
                                <div className="card-action">
                                    <a href='_' onClick={handleChange}>Read Description</a>
                                </div>
                        </div>
                </div>
                <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)} style={{ overlay: { backgroundColor: 'darkgrey' } }}>
                    <p>{props.description}</p>
                    <strong onClick={() => setOpenModal(false)} style={{ cursor: 'pointer' }}>Close-Modal</strong>
                </Modal>
        </div>       
    )
}

export default Cat
