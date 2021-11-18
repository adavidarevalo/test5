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
margin-top: 25px;
h2{
    text-align: center;
    font-size: 2.5rem;
    text-decoration: underline;
    color: #3e3d3d;
}
`
export const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    margin-top: 25px;
    width: 80%;
    animation: ${fadeInLeft} 1s both;
    min-width: 256px;
    min-height: 205px;
}
div{
    animation: ${fadeInRight} 1s both;
    table, p{
        width: 80%;
        margin: 0 auto;
        font-family: 'Ubuntu', sans-serif;
    }
    p{
        margin-block: 25px;
        color: #484848;
    }
    a{
        margin-block: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 1.2rem;
        color: #3e3d3d;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        &:hover{
            text-decoration: underline;
        }
        svg{
            margin-left: 10px;
        }
    }
    table{
        tr{
            td{
                svg{
                    color: #5C3391;
                }
                .ColorGray{
                    color: #676666 !important;
                }
            }
        }
    }
}
@media (min-width: 1300px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1300px;
    margin: 0 auto;
}
`