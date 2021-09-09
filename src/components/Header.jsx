import React, {useState} from 'react'
import styled from '@emotion/styled'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { keyframes } from '@emotion/react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';


const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

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
const Header = (props) =>{
  const [menu, setMenu] = useState(true)


const ContainerHeader = styled.header`
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
    top: 45px;
    width: 100%;
    background: #333333;
    padding: 10px;
    margin: 0px;
    list-style: none;
    left: 0px;
    animation-name: ${fadeInLeft};
    animation-duration: 1s;
    animation-fill-mode: both;
    z-index: 1000;
    ${menu && "display: none;"}
    a{
      color: white;
      font-family: 'Ubuntu', sans-serif;
      text-align: center;
      display: block;
      text-decoration: none;
      &.activePage{
        text-decoration: underline;
      }
    }
  }
  p{
    margin: 0px;
    color: white;
    font-family: 'Ubuntu', sans-serif;
  }
  nav{
    display: none;
    a{
      margin: 0px;
      margin-left: 20px;
      text-decoration: none;
      color: white;
      font-family: 'Ubuntu', sans-serif;
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
  return(
    <ContainerHeader>
      <div>
        <p>David</p>
        {menu 
        ? <AiOutlineMenu onClick={()=> setMenu(false)}/> 
        : < AiOutlineClose onClick={()=> setMenu(true)}/>
        }
        <ul>
          <Link 
          to='/'
          activeClassName="activePage"
          >home</Link>
          <Link 
          to='/AboutMe'
          activeClassName="activePage"
          >About Me</Link>
          <Link 
          to='/Portafolio'
          activeClassName="activePage"
          >Portafolio</Link>
        </ul>
        <nav>
            <Link 
            to='/'
            activeClassName="activePage"
            >Home</Link>
            <Link 
            to='/AboutMe'
            activeClassName="activePage"
            >About Me</Link>
            <Link 
            to='/Portafolio'
            activeClassName="activePage"
            >Portafolio</Link>
        </nav>
      </div>
    </ContainerHeader>
  )
}

export default Header

