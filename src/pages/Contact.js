import React from 'react'
import Layout from "../components/Layout/layout"
import ContactAside from "../components/Contact/ContactAside.jsx"
import ContactContainer from "../components/Contact/ContactContainer.jsx"


const Contact = () => {
    return(
        <Layout>
            <ContactAside/>
            <ContactContainer/>
        </Layout>
    )
}


export default Contact