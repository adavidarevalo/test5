import React from 'react'
import Modal from 'react-modal';
import { AiFillGithub, AiOutlineFileText, AiFillCloseCircle } from "react-icons/ai";
import {Link} from 'gatsby'
import {ModalSection} from '../styles/components/ModalContainer'


const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.75)'
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

const ModalContainer = ({data, modalIsOpen, closeModal}) => {
    const {title, linkPreviewpage, linkGithub, image, description} = data
    return(
        <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
             >
                <ModalSection>
                  <button onClick={closeModal}><AiFillCloseCircle/></button>
                  <img src={image.url} alt={title}/>
                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={linkPreviewpage} target='_blank'>Preview Page <AiOutlineFileText/></Link>
                    <Link to={linkGithub} target='_blank'>View Code <AiFillGithub/></Link>
                  </div>
                </ModalSection>
        </Modal>
    )
}

export default ModalContainer