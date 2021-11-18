import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
