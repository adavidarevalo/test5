import * as React from "react"
import Spinner from '../components/Spinner'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <Seo/>
    <Spinner/>
    <Main/>
    <AboutMe/>
    <Projects title={'Projects'} Skills={'My Skills'}/>
  </Layout>
)

export default IndexPage
