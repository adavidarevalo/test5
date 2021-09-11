import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'


const fadeInLeft = keyframes`
0% {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
`

const fadeInRight = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`


export const Container = styled.section`
min-height: 90.9vh;
background: rgb(69,16,138);
background: linear-gradient(90deg, rgba(69,16,138,1) 0%, rgba(61,6,95,1) 38%, rgba(32,5,84,1) 100%);
@media (min-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 93.7vh;
}
`


export const ContainerDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
img{
  max-height: 530px;
  max-width: 530px;
  margin-top: 40px;
  animation: ${fadeInRight} 1s both;
}
div{
  animation: ${fadeInLeft} 1s both;
    h2{
        font-size: 2.5rem;
        margin: 0px;
        color: white;
        text-decoration: underline;
        text-align: center;
        margin-top: 15px;
        opacity: .9;
    }
    p{
        font-size: 2rem;
        margin: 25px 0px 25px 0px;
        color: white;
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
        color: #ad78f3;
    }
    p:last-child{
        margin: 0px;
    }
}
img{
    width: 80%;
}
@media (min-width: 900px){
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    width: 80%;
    margin: 0 auto;
    max-width: 1400px;
  img{
    grid-column: 2;
    max-height: 800px;
    max-width: 800px;
    margin: 0 auto;
  }
  div{
        grid-row: 1;
        width: 300px;
  }
}
`
const typewriter = keyframes`
to {
  left: 100%;
  }
`
const blink = keyframes`
to {
  background: transparent;
  }
`
const fadeInUp = keyframes`
to {
  opacity: 1;
  transform: translateY(0);
  }
`
  

export const Div = styled.div`
@media (min-width: 900px){
    display: flex;
    justify-content: end;
    width: 100% !important;
    height: 100%;
    align-items: center;
    div{
      p{
            margin-left: 50px;
      }
      p:last-child{
            margin-left: 125px;
      }
    }
}
`

export const Type = styled.h2`
  font-size: 2.5rem;
  position: relative;
  font-family: 'Ubuntu', sans-serif;
  position: relative;
  width: max-content;
  &::before, &::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }
  
  &::before {
  background: rgb(67,14,129);
  background: linear-gradient(90deg, rgba(67,14,129,1) 0%, rgba(61,6,95,1) 38%, rgba(35,5,85,1) 100%);

  animation: ${typewriter} 6s steps(36) 1s forwards;
  }
  
  &::after {
  width: 0.125em;
  background: white;
  animation: ${typewriter} 6s steps(36) 1s forwards, ${blink} 750ms steps(36) infinite;
  }
  @media (min-width: 900px){
    &::before {
      background: linear-gradient(90deg, rgba(67,13,124,1) 0%, rgba(61,7,97,1) 100%);
      }   
  }
`