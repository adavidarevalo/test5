import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import ButtonSelect from './ButtonSelect'
import ProjectsElements from './ProjectsElements'
import waveSquare from '../images/waveSquare.svg'

const Portfolio = () => {
    const [dataSelect, setDataSelect] = useState([])
    const [buttonNone, setButtonNone] = useState(false)

    const languages = ["HTML", "CSS", "SASS", "LESS", "JAVASCRIPT", "REACT", "NEXT JS", "GATSBY", "WEBPACK",  "FULLSTACK", "NODE JS", "MONGO DB", "ALL PROJECTS", "GRAPH QL", "ANGULAR", "VUE"]
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
    const {nodes} = DataProjects.allDatoCmsPortafolio
    useEffect(() => {
      ElementsPaginator()
    }, [])
    const ElementsPaginator = async() => {
      await setDataSelect(nodes)
    }
    return(
      <>
        <section className='Portfolio-Container'>
            <p className='ChooseMe'>My Portfolio</p>
            <h2>Recent Works</h2>
            <div className='ButtonContainer'>
                {languages.map(items => (    
                    <ButtonSelect 
                    key={items}
                    name={items} 
                    data={nodes}
                    dataSelect={dataSelect}
                    setDataSelect={setDataSelect}
                    buttonNone={buttonNone}
                    setButtonNone={setButtonNone}
                    />
                ))
                }
            </div>
            <div className='Galery'>
                {dataSelect.map(item => (
                    <ProjectsElements data={item} key={item.title}/>
                ))

                }

            </div>
        </section>
        <img src={waveSquare} alt='Wave' className='Portfolio' id='ContactMe'/>
      </>
    )
}

export default Portfolio