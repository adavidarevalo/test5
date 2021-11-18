import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

const Skills = () => {
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
        <section className='Skills-Container' id='MySkills'>
            <p className='ChooseMe'>Why Choose Me</p>
            <h2>My Skills</h2>
            <div className='Skills-Table'>
            {Container.allDatoCmsTecnology.nodes.map(info=>(
                    <div className='Skills-Element' data-aos='zoom-in' key={info.name}>
                          <div>
                            <img src={info.image.url} alt={info.name}/>
                          </div>
                          <p>{info.name}</p>
                    </div>
                ))}
            </div>
            <div id='Portfolio'></div>
        </section>
    )
}

export default Skills