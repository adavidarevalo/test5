import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const Container = styled.section`
margin-block: 20px 40px;
h2{
    text-align: center;
    font-size: 2.1rem;
}
.Elemenet-Container{
    width: 87%;
    margin: 0 auto;
    max-width: 1200px;
    div:first-child{
        animation: ${fadeIn} 1s both;
    }
    div:nth-child(2n){
        animation: ${fadeIn} 1s both;
        animation-delay: .5s
    }
    div:nth-child(3n){
        animation: ${fadeIn} 1s both;
        animation-delay: 1s
    }
}
.Element{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid gray;
    border-radius: 5px;
    p{
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: #484848;
        font-size: 1rem;
        line-height: 25px;
        width: 90%;
    }
    h4{
        color: #7510F7;
        text-align: center;
        font-size: 1.1rem;
    }
}
@media (min-width: 1000px){
    .Elemenet-Container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .Element{
            justify-content: flex-start;
            max-width: 350px;
        }
    }
}
`