import React from "react"
import {Link} from 'gatsby'
import { AiOutlineFullscreen, AiFillGithub, AiOutlineFileText } from "react-icons/ai";
import ModalContainer from './ModalContainer';
import LazyLoad from 'react-lazyload';
import {Container, ButtonContainer} from '../../styles/components/ImageRow.js'


const ImageRow= ({name}) =>{
    const {title, littleTitle, computer, linkGithub, linkPreviewpage} = name
    //modal
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }
    return(
      <LazyLoad height={200} once >
        <Container>
            <img src={computer.url} alt={title}/>
            <div>
                <h2>{title}</h2>
                <p>{littleTitle}</p>
                <ButtonContainer>
                  <Link to={linkPreviewpage} target='_blank'>Preview Page <AiOutlineFileText/></Link>
                  <Link to={linkGithub} target='_blank'>View Code <AiFillGithub/></Link>
                  <button onClick={openModal} >Read More <AiOutlineFullscreen/></button>
                </ButtonContainer>
            </div>
            <ModalContainer 
            data={name} 
            modalIsOpen={modalIsOpen} 
            closeModal={closeModal}/>
        </Container>
      </LazyLoad>
    )
}

export default ImageRow