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
img{
    width: 205px;
}
@media (min-width: 900px){
    width: 320px !important;
    display: grid !important;
    grid-template-columns: 1fr 1fr;
}
`