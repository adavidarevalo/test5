import React from 'react'
import Layout from "../components/layout"
import AboutMe from '../components/AboutMe'
import MoreInformation from '../components/MoreInformation'
import MySkills from '../components/MySkills'


const AboutMePage = () => {
    return(
        <Layout>
            <AboutMe LinkNo={'link'}/>
            <MoreInformation/>
            <MySkills/>
        </Layout>
    )
}


export default AboutMePage