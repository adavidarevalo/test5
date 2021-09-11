import React, {useState, useRef} from "react"
import ImageContainer from "./ImageContainer"
import ImageRow from "./ImageRow"
import ButtonSelect from "./ButtonSelect"
import { AiOutlineBars } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
import { useStaticQuery, graphql } from 'gatsby';
import Search from './Search'
import {Cotainer, Div} from '../styles/components/Projects'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeInDown = keyframes`
0% {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
` 

const languages = ["HTML", "CSS", "SASS", "LESS", "JavaScript", "REACT", "NextJs", "Gatsby", "WEBPACK", "JEST", "FullStack", "Travis Cli", "Node JS", "Mongo DB"]
const Projects =({title, Skills}) =>{
    const [dataContainer, setDataContainer] = useState(null)
    //get Data from Cms
const DataProjects = useStaticQuery(graphql`
query{
    allDatoCmsPortafolio{
      nodes {
        title
        littleTitle
        description
        skills
        computer{
          url
        }
        image{
          url
        }
        linkGithub
        linkPreviewpage
      }
  
    }
  }
`)
  
    const test = (e) => {
        console.log(e)
    }
    const [galery, setGalery] = useState(false)

    const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  const ButtonProject = styled.div`
  display: ${inView ? "block" : "none"} !important;
  button{
    animation: ${fadeInDown} 1s both;
    border: none;
    position: fixed;
    right: 5%;
    bottom: 5%;
    background: #5f27bd;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    &:hover{
      background: #431d82;
    }
    svg{
        color: white;
    }
  }
`

console.log('asdjl;km ',DataProjects.allDatoCmsPortafolio.nodes)
    return(
        <Cotainer ref={ref}>
            <h2>{title}</h2>
            <ButtonProject>
              <button
              onClick={()=>setGalery(!galery)}
              >{galery ?<AiOutlineBars/> : <BsFillGrid3X3GapFill/> }</button>
            </ButtonProject>
            <p>{Skills}</p>
            <Div>
            {languages.map(items => (       
                  <ButtonSelect name={items} setDataContainer={setDataContainer}/>
            ))}
            </Div>
            <Search elements={DataProjects.allDatoCmsPortafolio.nodes} dataContainer={dataContainer}/>
            <div>
              {galery 
              ?DataProjects.allDatoCmsPortafolio.nodes.map(item=>(
                <ImageContainer name={item}/>
                ))
              :DataProjects.allDatoCmsPortafolio.nodes.map(item=>(
                <ImageRow name={item}/>
                )) 
            }
            </div>
        </Cotainer>
    )
}

export default Projects

