import React from "react"
import styled from '@emotion/styled'
import { keyframes } from "@emotion/react"
const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`



const Container = styled.div`
display: flex;
flex-direction: column;
width: auto !important;
div{
    display: none;
    position: absolute;
    background: #333333;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-fill-mode: both;
}
&:hover{
    div{
        display: block;
    }
}
`

const ImageContainer = ({name}) =>{
    return(
        <Container>
            <img src="https://i.ibb.co/rs9jtSs/mac.png"/>
            <p>{name}</p>
            <div>
                <p>text</p>
            </div>
        </Container>
    )
}

export default ImageContainer