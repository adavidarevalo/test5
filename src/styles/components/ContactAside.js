import styled  from '@emotion/styled'
import { keyframes }  from '@emotion/react'

const Vibra = keyframes`
0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    }
    10%, 20% {
    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }
    30%, 50%, 70%, 90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%, 60%, 80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    }
`

export const AsideDiv = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
width: 30px;
div{
    padding: 5px 6px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
div:first-child{
    background: #3b5998;
}
div:nth-child(2n){
    background: #ff3535;
}
div:nth-child(3n){
    background: black;
}
div:nth-child(4n){
    background: #0e76a8;
}
div:last-child{
    background: #00bb2d;
}
svg{
    color: white;
    font-size: 2rem;
}
svg:hover{
    animation: ${Vibra} 1s both;
}
`
export const Container = styled.section`
position: fixed;
height: 75vh;
top: 0px;
display: flex;
align-items: center;
transform: translateX(-50px);
transition: all .5s ease;
z-index: 100;
&.Active{
    transform: translateX(0px);
}
@media (min-width: 600px){
    transform: translateX(0px);
}
`
export const Arrow = styled.div`
margin-left: 15px;
font-size: 2.3rem;
color: black;
@media (min-width: 600px){
    display: none;
}
`