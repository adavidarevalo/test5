import React from "react"
import ImageContainer from "./ImageContainer"
import ImageRow from "./ImageRow"
import { AiOutlineBars } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { ButtonProject, ElementContainer } from '../../styles/components/ElementProjects'


const ElementProjects = ({inView, setGalery, galery, elements}) => {
  return(
    <>
    <ButtonProject>
              <button
              className={inView && 'Active'}
              onClick={()=>setGalery(!galery)}
              >{galery ?<AiOutlineBars/> : <BsFillGrid3X3GapFill/> }</button>
    </ButtonProject>
    <div>
              {galery 
              ?elements.map(item=>(
                <ElementContainer>
                <ImageContainer name={item}/>
                </ElementContainer>
                ))
              :elements.map(item=>(
                <ImageRow calssName="NoMAx" name={item}/>
                )) 
            }
    </div>
    </>
  )
}

export default ElementProjects