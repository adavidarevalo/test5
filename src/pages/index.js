import React, {useEffect} from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import PresentationMain from '../components/PresentationMain'
import AsideSocial from '../components/AsideSocial'
import Abilities from '../components/Abilities'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Banner from '../components/Banner'
import Portfolio from '../components/Portfolio'
import Form from '../components/Form'
import '../../node_modules/aos/dist/aos.css'
import Aos from 'aos'

const IndexPage = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
}, [])
return(
  <Layout>
    <Seo title="David Arevalo" />
    <PresentationMain/>
    <AsideSocial/>
    <AboutMe/>
    <Abilities/>
    <Banner/>
    <Skills/>
    <Portfolio/>
    <Form/>
  </Layout>
)
}
export default IndexPage
