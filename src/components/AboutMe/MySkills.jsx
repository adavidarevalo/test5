import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import IconLanguage from './IconLanguage'
import {ContainerSection} from '../../styles/components/MySkills'

const MySkills = () => {
    const Container= useStaticQuery(graphql`
    query{
  allDatoCmsTecnology {
    nodes {
      name
      nivel{
        url
      }
      image{
        url
      }
    }
  }
}

    `)
    return(
        <ContainerSection>
            <h2>My Skills</h2>
            <div>
                {Container.allDatoCmsTecnology.nodes.map(info=>(
                    <IconLanguage data={info}/>
                ))}
            </div>

        </ContainerSection>
    )
}

export default MySkills