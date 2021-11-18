import React from 'react'
import CodeVideo from '../images/CodeVideo.mp4'
import '../styles/components/Banner.scss'

const Banner = () => {
    return(
        <section className='Banner' data-aos='fade-in'>
            <video autoPlay muted loop>
                <source src={CodeVideo} type="video/mp4"/>
            </video>
            <div>
                <h2>Have a Project on Your Mind</h2>
                <a
                href='#ContactMe'
                >Contact Me</a>

            </div>
        </section>
    )
}

export default Banner