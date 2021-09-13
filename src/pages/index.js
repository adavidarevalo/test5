import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'


const IndexPage = () =>{
  return(
    <Layout>
      <Seo/>
      <Main/>
      <AboutMe/>
      <Projects title={'Projects'} Skills={'My Skills'}/>
    </Layout>
  )
} 

export default IndexPage
