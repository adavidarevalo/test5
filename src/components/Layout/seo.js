import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"


function Seo() {

  return (
    <Helmet>
      <meta name="description" content="David Arevalo potfolio, About FrontEnd"></meta>
      <meta name="keywords" content="Web Developer, David Arevalo, FrontEnd"/>
      <meta name="author" content="David Arevalo" />
      <meta name="copyright" content="David Arevalo copyright" />
      <meta name="icon" href="../../images/Logo.png" />
      
      <title>David Portfolio</title>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
