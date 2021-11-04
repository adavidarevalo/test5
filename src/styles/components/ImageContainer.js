import styled from '@emotion/styled'
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: scale(1.05);
}
100% {
    opacity: 1;
    transform: scale(1);
}
`
export const Container = styled.div`
display: flex;
flex-direction: column;
width: auto !important;
max-width: 550px;
position: relative;
cursor: pointer;
img{
    min-width: 319px;
    min-height: 195px;
}
div{
    position: absolute;
    background: #000000ba;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    animation: ${fadeIn} .5s both;
    position: absolute;
    top: -50px;
    padding: 20px;
    display: none;
    z-index: 200;
    transition: all 1s ease;
    h3{
        text-align: center;
        color: white;
        font-size: 2rem;
        letter-spacing: 2px;
    }
    p{
        text-align: center;
        color: white;
        font-size: 1.3rem;
    }
    a, button{
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
        text-decoration: none;
        border: none;
        svg{
            margin-left: 10px;
        }
    }
}
&:hover{
    div{
        display: flex;
    }
}
@media (max-width: 500px){
    div{
        a, button{
            margin: 4px auto;
            padding: 0px;
        }
    }
}
`

