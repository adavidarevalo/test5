import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/Layout/seo"
import headerPdf from '../components/Layout/headerPdf'

const SecondPage = () => {
return(
  <>
    <headerPdf/>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)}

export default SecondPage
