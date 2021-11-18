import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Main from '../components/Home/Main'
import Abilities from '../components/Home/Abilities'
import AboutMe from '../components/Shared/AboutMe'
import Banner from '../components/Shared/Banner.jsx'

const IndexPage = () =>{
  return(
    <Layout>
      <Seo/>
      <Main/>
      <AboutMe/>
      <Abilities/>
      <Banner/>
    </Layout>
  )
} 

export default IndexPage
