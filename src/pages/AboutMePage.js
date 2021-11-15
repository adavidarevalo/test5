import React from 'react'
import Layout from "../components/Layout/layout"
import AboutMe from '../components/Shared/AboutMe'
import MoreInformation from '../components/AboutMe/MoreInformation'
import MySkills from '../components/AboutMe/MySkills'


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