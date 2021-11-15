import * as React from "react"

import Layout from "../components/Layout/layout"
import {Container} from "../styles/components/404"
import NotFount from "../images/NotFound.png"


const NotFound = () => (
  <Layout>
    <Container>
      <img src={NotFount} alt="404"/>
      <p>Not Found</p>
    </Container>
  </Layout>
)

export default NotFound
