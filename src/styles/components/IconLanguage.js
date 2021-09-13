import styled from '@emotion/styled'
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const Container = styled.div`
animation: ${fadeIn} 1s both;
max-width: 450px ;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px !important;
min-height: 250px;
margin-inline: 50px;
justify-content: center;
img {
  width: 205px;
}
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h3{
    text-align: center;
    font-size: 1.8rem;
    margin: 0px 0px 10px 0px;
}
p{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
}

@media (min-width: 900px){
    width: 300px !important;
}
`