import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <Seo/>
    <Main/>
    <AboutMe/>
    <Projects title={'Projects'} Skills={'My Skills'}/>
  </Layout>
)

export default IndexPage
