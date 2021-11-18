import React from 'react'
import Modal from 'react-modal';
import { AiFillGithub, AiOutlineFileText, AiFillCloseCircle } from "react-icons/ai";
import '../styles/components/Portfolio.scss'

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.75)',
        zIndex: "400"
      },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const ModalContainer = ({data, modalIsOpen, setIsOpen}) => {
    const {title, linkPreviewpage, linkGithub, image, description} = data
    function closeModal() {
      setIsOpen(false);
    }
    return(
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className='ModalContainer'>
        <button onClick={closeModal}><AiFillCloseCircle/></button>
          <img src={image.url} alt={title}/>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
              <a href={linkPreviewpage} target='_blank'>Preview Page <AiOutlineFileText/></a>
              <a href={linkGithub} target='_blank'>View Code <AiFillGithub/></a>
            </div>
          </div>
        </div>
      </Modal>
    )
}

export default ModalContainer