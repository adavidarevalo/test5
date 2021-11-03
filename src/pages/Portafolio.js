import React from 'react'
import Layout from "../components/layout"
import Projects from '../components/Projects'
import styled from '@emotion/styled'

const Container = styled.section`
margin-top: 35px;
min-height: 81vh;
`

const Portafolio = () => {
    return(
        <Layout>
            <Container>
                    <Projects 
                    title={'My Projects'} NotSkills={'no baby'}/>
            </Container>
        </Layout>
    )
}


export default Portafolio