import React from "react"
import {Link} from 'gatsby'
import { AiOutlineFullscreen, AiFillGithub, AiOutlineFileText } from "react-icons/ai";
import ModalContainer from './ModalContainer';
import {Container} from '../../styles/components/ImageContainer'
import LazyLoad from 'react-lazyload';


const ImageContainer = ({name}) =>{
    
    const {title, littleTitle, computer, linkPreviewpage, linkGithub, } = name
    //modal
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
    return(
      <LazyLoad height={200} once>
        <Container>
            <img src={computer.url} alt={title}/>
            <p>{title}</p>
            <div>
                <h3>{title}</h3>
                <p>{littleTitle}</p>
                <Link to={linkPreviewpage} target='_blank'>Preview Page <AiOutlineFileText/></Link>
                <Link to={linkGithub} target='_blank'>View Code <AiFillGithub/></Link>
                <button onClick={openModal} >Read More <AiOutlineFullscreen/></button>
            </div>
            <ModalContainer 
            data={name} 
            modalIsOpen={modalIsOpen} 
            closeModal={closeModal}/>
        </Container>
      </LazyLoad>
    )
}

export default ImageContainer