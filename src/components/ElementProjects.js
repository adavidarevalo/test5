import React from "react"
import ImageContainer from "./ImageContainer"
import ImageRow from "./ImageRow"
import styled from "@emotion/styled"
import { keyframes } from '@emotion/react'
import { AiOutlineBars } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


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

const ElementProjects = ({inView, setGalery, galery, elements}) => {
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
  return(
    <>
    <ButtonProject>
              <button
              onClick={()=>setGalery(!galery)}
              >{galery ?<AiOutlineBars/> : <BsFillGrid3X3GapFill/> }</button>
    </ButtonProject>
    <div>
              {galery 
              ?elements.map(item=>(
                <ImageContainer name={item}/>
                ))
              :elements.map(item=>(
                <ImageRow name={item}/>
                )) 
            }
    </div>
    </>
  )
}

export default ElementProjects