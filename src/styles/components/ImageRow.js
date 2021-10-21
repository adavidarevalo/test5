import styled from '@emotion/styled'
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const Container = styled.div`
animation: ${fadeIn} 1s both;
border-bottom: 1px solid gray;
width: 80%;
margin-bottom: 40px;
img{
  width: 90%;
}
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
        text-align: center;
    }
}
&:last-child{
    border-bottom: none;
    margin-bottom: 50px;
}
@media (min-width: 900px){
    display: grid !important;
    grid-template-columns: 300px 2fr;
    div{
        h2{
            text-align: center;
        }
    }
}
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: initial !important;
width: 100% ! important;
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
    margin-inline: 10px;
    &:hover{
        background: #431d82;
        box-shadow: 3px 3px 20px 1px rgba(0, 0, 0, 0.2);
    }
    svg{
        margin-left: 10px;
    }
}

`