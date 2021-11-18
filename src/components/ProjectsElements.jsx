import React, {useState} from 'react'
import { AiOutlineArrowsAlt } from "react-icons/ai";
import Modal from 'react-modal';
import { AiFillGithub, AiOutlineFileText, AiFillCloseCircle } from "react-icons/ai";
import {Link} from 'gatsby'
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

const ProjectsElements = ({data}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  

    function closeModal() {
      setIsOpen(false);
    }
    const {computer, title, image, description, linkPreviewpage, linkGithub} = data
    return(
        <div className='Computer'>

            <img src={computer.url} alt={title} data-aos='fade-up'/>
            <div className='Hover-Details'>
              <div>
                <h3>{title}</h3>
                <button onClick={openModal}><AiOutlineArrowsAlt/></button>
              </div>
            </div>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
                <section className='ModalContainer'>
                  <button onClick={closeModal} aria-label="Close Modal"><AiFillCloseCircle/></button>
                  <img src={image.url} alt={title}/>
                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                      <Link to={linkPreviewpage} target='_blank'>Preview Page <AiOutlineFileText/></Link>
                      <Link to={linkGithub} target='_blank'>View Code <AiFillGithub/></Link>
                    </div>
                  </div>
                </section>
      </Modal>
        </div>
    )
}

export default ProjectsElements