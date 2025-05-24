import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { useGlobalContext } from '../AppContext';

const Modal = () => {
      const {isModalOpen,closeModal} =   useGlobalContext()
    
    return (
        <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
            <button onClick={closeModal}><AiFillCloseCircle/></button>
            <h3>Modal Content</h3>
        </div>
      )
}

export default Modal