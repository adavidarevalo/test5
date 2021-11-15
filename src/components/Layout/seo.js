import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"


function Seo({ description, lang, meta, title }) {

  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet"/>
      <meta name="description" content="David Arevalo potfolio, About FrontEnd"></meta>
      <meta name="keywords" content="Web Developer, David Arevalo, FrontEnd"/>
      <meta name="author" content="David Arevalo" />
      <meta name="copyright" content="David Arevalo copyright" />
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
