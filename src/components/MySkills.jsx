import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import IconLanguage from './IconLanguage'
import styled from '@emotion/styled'

const ContainerSection = styled.section`
h2{
    text-align: center;
    font-size: 2rem;
    margin-block: 25px 50px;
}
div{
    max-width: 1130px;
    width: 80%;
    margin: 0 auto;
}
@media (min-width: 900px){
    div{
        display: flex;
        flex-wrap: wrap;
    }
}
`

const MySkills = () => {
    const Container= useStaticQuery(graphql`
    query{
        allDatoCmsTecnology{
          nodes{
            name,
            nivel,
            image {
              url
            }
          }
        }
      }
    `)

    console.log('Container ', Container.allDatoCmsTecnology.nodes)
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