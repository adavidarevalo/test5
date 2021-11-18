import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import {Link} from 'gatsby'

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`
export const ContainerHeader = styled.header`
width: 100%;
background: linear-gradient(90deg, rgba(69,16,138,1) 0%, rgba(61,6,95,1) 38%, rgba(32,5,84,1) 100%);
padding: 15px 0px;
font-size: 1.2rem;
div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  svg{
    color: white;
    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  ul{
    position: absolute;
    top: -175px;
    width: 100%;
    background: #333333;
    padding: 10px;
    margin: 0px;
    list-style: none;
    left: 0px;
    z-index: 1000;
    transition: all 1s ease;
    &.Active{
        top: 75px;
    }
    a{
      margin-bottom: 10px;
      color: white;
      font-family: 'Ubuntu', sans-serif;
      text-align: center;
      display: block;
      text-decoration: none;
      &:hover{
        color: #c2beef;
      }
      &.activePage{
        text-decoration: underline;
      }
    }
  }

  nav{
    display: none;
    a{
      margin: 0px;
      margin-left: 20px;
      text-decoration: none;
      color: white;
      font-family: 'Ubuntu', sans-serif;
      transition: all .6s ease;
      &:hover{
        color: #c2beef;
      }
      &.activePage{
        text-decoration: underline;
      }
    }
  }
}
@media (min-width: 800px) {
  div{
    svg{
      display: none;
    }
    nav{
      display: flex;
    }
  }
}
`
export const LogoContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px !important;
    text-decoration: none;
    p{
    margin: 0px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 900;
  }
  img{
        width: 50px;
        margin: 0px 10px;
  }
  `