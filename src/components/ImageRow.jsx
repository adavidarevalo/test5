import React from "react"
import styled from '@emotion/styled'
import { keyframes } from "@emotion/react"
import {Link} from 'gatsby'
import { AiOutlineFullscreen, AiFillGithub, AiOutlineFileText } from "react-icons/ai";


const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`



const Container = styled.div`
animation-name: ${fadeIn};
animation-duration: 1s;
animation-fill-mode: both;
border-bottom: 1px solid gray;
width: 80%;
margin-bottom: 40px;
div{
    margin: 0px;
    flex-direction: column;
    h2{
        margin: 0px;
        text-align: inherit;
        font-size: 1.6rem;
    }
    p{
        margin-block: 10px;
        text-align: inherit;
    }
}
&:last-child{
    border-bottom: none;
    margin-bottom: 50px;
}
@media (min-width: 900px){
    display: grid !important;
    grid-template-columns: 1fr 2fr;
}
`

const ButtonContainer = styled.div`
display: flex;

flex-direction: initial !important;
width: 100% ! important;
a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    margin: 0px auto;
    margin-bottom: 20px;
    text-decaration: none;
    font-family: 'Ubuntu', sans-serif;
    background: #5f27bd;
    padding: 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    svg{
        margin-left: 10px;
    }
}

`

const ImageRow= ({name}) =>{
    return(
        <Container>
            <img src="https://i.ibb.co/rs9jtSs/mac.png"/>
            <div>
                <h2>{name}</h2>
                <p>text</p>
                <ButtonContainer>
                  <Link>Preview Page <AiOutlineFileText/></Link>
                  <Link>View Code <AiFillGithub/></Link>
                  <Link>Read More <AiOutlineFullscreen/></Link>
                </ButtonContainer>
            </div>
        </Container>
    )
}

export default ImageRow