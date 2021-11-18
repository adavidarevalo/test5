import React, {useState} from "react"
//import ButtonSelect from "./ButtonSelect"
import { useInView } from 'react-intersection-observer';
import { useStaticQuery, graphql } from 'gatsby';
import Search from './Search'
import {Cotainer, Div} from '../../styles/components/Projects'
import ElementProjects from "./ElementProjects"
import ButtonSelect from './ButtonSelect'

const languages = ["HTML", "CSS", "SASS", "LESS", "JAVASCRIPT", "REACT", "NEXT JS", "GATSBY", "WEBPACK",  "FULLSTACK", "NODE JS", "MONGO DB", "ALL PROJECTS", "GRAPH QL", "ANGULAR", "VUE"]

const Projects =({title, Skills}) =>{
  //Search TI
  const [dataSelect, setDataSelect] = useState(null)
  const [buttonNone, setButtonNone] = useState(false)

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

  
  const [galery, setGalery] = useState(false)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  
    return(
        <Cotainer ref={ref}>
            <h2>{title}</h2>
            <p>{Skills}</p>
            <Div>
              {
            languages.map(items => (       
              <ButtonSelect 
              name={items} 
              data={DataProjects.allDatoCmsPortafolio.nodes}
              dataSelect={dataSelect}
              setDataSelect={setDataSelect}
              buttonNone={buttonNone}
              setButtonNone={setButtonNone}
              />
        ))
              }
            </Div>
            {dataSelect ? (
              <Search
            dataSelect={dataSelect}
            galery={galery}
            inView={inView}
             setGalery={setGalery}
             />
            ) : (
            <ElementProjects
             inView={inView}
             setGalery={setGalery}
             galery={galery}
             elements={DataProjects.allDatoCmsPortafolio.nodes}
             />
            )}
          
        </Cotainer>
    )
}

export default Projects

