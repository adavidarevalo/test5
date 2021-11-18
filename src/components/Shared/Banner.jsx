import React from 'react'
import CodeVideo from '../../images/CodeVideo.mp4'
import {Link} from 'gatsby'
import { Container } from '../../styles/components/Banner'

const Banner = () => {
    return(
        <Container>
            <video autoPlay muted loop>
                <source src={CodeVideo} type="video/mp4"/>
            </video>
            <div>
                <h2>Know my projects</h2>
                <Link
                to='/Portafolio'
                >Projects</Link>

            </div>
        </Container>
    )
}

export default Banner